import type React from 'react';
import type { Metadata } from 'next';
import { siteMetadata } from '@/lib/seo';

const editorTitle = `Resume Editor | ${siteMetadata.name}`;
const editorDescription =
  'Build and polish your CV with real-time preview, AI suggestions, and instant PDF export.';

export const metadata: Metadata = {
  title: editorTitle,
  description: editorDescription,
  alternates: {
    canonical: '/editor',
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: editorTitle,
    description: editorDescription,
    url: '/editor',
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: siteMetadata.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: editorTitle,
    description: editorDescription,
    images: [siteMetadata.ogImage],
  },
};

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
