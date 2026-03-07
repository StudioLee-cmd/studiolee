'use client';

import React from 'react';

interface BlogContentProps {
    content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
    return (
        <>
            <style jsx global>{`
                .blog-content {
                    font-size: 1.125rem;
                    line-height: 1.8;
                    color: #1f2937;
                }
                .dark .blog-content {
                    color: #d1d5db;
                }
                .blog-content h2 {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                    color: #111827;
                    line-height: 1.3;
                }
                .dark .blog-content h2 {
                    color: #ffffff;
                }
                .blog-content h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    color: #1f2937;
                    line-height: 1.4;
                }
                .dark .blog-content h3 {
                    color: #e5e7eb;
                }
                .blog-content p {
                    margin-bottom: 1.5rem;
                    color: #374151;
                }
                .dark .blog-content p {
                    color: #9ca3af;
                }
                .blog-content strong {
                    color: #111827;
                    font-weight: 600;
                }
                .dark .blog-content strong {
                    color: #ffffff;
                }
                .blog-content ul, .blog-content ol {
                    margin-bottom: 2rem;
                    padding-left: 1.5rem;
                }
                .blog-content li {
                    margin-bottom: 0.75rem;
                    color: #374151;
                    line-height: 1.7;
                }
                .dark .blog-content li {
                    color: #9ca3af;
                }
                .blog-content ul li {
                    list-style-type: none;
                    position: relative;
                    padding-left: 1.5rem;
                }
                .blog-content ul li:before {
                    content: "→";
                    position: absolute;
                    left: 0;
                    color: #2563eb;
                    font-weight: 600;
                }
                .dark .blog-content ul li:before {
                    color: #f97316;
                }
                .blog-content ol {
                    counter-reset: item;
                }
                .blog-content ol li {
                    counter-increment: item;
                    list-style-type: none;
                    position: relative;
                    padding-left: 2rem;
                }
                .blog-content ol li:before {
                    content: counter(item) ".";
                    position: absolute;
                    left: 0;
                    color: #2563eb;
                    font-weight: 700;
                    font-size: 1.125rem;
                }
                .dark .blog-content ol li:before {
                    color: #f97316;
                }
                .blog-content blockquote {
                    border-left: 4px solid #2563eb;
                    padding-left: 1.5rem;
                    margin: 2rem 0;
                    background: #f8fafc;
                    padding: 1.5rem;
                    border-radius: 0.5rem;
                    font-style: italic;
                    color: #475569;
                }
                .dark .blog-content blockquote {
                    border-left-color: #f97316;
                    background: #171717;
                    color: #9ca3af;
                }
                .blog-content blockquote p {
                    margin-bottom: 0.75rem;
                }
                .blog-content blockquote p:last-child {
                    margin-bottom: 0;
                }
                .blog-content a {
                    color: #2563eb;
                    text-decoration: underline;
                    text-underline-offset: 2px;
                    transition: color 0.2s;
                }
                .blog-content a:hover {
                    color: #1d4ed8;
                }
                .dark .blog-content a {
                    color: #f97316;
                }
                .dark .blog-content a:hover {
                    color: #fb923c;
                }
            `}</style>
            <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </>
    );
}

