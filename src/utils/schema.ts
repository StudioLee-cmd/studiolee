import { siteDetails } from '@/data/siteDetails';
import { IPost } from '@/data/posts';
import { IAuthor } from '@/data/authors';
import { IFAQ } from '@/types';

const SITE_URL = siteDetails.siteUrl.replace(/\/$/, '');

export function organizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteDetails.siteName,
        url: SITE_URL,
        logo: `${SITE_URL}/images/brand/logo-header-v3.png`,
        description: siteDetails.metadata.description,
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'tim@studiolee.nl',
            contactType: 'customer service',
            availableLanguage: 'Dutch',
        },
    };
}

export function websiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteDetails.siteName,
        url: SITE_URL,
        inLanguage: 'nl',
        publisher: {
            '@type': 'Organization',
            name: siteDetails.siteName,
        },
    };
}

export function blogPostingSchema(post: IPost, author: IAuthor) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: `${SITE_URL}${post.image}`,
        datePublished: post.date,
        dateModified: post.date,
        author: {
            '@type': 'Person',
            name: author.name,
            url: `${SITE_URL}/author/${author.slug}`,
            image: `${SITE_URL}${author.image}`,
        },
        publisher: {
            '@type': 'Organization',
            name: siteDetails.siteName,
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/images/brand/logo-header-v3.png`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/blog/${post.slug}`,
        },
        keywords: post.tags.join(', '),
    };
}

export function faqPageSchema(faqs: IFAQ[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

export function collectionPageSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Kennisbank',
        description: 'Artikelen, tips en inzichten over SEO, CRO, AI en automatisering voor ondernemers.',
        url: `${SITE_URL}/blog`,
    };
}

export function serviceOfferSchema(services: { name: string; description: string; price?: string; priceCurrency?: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: services.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'Service',
                name: service.name,
                description: service.description,
                provider: {
                    '@type': 'Organization',
                    name: siteDetails.siteName,
                },
                ...(service.price && {
                    offers: {
                        '@type': 'Offer',
                        price: service.price,
                        priceCurrency: service.priceCurrency || 'EUR',
                    },
                }),
            },
        })),
    };
}

export function personSchema(author: IAuthor) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: author.name,
        jobTitle: author.role,
        image: `${SITE_URL}${author.image}`,
        description: author.bio,
        url: `${SITE_URL}/author/${author.slug}`,
        worksFor: {
            '@type': 'Organization',
            name: siteDetails.siteName,
            url: SITE_URL,
        },
        ...(author.social?.email && { email: author.social.email }),
    };
}
