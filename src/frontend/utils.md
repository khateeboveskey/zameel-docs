# Utils

## colors

### `getAdaptiveColor()`

Generates an adaptive color string based on the current color scheme.

|     Props     |            Type             | Required | Default | Description                 |
| :-----------: | :-------------------------: | :------: | :-----: | :-------------------------- |
|    `color`    |          `string`           |    ✔    |         | The base color as a string. |
|    `tone`     |          `number`           |    ✔    |         | The color tone as a number. |
| `colorScheme` | `"dark" \| "light" \| null` |          | `dark`  |                             |

returns An adaptive color string in the format `${color}${tone}${capitalize(colorScheme)}`.

### `getAdabtiveTWColor()`

Generates an adaptive Tailwind CSS color string based on the current color scheme.

|     Props     |            Type             | Required | Default | Description                                                                      |
| :-----------: | :-------------------------: | :------: | :-----: | :------------------------------------------------------------------------------- |
|    `color`    |          `string`           |    ✔    |         | The base Tailwind CSS color as a string.                                         |
| `toneInDark`  |          `number`           |          |  `500`  | The Tailwind CSS color tone to use in dark mode, as a number between 50 and 950. |
| `colorScheme` | `"dark" \| "light" \| null` |          | `dark`  |                                                                                  |

returns Adabtive HEX code from `TAILWIND_COLORS` constant object.

## performance

### `debounce()`

Debounces a function, ensuring that it is only called after a specified timeout period has elapsed since the last time it was invoked.

|   Props   |     Type     | Required | Default | Description                                                       |
| :-------: | :----------: | :------: | :-----: | :---------------------------------------------------------------- |
|  `func`   | `() => void` |    ✔    |         | The function to be debounced.                                     |
| `timeout` |   `number`   |          |  `500`  | The timeout period in milliseconds. Defaults to 500 milliseconds. |

returns A debounced version of the input function.

## string

### `capitalize()`

Capitalizes the first character of the provided text.

| Props  |   Type   | Required | Default | Description                   |
| :----: | :------: | :------: | :-----: | :---------------------------- |
| `text` | `string` |    ✔    |         | The input text to capitalize. |

returns The input text with the first character capitalized.

## validation

`validation.ts` exports a `validate` object, this contains the following:

### `email()`

Validates the provided email string and returns an array of validation errors, if any.

|  Props  |   Type   | Required | Default | Description                   |
| :-----: | :------: | :------: | :-----: | :---------------------------- |
| `email` | `string` |    ✔    |         | The email string to validate. |

returns An empty array if the email is valid, or an array containing a single error message if the email is invalid.

### `fullname()`

Validates the provided full name string and returns an array of validation errors, if any.

|   Props    |   Type   | Required | Default | Description                       |
| :--------: | :------: | :------: | :-----: | :-------------------------------- |
| `fullname` | `string` |    ✔    |         | The full name string to validate. |

returns An empty array if the full name is valid, or an array containing a single error message if the full name is invalid.

### `validateBoolObject(): boolean`

Checks if all values in the provided are `true`.

| Props |             Type             | Required | Default | Description                    |
| :---: | :--------------------------: | :------: | :-----: | :----------------------------- |
| `obj` | `{ [key: string]: boolean }` |    ✔    |         | An object with boolean values. |

returns `true` if all values in the object are `true`, `false` otherwise.
