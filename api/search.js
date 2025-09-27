// api/search.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  const { q } = req.query;
  if (!q) {
    return res.status(400).json({ error: "Query is required" });
  }

  try {
    const response = await fetch(
      `https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${encodeURIComponent(
        q
      )}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${encodeURIComponent(
        q
      )}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D`
    );

    const json = await response.json();
    const data = json.resource_response.data.results || [];

    const images = data.map((item) => item.images.orig.url);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({ images });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Pinterest data" });
  }
}
