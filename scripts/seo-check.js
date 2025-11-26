import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")

const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8")
const exists = (relativePath) => fs.existsSync(path.join(root, relativePath))

const checks = [
  {
    name: "Global metadata uses metadataBase + templates",
    pass:
      read("app/layout.tsx").includes("metadataBase") &&
      read("app/layout.tsx").includes("template:"),
  },
  {
    name: "Homepage metadata + JSON-LD present",
    pass: read("app/page.tsx").includes("JsonLd") && read("app/page.tsx").includes("faqJsonLd"),
  },
  {
    name: "Editor route marked noindex",
    pass: read("app/editor/layout.tsx").includes("index: false"),
  },
  {
    name: "Robots.txt route exists",
    pass: exists("app/robots.ts"),
  },
  {
    name: "Sitemap route exists",
    pass: exists("app/sitemap.ts"),
  },
  {
    name: "OG image available",
    pass: exists("public/og-image.png") && fs.statSync(path.join(root, "public/og-image.png")).size > 0,
  },
]

const results = checks.map((check) => ({
  ...check,
  status: check.pass ? "✅" : "❌",
}))

const allPassed = results.every((r) => r.pass)

console.log("\nSEO Verification\n----------------")
results.forEach((result) => {
  console.log(`${result.status} ${result.name}`)
})

console.log("\nSummary:", allPassed ? "All checks passed" : "Some checks need attention")

if (!allPassed) {
  process.exitCode = 1
}
