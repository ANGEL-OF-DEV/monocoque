# Decision Description

- [Link on learn.microsoft.com](https://learn.microsoft.com).
- [Link on GitHub](https://github.com).

**StrongKeyword** blah blah blah blah blah blah.

## Practical Details

- This codebase uses **$/.Artifacts** as **Artifacts Output Directory**.
- This is configured in [Directory.Build.props](../../../Directory.Build.props):

[permalink](https://decisions.angelof.dev/Y25/Use-Artifacts-Output-Layout.md)

```js [file.js]{2} meta-info=val
  export default () => {
    console.log('Code block')
  }
```

`const code: string = 'highlighted code inline'`{lang="ts"}

> abcdef ghijklmn opqrst  
> abcdef ghijklmn opqrst  
> abcdef ghijklmn opqrst

----

### pre

<pre>

12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345
█---------------------------------------------------------------------------------------------█
█▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬█
^=1                                                                                        95=^

</pre>

<strong>
{strong}123456789012345678901234567890123456789012345678901234567890123456789012345678{/strong}
</strong>
<em>
{em}12345678901234567890123456789012345678901234567890123456789012345678901234567890123456{/em}
</em>
<b>
{b}1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678{/b}
</b>  
<i>
{i}1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678{/i}
</i>  

**\*\*1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901\*\***  
*\*123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123\**  
12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345
`123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123`

█─────────────────────────────────────────────────────────────────────────────────────────────█
█━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━█
█—————————————————————————————————————————————————————————————————————————————————————————————█
█---------------------------------------------------------------------------------------------█
█▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬█

```log
/* log */
12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345
█---------------------------------------------------------------------------------------------█
█▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬█
^=1                                                                                        95=^
```

```bash
rem commandline
  git clone --bare https://github.com/ANGEL-OF-DEV/src.angelof.dev.git src.angelof.dev/.git
  cd src.angelof.dev
  git worktree add main main
```

```bat
rem commandline
  git clone --bare https://github.com/ANGEL-OF-DEV/src.angelof.dev.git src.angelof.dev/.git
  cd src.angelof.dev
  git worktree add main main
```

```cmd
rem commandline
  git clone --bare https://github.com/ANGEL-OF-DEV/src.angelof.dev.git src.angelof.dev/.git
  cd src.angelof.dev
  git worktree add main main
```

```commandline
rem commandline
  git clone --bare https://github.com/ANGEL-OF-DEV/src.angelof.dev.git src.angelof.dev/.git
  cd src.angelof.dev
  git worktree add main main
```

```console
rem commandline
  git clone --bare https://github.com/ANGEL-OF-DEV/src.angelof.dev.git src.angelof.dev/.git
  cd src.angelof.dev
  git worktree add main main
```

```cs
/* csharp */
var number = 13;
const string name = "name";
```

```csharp
/* csharp */
var number = 13;
const string name = "name";
```

```css
/* css */
:root {
  --color-pencil-w3: oklch(0.66 0 90);
  --color-pencil-w2: oklch(0.56 0 90);
}

a:hover {
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1px;
  text-decoration-color: var(--a-color);
}
```

---

                        'diff', 'dockerfile', 'dotenv',
                        'gherkin', 'git-commit',

---

```html
/* html */
<body>
  <p> Blah blah blah <br/> blah blah. </p>
</body>
```

---

                        'ini',
                        'javascript', 

---

```json
/* json */
{
  "thing": {
    "list": [ 123, 456, 789 ],
    "name": "the thing",
    "number": 13
  }
}
```

```json5
/* json5 */
{
  thing: {
    list: [ 123, 456, 789 ],
    name: "the thing",
    number: 13
  }
}
```

```jsonl
/* jsonl */
{
  thing: {
    list: [ 123, 456, 789 ],
    name: "the thing",
    number: 13
  }
}
```

```latex
$a^2+b^2$

$$a^2 + b^2$$
```

```markdown
# Header

List of things:
- stick
- rock
- string
```

```powershell
  # powershell
  git clone --bare https://github.com/ANGEL-OF-DEV/src.angelof.dev.git src.angelof.dev/.git
  cd src.angelof.dev
  git worktree add main main
```

```pwsh
  # pwsh
  git clone --bare https://github.com/ANGEL-OF-DEV/src.angelof.dev.git src.angelof.dev/.git
  cd src.angelof.dev
  git worktree add main main
```

```ps1
  # ps1
  git clone --bare https://github.com/ANGEL-OF-DEV/src.angelof.dev.git src.angelof.dev/.git
  cd src.angelof.dev
  git worktree add main main
```

---

        'properties', 'proto', 'python', 'razor',

---

```sh
  # sh
  git clone --bare https://github.com/ANGEL-OF-DEV/src.angelof.dev.git src.angelof.dev/.git
  cd src.angelof.dev
  git worktree add main main
```

```shell
  rem shell
  git clone --bare https://github.com/ANGEL-OF-DEV/src.angelof.dev.git src.angelof.dev/.git
  cd src.angelof.dev
  git worktree add main main
```

```shellscript
  rem shellscript
  git clone --bare https://github.com/ANGEL-OF-DEV/src.angelof.dev.git src.angelof.dev/.git
  cd src.angelof.dev
  git worktree add main main
```

```sql
  /* sql */
  SELECT * FROM TABLE;
```

```terminaloutput
# terminaloutput
  src.angelof.dev
  ├───.git
  └───main
      ├───Assets
      ├───Build
      └───Code
```

```typescript
  // typescript
  import {defineCollection, defineContentConfig} from '@nuxt/content'
  export default defineContentConfig({});
```

```vue
  <!-- vue -->
  <template>
    <component :is="$attrs.display ? 'div' : 'span'" v-bind="$attrs">
     <slot/>
    </component>
  </template>
```

```yaml
  # yaml
  variables:
   - name: varname
     value: 13
```

```xml
<!-- xml -->
<UseArtifactsOutput>true</UseArtifactsOutput>
<RepositoryDirectory>$(MSBuildThisFileDirectory)</RepositoryDirectory>
<ArtifactsPath>$(RepositoryDirectory).Artifacts/</ArtifactsPath>
```

## HTML

<i>this is i</i>

<b>this is b</b>

**this is bold**

*this is italics*

`this is code`

```js
this.AbortSignal().abortNavigation.constructor();
```

## MATH

```math
a^2 + b^2
```

$a^2+b^2$

$$a^2 + b^2$$

![](/cv/card.front.webp)
![](/cv/card.back.webp)
