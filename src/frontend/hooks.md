# Hooks

## `useAdaptiveColor(): string`

A React hook that returns an adaptive color based on the user's device color scheme.

|   Props    |   Type    | Required | Default | Description                                                                                                     |
| :--------: | :-------: | :------: | :-----: | :-------------------------------------------------------------------------------------------------------------- |
|  `color`   | `string`  |    ✔     |         | The base color to use, as a string.                                                                             |
|   `tone`   | `number`  |    ✔     |         | The tone or shade of the color, as a number.                                                                    |
| `tailwind` | `boolean` |          | `false` | An optional boolean flag to use Tailwind CSS color utilities instead of the custom `getAdaptiveColor` function. |