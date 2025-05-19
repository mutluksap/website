// src/app/sitemap.xml/route.ts

export async function GET() {
    const baseUrl = 'https://mutlukasap.dev';

    const routes = [
        '',
        'about',
        'music',
        'photos',
        'projects'
    ];

    const currentDate = new Date().toISOString();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
        .map(
            (route) => `
    <url>
      <loc>${baseUrl}/${route}</loc>
      <lastmod>${currentDate}</lastmod>
    </url>`
        )
        .join('')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}