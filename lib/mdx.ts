import { compileMDX } from "next-mdx-remote/rsc";
import { readFile } from "fs/promises";
import path from "path";
import { mdxComponents } from "@/components/shared/mdx-components";

const contentDir = path.join(process.cwd(), "content");

export async function getMDXContent(slug: string, platform: "media" | "invest") {
  const filePath = path.join(contentDir, platform, `${slug}.mdx`);

  try {
    const source = await readFile(filePath, "utf-8");

    const { content, frontmatter } = await compileMDX({
      source,
      options: { parseFrontmatter: true },
      components: mdxComponents,
    });

    return { content, frontmatter };
  } catch {
    return {
      content: null,
      frontmatter: null,
      error: `Content not found: ${platform}/${slug}`,
    };
  }
}
