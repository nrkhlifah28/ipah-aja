// file: api/ai/[name].js
import fetch from "node-fetch";

export default async function handler(req, res) {
  const { name, q } = req.query;
  const query = q || "Hello";

  try {
    const url = `https://api.siputzx.my.id/api/ai/gpt3?prompt=You are a helpful assistant.&content=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json({
      endpoint: name,
      query,
      result: data
    });
  } catch (err) {
    res.status(500).json({ error: "Gagal fetch API", detail: err.message });
  }
}
