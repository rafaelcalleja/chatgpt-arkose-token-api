// noinspection SpellCheckingInspection

const http = require('http');
const url = require('url');
const fun = require('funcaptcha');

http.createServer(async (req, res) => {
  console.log('...')
  const requestUrl = req.url;

  const parsedUrl = url.parse(requestUrl, true);
  const query = parsedUrl.query;

  const key = query.key || "35536E1E-65B4-4D96-9D97-6ADB7EFF8147";
  const token = await fun.getToken({
    pkey: key,
    surl: "https://tcr9i.chat.openai.com",
    headers: {
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    },
    site: "https://chat.openai.com"
  });
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(token));
}).listen(65526);
