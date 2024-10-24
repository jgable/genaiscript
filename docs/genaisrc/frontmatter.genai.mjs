script({
    model: "large",
})

// force refreshing all files
const force = env.vars.force

// filter out files that don't have a front matter.description
const files = env.files
    .filter((f) => /\.mdx?$/i.test(f.filename))
    .filter(
        (f) =>
            force ||
            (!MD.frontmatter(f.content)?.description &&
                !f.content?.includes("autogenerated"))
    )
if (!files.length) cancel("no files to process")

// insert markdown files in context
def("FILE", files)

// prompt to generate front matter for markdown files
$`You are a search engine optimization expert at creating front matter for markdown document.

For each FILE, re-generate the front matter content as the new file content.

## Guidance

- ONLY generate the front matter section. This is important.
- Update description as needed.
- Update keywords as needed, only 5 keywords or less. Use comma separated list for keywords.
- use yaml format, do not use quotes
- optimize for search engine optimization.
- If no front matter is present, generate it.

## Things to avoid

- DO NOT RESPOND the rest of the markdown content beyond the front matter.
- Do NOT modify the markdown content after the front matter
- Do NOT repeat project name (GenAIScript) in 'title' field
- DO NOT modify the existing 'title' or 'sidebar' fields.
- Do NOT use 'Guide' in title.
`

// merge logic to integrate generated frontmatter fields
defFileMerge(function frontmatter(fn, label, before, generated) {
    if (!/\.mdx?$/i.test(fn)) return undefined
    const frontmatter = MD.frontmatter(generated)
    if (!frontmatter) return before

    const { title, description, keywords, tags } = frontmatter
    const updated = MD.updateFrontmatter(before, {
        title,
        description,
        keywords,
        tags,
    })
    return updated
})