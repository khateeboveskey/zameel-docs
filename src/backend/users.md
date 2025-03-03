# Users

## `POST` - `/register`

### Headers

`Accept` : `application/json`

### Payload

```json
{
    "data": {
        "type": "user",
        "attributes": {
            "name": "zameel",
            "email": "zameel@email.com",
            "password": "12(Mn)34",
            "password_confirmation": "12(Mn)34"
        }
    }
}
```

### Validation Rules

| Field    | Required | Rules |
|----------|:--------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| name     | ✔       | - String  <br> - Must contain only letters (from any language), combining marks, and spaces  <br> - Max length is 255 |
| email    | ✔       | - String  <br> - Must be a valid email format  <br> - Max length is 255 |
| password | ✔       | - Confirmed  <br> - Min length is 8  <br> - Must contain at least one letter  <br> - Must contain both uppercase and lowercase letters  <br> - Must contain at least one number  <br> - Must contain at least one symbol |

### Response

```json
{
    "message": "created"
}
```

## `POST` - `/login`

### Headers

`Accept` : `application/json`

### Payload

```json
{
    "data": {
        "attributes": {
            "email": "zameel@example.com",
            "password": "password"
        }
    },
    "meta": {
                "deviceName" : "iPhone 13"
    }
}
```

### Validation Rules

| Field      | Required | Rules |
|------------|:--------:|------------------------------------------------|
| email      | ✔        | - String  <br> - Must be a valid email format  <br> - Max length is 255 |
| password   | ✔        | - String |
| deviceName | ✔        | - String  <br> - Max length is 45 |


### Response

```json
{
    "token": ""
}
```

## `POST` - `/logout`

### Headers

`Accept` : `application/json` <br>
`Authorization` : `Bearer <Token>`

### Response

```json
{
    "message": "loged out"
}
```
