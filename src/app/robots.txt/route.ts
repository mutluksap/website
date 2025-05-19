export async function GET() {
    const content = `
User-agent: *
Allow: /

Sitemap: https://mutlukasap.dev/sitemap.xml
`;

    return new Response(content.trim(), {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}
