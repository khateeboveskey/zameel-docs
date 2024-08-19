---
title: Contribution
---

# Contribution

Thank you for your interest in contributing to Zameel! We welcome your contributions to help improve the project and make it better for everyone.

This guide provides detailed information to help new contributors.

## Commit Convention

We use and enforce [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) Messages with the help of [commitlint](https://github.com/conventional-changelog/commitlint) and [husky](https://github.com/typicode/husky), this means that if you did not follow this convention, an error will be thrown on `git commit` command!

:::danger Important
Make sure to read and follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) Messages specification before making a commit.
:::

- Always start commit description with base verb

```sh
# Bad
git commit -m "docs: updated FormInput types docs"
git commit -m "docs: FormInput types docs update"

# Good
git commit -m "docs: update FormInput types docs"
```

## Code Style Guide

You should follow our [Code Style Guide](style-guide).

## Licence

By contributing, you agree that your contributions will be licensed under its MIT License.
