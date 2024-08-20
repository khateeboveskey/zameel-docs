# Components

This page provides a detailed reference for the components used in the Zameel frontend.

## `FormInput`

|     Props      |           Type           | Required | Default | Description                                                                |
| :------------: | :----------------------: | :------: | :-----: | :------------------------------------------------------------------------- |
|      `id`      |         `string`         |    ✔    |         | A unique identifier for the form input.                                    |
|    `label`     |         `string`         |    ✔    |         | The label for the form input.                                              |
|    `value`     |         `string`         |    ✔    |         | The current value of the form input.                                       |
| `onChangeText` | `(text: string) => void` |    ✔    |         | Callback function that is called when the value of the form input changes. |
