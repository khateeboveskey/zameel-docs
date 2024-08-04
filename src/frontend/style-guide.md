# Style Guide

::: info
We use [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) to enforce a consistent code style. This guide covers not-configured rules.
:::

## React/TSX

- Always use function-based components

❌ Bad

```tsx
class Listing extends React.Component {
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  }
}
```

✔ Good

```tsx
export default function Listing(props) {
  return <div>{props.hello}</div>;
}
```

---

- Don't use arrow function in components declaration

❌ Bad

```tsx
// bad (relying on function name inference is discouraged)
const Listing = (props) => <div>{props.hello}</div>;
```

✔ Good

```tsx
export default function Listing(props) {
  return <div>{props.hello}</div>;
}
```

## CSS

- Don't use `-webkit-` prefixes inside element's `class`

use `@apply` at-rule to apply classes to selected element.

❌ Bad

```html
<div class="[&::-webkit-scrollbar]:hidden"></div>
```

✔ Good

```css
.custom-scrollbar::-webkit-scrollbar {
  @apply hidden;
}
```

---

- Don't write unlayered rules

If you are forced to write in `index.css`, use `@layer` at-rule to group rules.

❌ Bad

```css
.custom-scrollbar::-webkit-scrollbar {
  @apply hidden;
}
```

✔ Good

```css
@layer base {
  /* ... */
  .custom-scrollbar::-webkit-scrollbar {
    @apply hidden;
  }
}
```

---

- Prefer a direction-based class over a position-based class

❌ Bad

```css
@apply ml-5 mr-2;
```

✔ Good

```css
@apply ms-5 me-2;
```

## Markdown

- Always name Markdown files in kebab-case

Since VitePress routing is folder-based, we follow url structring convention, i.e. to name pages in kebab case.

❌ Bad

```md
<!-- Renders as /style-guide in the url -->

style-guide.md
```

✔ Good

```md
<!-- Renders as /styleGuide in the url -->

styleGuide.md
```
