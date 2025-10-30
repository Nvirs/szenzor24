import fs from "fs";
import { join } from "path";
import markdownToHtml from "@/lib/markdownToHtml";

export const revalidate = 60; // ISR: re-generate page at most once per minute

export default async function BeuzemelesPage() {
  const markdownPath = join(process.cwd(), "src", "markdown", "beuzemeles.md");
  let content = "";

  try {
    content = fs.readFileSync(markdownPath, "utf8");
  } catch (err) {
    content = "# Tartalom nem található\n\nKérlek hozd létre a `src/markdown/beuzemeles.md` fájlt.`";
  }

  const html = await markdownToHtml(content);

  return (
    <main className="container max-w-3xl py-16">
      <article className="prose dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  );
}
