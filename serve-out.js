// Zero-dependency static server for the Next.js `out/` export, mirroring the
// clean-URL rules in public/.htaccess, so the production bundle can be tested.
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "out");
const PORT = Number(process.argv[2] || 4321);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function send(res, file) {
  const ext = path.extname(file).toLowerCase();
  res.writeHead(200, { "Content-Type": TYPES[ext] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
}

http
  .createServer((req, res) => {
    let pathname;
    try {
      pathname = decodeURIComponent(new URL(req.url, "http://x").pathname);
    } catch {
      pathname = "/";
    }
    if (pathname.endsWith("/")) pathname += "index.html";

    const direct = path.join(ROOT, pathname);
    if (direct.startsWith(ROOT) && fs.existsSync(direct) && fs.statSync(direct).isFile()) {
      return send(res, direct);
    }
    // /rooms -> /rooms.html  (the .htaccess REQUEST_FILENAME.html fallback)
    const asHtml = direct + ".html";
    if (asHtml.startsWith(ROOT) && fs.existsSync(asHtml)) return send(res, asHtml);
    // /rooms/ -> /rooms/index.html
    const asIndex = path.join(direct, "index.html");
    if (asIndex.startsWith(ROOT) && fs.existsSync(asIndex)) return send(res, asIndex);

    const notFound = path.join(ROOT, "404.html");
    if (fs.existsSync(notFound)) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      return fs.createReadStream(notFound).pipe(res);
    }
    res.writeHead(404);
    res.end("not found");
  })
  .listen(PORT, () => console.log("serving " + ROOT + " on http://localhost:" + PORT));
