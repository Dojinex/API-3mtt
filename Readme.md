# Express.js REST API Project

This is a simple REST API built using Express.js. It demonstrates CRUD operations on an in-memory data store. The API allows users to create, read, update, and delete items, each with an `id`, `name`, and `description`.

## Features

* Basic Express.js setup
* Middleware for JSON parsing
* Root route (`/`) returns `Hello, World!`
* RESTful routes:

  * `GET /items` - Retrieve all items
  * `GET /items/:id` - Retrieve a single item by ID
  * `POST /items` - Create a new item
  * `PUT /items/:id` - Update an item
  * `DELETE /items/:id` - Delete an item
* Error handling (400, 404, 500)
* Validation for request data

## Project Structure

```
express-rest-api/
├── server.js
├── routes/
│   └── items.js
├── package.json
└── README.md
```

## Setup Instructions

1. Clone or download the repository.

2. Navigate into the folder:

   ```bash
   cd express-rest-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   node server.js
   ```

5. Visit `http://localhost:3000/` in the browser or use Postman/Thunder Client.

## Example API Requests

### `GET /`

```
Response: Hello, World!
```

### `GET /items`

```
Response:
[
  { "id": 1, "name": "Pen", "description": "Blue pen" },
  { "id": 2, "name": "Notebook", "description": "Ruled notebook" }
]
```

### `GET /items/1`

```
Response:
{ "id": 1, "name": "Pen", "description": "Blue pen" }
```

### `POST /items`

```
Body:
{
  "name": "Book",
  "description": "Math Textbook"
}
Response: Created item with ID
```

### `PUT /items/1`

```
Body:
{
  "name": "Updated Pen",
  "description": "Black ink"
}
Response: Updated item
```

### `DELETE /items/1`

```
Response: Deleted item
```

## Error Responses

* `400`: Missing name or description
* `404`: Item not found
* `500`: Internal server error

## Author

Bitrus Dauda — Built as part of a mini-project assessment on Express.js.
