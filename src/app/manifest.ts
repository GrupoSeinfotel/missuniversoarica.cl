import { MetadataRoute } from 'next'

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Miss Universe Arica',
        short_name: 'MU Arica',
        description: 'Plataforma oficial de Miss Universe Arica',
        start_url: '/',
        display: 'standalone',
        background_color: '#111111',
        theme_color: '#f4245f',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
