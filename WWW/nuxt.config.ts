// https://nuxt.com/docs/api/configuration/nuxt-config
import {searchForWorkspaceRoot} from 'vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {enabled: false},
  modules: ['nuxt-shiki', '@nuxt/content'],
  ssr: true,
  workspaceDir: '..',
  vite: {
    server: {
      /*  Allow Vite to access files in workspace root,
          such as "node_modules" in parent directory. */
      fs: {allow: [searchForWorkspaceRoot(process.cwd()), ".."]}
    }
  },
  shiki: {
    bundledThemes: ['solarized-dark'],
    bundledLangs: [
      'asciidoc', 'bash', 'bat', 'batch', 'bicep', 'cmd', 'codeowners',
      'codeql', 'console', 'cs', 'csharp', 'css', 'csv', 'desktop', 'diff',
      'docker', 'dockerfile', 'dotenv', 'gherkin', 'git-commit', 'git-rebase',
      'gnuplot', 'html', 'html-derivative', 'http', 'ini', 'javascript',
      'js', 'json', 'json5', 'jsonc', 'jsonl', 'latex', 'lean', 'lean4',
      'log', 'make', 'makefile', 'markdown', 'matlab', 'md', 'mdc', 'mdx',
      'mediawiki', 'mermaid', 'powershell', 'properties', 'proto', 'protobuf',
      'ps', 'ps1', 'py', 'python', 'razor', 'reg', 'regex', 'regexp', 'scheme',
      'sh', 'shell', 'shellscript', 'shellsession', 'sql', 'system-verilog',
      'systemd', 'templ', 'terraform', 'tex', 'toml', 'ts', 'ts-tags', 'typescript',
      'typespec', 'verilog', 'vue', 'vue-html', 'vue-vine', 'wasm', 'wiki', 'wikitext',
      'wolfram', 'xml', 'xsl', 'yaml', 'yml', 'zsh'],
    defaultTheme: 'solarized-dark'
  },
  css: ['~/assets/Fonts/Fonts.css', '~/assets/StyleSheets/StyleSheets.css'],
  content: {
    build: {
      pathMeta: {slugifyOptions: {lower: true}},
      transformers: [
        '~/transformers/source-files.ts'
      ],
      markdown: {
        highlight: {
          langs: [
            'asciidoc', 'bash', 'bat', 'batch', 'bicep', 'cmd', 'codeowners',
            'codeql', 'console', 'cs', 'csharp', 'css', 'csv', 'desktop', 'diff',
            'docker', 'dockerfile', 'dotenv', 'gherkin', 'git-commit', 'git-rebase',
            'gnuplot', 'html', 'html-derivative', 'http', 'ini', 'javascript',
            'js', 'json', 'json5', 'jsonc', 'jsonl', 'latex', 'lean', 'lean4',
            'log', 'make', 'makefile', 'markdown', 'matlab', 'md', 'mdc', 'mdx',
            'mediawiki', 'mermaid', 'powershell', 'properties', 'proto', 'protobuf',
            'ps', 'ps1', 'py', 'python', 'razor', 'reg', 'regex', 'regexp', 'scheme',
            'sh', 'shell', 'shellscript', 'shellsession', 'sql', 'system-verilog',
            'systemd', 'templ', 'terraform', 'tex', 'toml', 'ts', 'ts-tags', 'typescript',
            'typespec', 'verilog', 'vue', 'vue-html', 'vue-vine', 'wasm', 'wiki', 'wikitext',
            'wolfram', 'xml', 'xsl', 'yaml', 'yml', 'zsh'],
          theme: 'solarized-dark'
        },
        remarkPlugins: {"remark-math": {singleDollarTextMath: true}},
        rehypePlugins: {
          "rehype-mathjax": {
            src: 'rehype-mathjax',
            options: {
              options: {
                inlineMath: [['$', '$'], ['\\(', '\\)']],
                displayMath: [['$$', '$$'], ['\\[', '\\]']]
              },
            }
          }
        }
      }
    }
  }
})
