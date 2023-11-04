import { MetadataRoute } from 'next'
import siteMetadata from '@/config/siteMetadata'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },

        sitemap: 'https://html-to-react.com/sitemap.xml',
        host: 'https://html-to-react.com/',
    }
}
