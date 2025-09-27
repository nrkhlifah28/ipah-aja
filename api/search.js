module.exports = async (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Query tidak boleh kosong" });
  }

  try {
    const response = await fetch(
      `https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${encodeURIComponent(
        q
      )}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${encodeURIComponent(
        q
      )}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0 Safari/537.36"
        }
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Gagal fetch data" });
    }

    const json = await response.json();
    const data = json.resource_response.data.results;

    if (!data || !data.length) {
      return res.status(404).json({ error: "Gambar tidak ditemukan" });
    }

    const randomImage =
      data[Math.floor(Math.random() * data.length)].images.orig.url;

    res.status(200).json({ image: randomImage });
  } catch (err) {
    res.status(500).json({ error: "Server error", detail: err.message });
  }
};
