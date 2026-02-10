import { MetadataRoute } from 'next'
import { posts } from '@/data/posts'
import { authors } from '@/data/authors'
import { siteDetails } from '@/data/siteDetails'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteDetails.siteUrl.endsWith('/')
        ? siteDetails.siteUrl.slice(0, -1)
        : siteDetails.siteUrl

    // Static routes
    const routes = [
        '',
        '/blog',
        '/portfolio',
        '/free-trial',
        '/algemene-voorwaarden',
        '/privacy',
        '/legal',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic routes: Blog posts
    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // Dynamic routes: Authors
    const authorRoutes = authors.map((author) => ({
        url: `${baseUrl}/author/${author.slug}`,
        lastModified: new Date(), // Could be updated if we had a date field for authors
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...routes, ...blogRoutes, ...authorRoutes]
}
