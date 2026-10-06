import type { APIRoute } from 'astro';

// Endpoint ini berjalan di server (Vercel Function), BUKAN di browser.
// API key diambil dari Environment Variable — tidak pernah dikirim ke klien.
export const prerender = false;

const AI_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

// Daftar model fallback (vision di atas agar bisa handle gambar).
const AI_MODELS = [
  'google/gemma-4-26b-a4b-it:free',
  'google/gemma-4-31b-it:free',
  'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free',
  'nvidia/nemotron-nano-12b-v2-vl:free',
  'tencent/hy3:free',
  'nvidia/nemotron-3-ultra-550b-a55b:free',
  'poolside/laguna-m.1:free',
  'nvidia/nemotron-3-super-120b-a12b:free',
  'poolside/laguna-xs-2.1:free',
  'nvidia/nemotron-3-nano-30b-a3b:free',
  'openai/gpt-oss-20b:free',
  'nvidia/nemotron-nano-9b-v2:free',
  'meta-llama/llama-3.3-70b-instruct:free',
  'qwen/qwen3-next-80b-a3b-instruct:free',
  'nousresearch/hermes-3-llama-3.1-405b:free',
  'openrouter/free',
];

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

async function callWithFallback(
  apiKey: string,
  messages: unknown,
  referer: string,
  modelIndex = 0,
): Promise<any> {
  if (modelIndex >= AI_MODELS.length) {
    throw new Error('Waduh, semua AI lagi istirahat serentak nih 😅 Coba lagi dalam beberapa detik ya teman perencana!');
  }

  const model = AI_MODELS[modelIndex];

  try {
    const res = await fetch(AI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey,
        'HTTP-Referer': referer,
        'X-Title': 'Gana AI - Portal Perencana',
      },
      body: JSON.stringify({ model, messages }),
    });

    const data = await res.json();

    if (data.error) {
      const msg: string = data.error.message || '';
      const shouldFallback =
        res.status === 429 || res.status === 503 || res.status === 404 || res.status === 502 ||
        msg.includes('No endpoints') || msg.includes('unavailable') ||
        msg.includes('overloaded') || msg.includes('not available');
      if (shouldFallback) return callWithFallback(apiKey, messages, referer, modelIndex + 1);
      throw new Error(msg || 'Gagal memanggil model AI.');
    }

    return data;
  } catch (err: any) {
    if (!err?.message?.includes('Waduh')) {
      return callWithFallback(apiKey, messages, referer, modelIndex + 1);
    }
    throw err;
  }
}

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.OPENROUTER_API_KEY || process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return json({ error: { message: 'Konfigurasi server belum lengkap (API key belum di-set).' } }, 500);
  }

  let payload: any;
  try {
    payload = await request.json();
  } catch {
    return json({ error: { message: 'Permintaan tidak valid.' } }, 400);
  }

  const messages = payload?.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return json({ error: { message: 'Pesan kosong.' } }, 400);
  }

  const referer = request.headers.get('origin') || new URL(request.url).origin;

  try {
    const data = await callWithFallback(apiKey, messages, referer);
    return json(data);
  } catch (err: any) {
    return json({ error: { message: err?.message || 'Terjadi kesalahan di server.' } }, 502);
  }
};
