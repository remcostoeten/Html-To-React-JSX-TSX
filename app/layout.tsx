import Head from 'next/head'
import type { Metadata } from 'next'

import CustomStatusBadge from "@/components/core/StatusBadge"
import {
  PageHeader,
  PageHeaderDescription
} from "@/components/ui/page-nav"
import { LayoutProps } from '@/types/types'
import '@/styles/globals.scss'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import { Analytics } from '@vercel/analytics/react';

const metadata = {
  title: {
    default: "HTML to JSX Converter",
    template: "HTML to JSX Converter",
  },
  description: "Convert your HTML code to JSX or TSX with ease. Simply paste your HTML and get the JSX/TSX version. Additional features include prefixing the output with 'use client' for Next.js and TypeScript type inclusion.",
  keywords: [
    "HTML",
    "JSX",
    "TSX",
    "Next.js",
    "TypeScript",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://remcostoeten.nl/html-to-jsx",
    title: "HTML to JSX Converter",
    description: "Convert your HTML code to JSX or TSX with ease. Simply paste your HTML and get the JSX/TSX version. Additional features include prefixing the output with 'use client' for Next.js and TypeScript type inclusion.",
    siteName: "HTML to JSX Converter",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "https://remcostoeten.nl/site.webmanifest",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="shortcut icon" href={metadata.icons.shortcut} />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />
        <link rel="manifest" href={metadata.manifest} />
      </Head>
      <body className='text-white relative container section black-block--section rounded-sm'>
        <div style={{ position: 'absolute', right: '10%', top: '5%', zIndex: 9999 }}>
          <CustomStatusBadge title="beta" emojiKey="rocket" index={0} />
          <CustomStatusBadge title="wip" emojiKey="fire" index={1} />
          <PageHeader>
            <span className="inline-block  space-y-4 font-heading text-4xl sm:mb-0 lg:text-5xl">
              Convert your HTML to React JSX or TSX
            </span>
            <PageHeaderDescription>
              <span className="cursor-hover ">
                Simply paste in your HTML and watch the magic happen. Also supports conversion of SVG's.🚀🪄
              </span>
            </PageHeaderDescription>
          </PageHeader>
          <main>
            {children}

          </main>
        </div>
        <Analytics />
        <Toaster />
      </body>
    </>
  )
}
