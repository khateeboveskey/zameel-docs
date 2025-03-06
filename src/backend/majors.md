# Majors

## `GET` - `/majors`

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
      "name": "First major",
      "college_id": 1,
      "degree_id": 2,
      "years": 4,
      "created_at": null,
      "updated_at": null,
      "deleted_at": null
    },
    {
      "id": 2,
      "name": "Second major",
      "college_id": 1,
      "degree_id": 2,
      "years": 4,
      "created_at": null,
      "updated_at": null,
      "deleted_at": null
    }
  ]
}
```

## `GET` - `/majors/{id}`

### Headers

`Accept` : `application/json` <br>
`Authorization` : `Bearer <Token>`

### Response

```json
{
  "data": {
    "id": 1,
    "name": "Major name",
    "college_id": 1,
    "degree_id": 2,
    "years": 4,
    "created_at": null,
    "updated_at": null,
    "deleted_at": null
  }
}
```

## `POST` - `/majors`

### Headers

`Accept` : `application/json` <br>
`Authorization` : `Bearer <Token>`

### Payload

```json
{
  "name": "New major",
  "years": 4,
  "college_id": 1,
  "degree_id": 1
}
```

### Validation Rules

| Field      | Required | Rules                                                                                                                                              |
| ---------- | :------: | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| name       |    ✔    | - String <br> - Max length is 45 <br> - Only letters (from any language), combining marks and spaces. <br> - Must be unique in the `majors` table. |
| years      |    ✔    | - Integer <br> - Between 1 and 8                                                                                                                   |
| college_id |    ✔    | - Integer <br> - Numeric <br> - Must exist in the `colleges` table (id)                                                                            |
| degree_id  |    ✔    | - Integer <br> - Numeric <br> - Must exist in the `degrees` table (id)                                                                             |

### Response

HTTP Status: `201 Created`

The created major

```json
{
  "data": {
    "id": 11,
    "name": "New major",
    "college_id": 1,
    "degree_id": 1,
    "years": 4,
    "created_at": "2025-03-06T19:29:48.000000Z",
    "updated_at": "2025-03-06T19:29:48.000000Z",
    "deleted_at": null
  }
}
```

## `PATCH` - `/majors/{id}`

### Headers

`Accept` : `application/json` <br>
`Authorization` : `Bearer <Token>`

### Payload

```json
{
  "years": 5
}
```

### Validation Rules

| Field      | Required  | Rules                                                                                                                                              |
| ---------- | :-------: | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| name       | sometimes | - String <br> - Max length is 45 <br> - Only letters (from any language), combining marks and spaces. <br> - Must be unique in the `majors` table. |
| years      | Sometimes | - Integer <br> - Between 1 and 8                                                                                                                   |
| college_id | Sometimes | - Integer <br> - Numeric <br> - Must exist in the `colleges` table (id)                                                                            |
| degree_id  | sometimes | - Integer <br> - Numeric <br> - Must exist in the `degrees` table (id)                                                                             |

### Response

The updated major

```json
{
  "data": {
    "id": 11,
    "name": "Updated major",
    "college_id": 1,
    "degree_id": 1,
    "years": 5,
    "created_at": "2025-03-06T19:29:48.000000Z",
    "updated_at": "2025-03-06T19:34:08.000000Z",
    "deleted_at": null
  }
}
```

## `DELETE` - `/majors/{id}`

### Headers

`Accept` : `application/json` <br>
`Authorization` : `Bearer <Token>`

### Response

HTTP Status: `200 OK`

The deleted major

```json
{
  "data": {
    "id": 12,
    "name": "Deleted major",
    "college_id": 1,
    "degree_id": 1,
    "years": 4,
    "created_at": "2025-03-06T19:35:43.000000Z",
    "updated_at": "2025-03-06T19:36:07.000000Z",
    "deleted_at": "2025-03-06T19:36:07.000000Z"
  }
}
```
