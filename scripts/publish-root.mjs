import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";

const root = new URL("../", import.meta.url);
const dist = new URL("../dist/", import.meta.url);
const generatedEntries = [
  "_astro",
  "index.html",
  "about.html",
  "pubs.html",
  "news.html",
  "experience.html",
  "contact.html",
  "sitemap.xml"
];
const legacyGeneratedEntries = ["pub.html"];

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: root,
      stdio: "inherit",
      shell: process.platform === "win32"
    });

    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${command} ${args.join(" ")} exited with code ${code}`));
      }
    });
  });
}

await run("npm", ["run", "build"]);

for (const entry of [...generatedEntries, ...legacyGeneratedEntries]) {
  await rm(new URL(`../${entry}`, import.meta.url), { recursive: true, force: true });
}

await mkdir(root, { recursive: true });

for (const entry of await readdir(dist)) {
  await cp(new URL(`../dist/${entry}`, import.meta.url), new URL(`../${entry}`, import.meta.url), {
    recursive: true,
    force: true
  });
}

for (const entry of generatedEntries.filter((entry) => entry.endsWith(".html"))) {
  const file = new URL(`../${entry}`, import.meta.url);
  const html = await readFile(file, "utf8");
  await writeFile(
    file,
    html
      .replaceAll('href="/_astro/', 'href="_astro/')
      .replaceAll('src="/_astro/', 'src="_astro/')
      .replaceAll('href="/./_astro/', 'href="_astro/')
      .replaceAll('src="/./_astro/', 'src="_astro/')
  );
}
