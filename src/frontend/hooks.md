# Hooks

## `useAdaptiveColor(): string`

A React hook that returns an adaptive color based on the user's device color scheme.

|   Props    |   Type    | Required | Default | Description                                                                                                     |
| :--------: | :-------: | :------: | :-----: | :-------------------------------------------------------------------------------------------------------------- |
|  `color`   | `string`  |    ✔     |         | The base color to use, as a string.                                                                             |
|   `tone`   | `number`  |    ✔     |         | The tone or shade of the color, as a number.                                                                    |
| `tailwind` | `boolean` |          | `false` | An optional boolean flag to use Tailwind CSS color utilities instead of the custom `getAdaptiveColor` function. |

returns The adaptive color, either as a CSS color string or a Tailwind CSS utility class.

## `useDebouncedEffect()`

|  Props   |     Type     | Required | Default | Description                                                                                     |
| :------: | :----------: | :------: | :-----: | :---------------------------------------------------------------------------------------------- |
| `effect` | `() => void` |    ✔     |         | The effect function to be debounced.                                                            |
|  `deps`  |   `any[]`    |    ✔     |         | The dependencies array for the effect function.                                                 |
| `delay`  |   `number`   |          |  `500`  | The delay in milliseconds before the effect function is executed. Defaults to 500 milliseconds. |

returns A cleanup function that can be used to cancel the debounced effect.

## `useRequest()`

A custom React hook that provides a set of functions for making HTTP requests.

An object containing the following properties: `{ isLoading, get, post, delete: remove }`

### `isLoading`

A boolean indicating whether a request is currently in progress.

### `get()`

Sends a GET request to the specified endpoint and returns the response data.

| Props      |   Type   | Required | Default | Description                                  |
| :--------- | :------: | :------: | :-----: | :------------------------------------------- |
| `endpoint` | `string` |    ✔     |         | The URL endpoint to send the GET request to. |

returns The response data, or `null` if an error occurs.

### `post()`

Sends a POST request to the specified endpoint with the provided data and returns the response.

| Props      |     Type      | Required | Default | Description                                   |
| :--------- | :-----------: | :------: | :-----: | :-------------------------------------------- |
| `endpoint` |   `string`    |    ✔     |         | The URL endpoint to send the POST request to. |
| `data`     | `PayloadData` |    ✔     |         | The data to be sent in the POST request.      |

returns The response object, or `null` if an error occurs.

### `remove()`

Sends a DELETE request to the specified endpoint with the provided ID and returns the response data.

| Props      |   Type   | Required | Default | Description                                     |
| :--------- | :------: | :------: | :-----: | :---------------------------------------------- |
| `endpoint` | `string` |    ✔     |         | The URL endpoint to send the DELETE request to. |
| `id`       | `number` |    ✔     |         | The ID of the resource to be deleted.           |

returns The response data, or `null` if an error occurs.

## `useAsyncStorage()`

A custom React hook that provides an interface for interacting with the device's AsyncStorage.

### `setItem()`

Asynchronously stores the provided value under the specified key in the device's AsyncStorage.

|   Props    |   Type    | Required | Default | Description                                                                                             |
| :--------: | :-------: | :------: | :-----: | :------------------------------------------------------------------------------------------------------ |
|   `key`    | `string`  |    ✔     |         | The key to store the value under.                                                                       |
|  `value`   | `string`  |    ✔     |         | The value to store. If `isObject` is true, the value will be JSON-encoded before storing.               |
| `isObject` | `boolean` |          | `false` | Indicates whether the provided value is a JavaScript object that should be JSON-encoded before storing. |

returns A Promise that resolves to `true` if the value was successfully stored, or `false` if an error occurred.

### `getItem()`

Asynchronously retrieves the value stored under the specified key in the device's AsyncStorage.

|   Props    |   Type    | Required | Default | Description                                                                                               |
| :--------: | :-------: | :------: | :-----: | :-------------------------------------------------------------------------------------------------------- |
|   `key`    | `string`  |    ✔     |         | The key to retrieve the value for.                                                                        |
| `isObject` | `boolean` |          | `false` | Indicates whether the stored value is a JSON-encoded object. If true, the value will be parsed from JSON. |

returns A Promise that resolves with the retrieved value, or null if the key does not exist. If an error occurs, the Promise will reject.

### `removeItem()`

Asynchronously removes the value stored under the specified key in the device's AsyncStorage.

| Props |   Type   | Required | Default | Description                      |
| :---: | :------: | :------: | :-----: | :------------------------------- |
| `key` | `string` |    ✔     |         | The key to remove the value for. |

returns A Promise that resolves to `true` if the value was successfully removed, or `false` if an error occurred.

## `useAuth()`

Provides an authentication hook that handles user login functionality.

### `login()`

Logs the user in with the provided email and password.

|   Props    |   Type   | Required | Default | Description                    |
| :--------: | :------: | :------: | :-----: | :----------------------------- |
|  `email`   | `string` |    ✔     |         | The email address of the user. |
| `password` | `string` |    ✔     |         | The password of the user.      |

returns A Promise that resolves when the login is successful, or rejects with an error if the login fails.
