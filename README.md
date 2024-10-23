# http-response-handler <a href="https://npmjs.com/package/http-response-handler"><img src="https://img.shields.io/npm/v/http-response-handler" alt="npm package"></a>


A comprehensive utility package for handling HTTP responses in Node.js applications. This package provides a set of methods to standardize API responses across your application, making it easier to maintain consistent response formats.

## Installation

You can install this package using npm:

```
npm install http-response-handler
```

## Usage

Here's a basic example of how to use the responseHandeler:

```javascript
import responseHandler from 'http-response-handler';

// Example usage in an Express.js route
app.get('/api/example', (req, res) => {
  try {
    // Your logic here
    const data = { message: 'Success' };
    responseHandler.success(res, 'Operation successful', data);
  } catch (error) {
    responseHandler.error(res, 'An error occurred');
  }
});
```

## API

The `responseHandeler` object provides the following methods:

### Success Response

#### `success(res, message, data, statusCode = 200)`

Sends a successful response.

- `res`: The response object from Express.js
- `message`: A success message
- `data`: The data to be sent in the response
- `statusCode`: HTTP status code (default: 200)

Example:
```javascript
responseHandler.success(res, 'User created successfully', { userId: 123 });
```

### Error Responses

#### `error(res, message, statusCode = 500)`

Sends a general error response.

- `res`: The response object from Express.js
- `message`: An error message
- `statusCode`: HTTP status code (default: 500)

#### `validationError(res, message, statusCode = 400)`

Sends a validation error response.

#### `unauthorized(res, message, statusCode = 401)`

Sends an unauthorized error response.

#### `forbidden(res, message, statusCode = 403)`

Sends a forbidden error response.

#### `notFound(res, message, statusCode = 404)`

Sends a not found error response.

#### `conflict(res, message, statusCode = 409)`

Sends a conflict error response.

#### `internalServerError(res, message, statusCode = 500)`

Sends an internal server error response.

#### `badRequest(res, message, statusCode = 400)`

Sends a bad request error response.

#### `unprocessableEntity(res, message, statusCode = 422)`

Sends an unprocessable entity error response.

#### `tooManyRequests(res, message, statusCode = 429)`

Sends a too many requests error response.

#### `serviceUnavailable(res, message, statusCode = 503)`

Sends a service unavailable error response.

#### `gatewayTimeout(res, message, statusCode = 504)`

Sends a gateway timeout error response.

Example usage for error responses:
```javascript
responseHandler.notFound(res, 'User not found');
responseHandler.unauthorized(res, 'Invalid credentials');
responseHandler.badRequest(res, 'Invalid input data');
```

## Response Format

All responses follow a consistent format:

### Success Response

```json
{
  "success": true,
  "message": "Success message",
  "data": { ... }
}
```

### Error Response

```json
{
  "success": false,
  "message": "Error message"
}
```

## Best Practices

1. Use the appropriate method for each scenario to ensure consistent status codes.
2. Provide clear and informative messages in your responses.
3. For success responses, always include relevant data in the `data` field.
4. Handle errors gracefully and use the specific error methods when possible.

## Examples

### Handling a successful request:

```javascript
app.get('/api/users/:id', (req, res) => {
  const user = getUserById(req.params.id);
  if (user) {
    responseHandler.success(res, 'User retrieved successfully', user);
  } else {
    responseHandler.notFound(res, 'User not found');
  }
});
```

### Handling validation errors:

```javascript
app.post('/api/users', (req, res) => {
  const { username, email } = req.body;
  if (!username || !email) {
    responseHandler.validationError(res, 'Username and email are required');
    return;
  }
  // Process the request...
});
```

### Handling unauthorized access:

```javascript
app.get('/api/admin', (req, res) => {
  if (!req.user.isAdmin) {
    responseHandler.unauthorized(res, 'Admin access required');
    return;
  }
  // Process the request...
});
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

### 1.0.0
- Initial release with basic response handling methods.

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.

## Acknowledgements

Thanks to all contributors who have helped to improve this package.
