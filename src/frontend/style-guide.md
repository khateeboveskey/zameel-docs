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

## Markdown

- Always name Markdown files in kebab-case

Since VitePress routing is folder-based, we follow url structring convention, i.e. to name pages in kebab case.

❌ Bad

```md
<!-- Renders as /styleGuide in the url -->

styleGuide.md
```

✔ Good

```md
<!-- Renders as /style-guide in the url -->

style-guide.md
```
