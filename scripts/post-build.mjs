import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.resolve(__dirname, "../out");
const publicDir = path.resolve(__dirname, "../public");

function copyFileSafe(src, dest) {
  if (fs.existsSync(src)) {
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
    console.log(`[post-build] Copied: ${path.relative(outDir, src)} -> ${path.relative(outDir, dest)}`);
  }
}

function runPostBuild() {
  if (!fs.existsSync(outDir)) {
    console.error("[post-build] Error: out directory does not exist.");
    process.exit(1);
  }

  console.log("[post-build] Running Hostinger & Apache compatibility fixes...");

  // 1. Copy public/.htaccess to out/.htaccess
  const htaccessSrc = path.join(publicDir, ".htaccess");
  const htaccessDest = path.join(outDir, ".htaccess");
  copyFileSafe(htaccessSrc, htaccessDest);

  // 2. Scan out directory: for any directory where <dir>.html exists in parent, ensure <dir>/index.html exists
  function scanAndCreateIndexes(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const subDir = path.join(currentDir, entry.name);
        if (entry.name === "_next") continue;

        // Check if there is an <entry.name>.html at the same level
        const siblingHtml = path.join(currentDir, `${entry.name}.html`);
        const targetIndex = path.join(subDir, "index.html");

        if (fs.existsSync(siblingHtml) && !fs.existsSync(targetIndex)) {
          copyFileSafe(siblingHtml, targetIndex);
        }

        // Recurse into subdirectories
        scanAndCreateIndexes(subDir);
      }
    }
  }

  scanAndCreateIndexes(outDir);

  // 3. Explicit safety check for critical routes
  const criticalCopies = [
    { src: "yogiraj-nx.html", dest: "yogiraj-nx/index.html" },
    { src: "rooms.html", dest: "rooms/index.html" },
    { src: "gallery.html", dest: "gallery/index.html" },
    { src: "yogiraj-nx/rooms.html", dest: "yogiraj-nx/rooms/index.html" },
  ];

  for (const { src, dest } of criticalCopies) {
    const srcPath = path.join(outDir, src);
    const destPath = path.join(outDir, dest);
    if (fs.existsSync(srcPath)) {
      copyFileSafe(srcPath, destPath);
    }
  }

  console.log("[post-build] Successfully applied all Hostinger pre-deployment fixes.");
}

runPostBuild();
