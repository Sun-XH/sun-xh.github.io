import { cp, mkdir, stat } from "node:fs/promises";

const assets = ["files", "music", "favicon.png", ".nojekyll"];
const dist = new URL("../dist/", import.meta.url);

await mkdir(dist, { recursive: true });

for (const asset of assets) {
  try {
    await stat(new URL(`../${asset}`, import.meta.url));
    await cp(new URL(`../${asset}`, import.meta.url), new URL(`../dist/${asset}`, import.meta.url), {
      recursive: true,
      force: true
    });
  } catch (error) {
    if (error?.code !== "ENOENT") {
      throw error;
    }
  }
}
