// file: api/search.js
const https = require("https");

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
      })
      .on("error", reject);
  });
}

module.exports = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ error: "Query tidak boleh kosong" });
    }

    const url = `https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${encodeURIComponent(
      q
    )}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${encodeURIComponent(
      q
    )}%22%2C%22scope%22%3A%22pins%22%7D%2C%22context%22%3A%7B%7D%7D`;

    const json = await fetchJson(url);

    const results = json.resource_response?.data?.results || [];
    if (!results.length) {
      return res.json({ error: `"${q}" tidak ditemukan 😢` });
    }

    // ambil 1 random image
    const random =
      results[Math.floor(Math.random() * results.length)].images.orig.url;

    res.status(200).json({ query: q, image: random });
  } catch (err) {
    res.status(500).json({ error: err.message || "Terjadi kesalahan" });
  }
};
