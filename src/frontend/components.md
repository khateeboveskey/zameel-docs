# Components

This page provides a detailed reference for the components used in the Zameel frontend.

## `FormInput`

|       Props       |           Type           | Required | Default | Description                                                                                                                   |
| :---------------: | :----------------------: | :------: | :-----: | :---------------------------------------------------------------------------------------------------------------------------- |
|       `id`        |         `string`         |    ✔    |         | A unique identifier for the form input.                                                                                       |
|      `label`      |         `string`         |    ✔    |         | The label for the form input.                                                                                                 |
|      `value`      |         `string`         |    ✔    |         | The current value of the form input.                                                                                          |
|  `onChangeText`   | `(text: string) => void` |    ✔    |         | Callback function that is called when the value of the form input changes.<br>@param `text` - The new value of the form input |
|   `placeholder`   |         `string`         |          |         | The placeholder text to display in the form input when it is empty.                                                           |
|     `isValid`     |        `boolean`         |          |         | Indicates whether the form input is valid or not.                                                                             |
| `secureTextEntry` |        `boolean`         |          |         | Indicates whether the form input should display the entered text as secure (e.g. password input).                             |
|   `noValidate`    |        `boolean`         |          |         | Indicates whether the form input should not be validated.                                                                     |

## `FormInputFeedbackProps`

|        Props         |             Type             | Required | Default | Description                                                                                                                                       |
| :------------------: | :--------------------------: | :------: | :-----: | :------------------------------------------------------------------------------------------------------------------------------------------------ |
|       `value`        |           `string`           |    ✔    |         | The current value of the form input.                                                                                                              |
|      `validate`      |           `string`           |    ✔    |         | The validation rule for the form input.                                                                                                           |
| `onValidationErrors` | `(errors: object[]) => void` |          |         | Callback function that is called when there are validation errors for the form input.<br> @param `errors` - An array of validation error objects. |

## `LogoProps`

|  Props  |   Type   | Required |    Default    | Description               |
| :-----: | :------: | :------: | :-----------: | :------------------------ |
| `color` | `string` |          | PRIMARY_COLOR | The color of the element. |
