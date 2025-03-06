# Colleges

## `GET` - `/colleges`

### Headers

`Accept` : `application/json` <br>
`Authorization` : `Bearer <Token>`

### Response

Collection's data

```json
{
  "data": [
    {
      "id": 1,
      "name": "College 1",
      "created_at": null,
      "updated_at": null,
      "deleted_at": null
    },
    {
      "id": 2,
      "name": "College 2",
      "created_at": null,
      "updated_at": null,
      "deleted_at": null
    }
  ]
}
```

## `GET` - `/colleges/{id}`

### Headers

`Accept` : `application/json` <br>
`Authorization` : `Bearer <Token>`

### Response

```json
{
  "data": {
    "id": 1,
    "name": "College 1",
    "created_at": null,
    "updated_at": null,
    "deleted_at": null
  }
}
```

## `POST` - `/colleges`

### Headers

`Accept` : `application/json` <br>
`Authorization` : `Bearer <Token>`

### Payload

```json
{
  "name": "New college"
}
```

### Validation Rules

| Field | Required | Rules                                                                                                                                                |
| ----- | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| name  |    ✔    | - String <br> - Max length is 45 <br> - Only letters (from any language), combining marks and spaces. <br> - Must be unique in the `colleges` table. |

### Response

The created college

```json
{
  "data": {
    "id": 6,
    "name": "New college",
    "created_at": "2025-03-06T19:13:47.000000Z",
    "updated_at": "2025-03-06T19:13:47.000000Z",
    "deleted_at": null
  }
}
```

## `PATCH` - `/colleges/{id}`

### Headers

`Accept` : `application/json` <br>
`Authorization` : `Bearer <Token>`

### Payload

```json
{
  "name": "Updated college"
}
```

### Validation Rules

| Field | Required | Rules                                                                                                                                                |
| ----- | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| name  |    ✔    | - String <br> - Max length is 45 <br> - Only letters (from any language), combining marks and spaces. <br> - Must be unique in the `colleges` table. |

### Response

The updated college

```json
{
  "data": {
    "id": 6,
    "name": "Updated college",
    "created_at": "2025-03-06T19:13:47.000000Z",
    "updated_at": "2025-03-06T19:14:48.000000Z",
    "deleted_at": null
  }
}
```

## `DELETE` - `/colleges/{id}`

### Headers

`Accept` : `application/json` <br>
`Authorization` : `Bearer <Token>`

### Response

HTTP Status: `200 OK`

```json
{
  "data": {
    "id": 6,
    "name": "College name",
    "created_at": "2025-03-06T19:13:47.000000Z",
    "updated_at": "2025-03-06T19:15:34.000000Z",
    "deleted_at": "2025-03-06T19:15:34.000000Z"
  }
}
```
