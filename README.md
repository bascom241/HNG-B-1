# HNG-B-1


# Public API - User Information

This is a simple public API that returns basic information about the user, including:

- **Email address**
- **Current date and time (in ISO 8601 format)**
- **GitHub URL of the project codebase**

## Technologies Used

- **Node.js**: JavaScript runtime for the backend.
- **Express**: Web framework for building the API.
- **TypeScript**: Superset of JavaScript for type safety and better code organization.
- **CORS**: Middleware for handling Cross-Origin Resource Sharing (CORS).
- **GitHub**: For version control and hosting the project repository.

## API Endpoint

### `GET /api/v1/users`

This endpoint returns basic information about the user.

#### Response Format (200 OK)
```json
{
  
    "email": "abdulbasitabdulwahab21@gmail.com",
    "current_Date": "2025-01-30T09:30:00Z",
    "gitHub_Url": "https://github.com/bascom241/"
  
}

