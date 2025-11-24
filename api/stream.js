// api/stream.js
export const config = { runtime: 'edge' };

export default async function handler(req) {
  // Vercel injeta automaticamente o país do IP
  const country = req.headers.get('x-vercel-ip-country') || 'XX';

  // Só permite acesso da Holanda (NL)
  if (country !== 'NL') {
    return new Response('Deze stream is alleen beschikbaar in Nederland.', {
      status: 403,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }

  // Redireciona para o stream real da Holanda
  return Response.redirect('https://stream.zeno.fm/olisuxy9v3vtv', 302);
}
