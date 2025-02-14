# Superheroes API

This project is a RESTful API developed with **NestJS**, designed to manage a collection of superheroes. It allows you to add and list them, with features like data validation, error handling, and unit testing.

## Technologies Used

- **NestJS** - A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **TypeScript** - A typed superset of JavaScript that compiles to plain JavaScript.
- **Class-validator** - Decorator-based validation for plain JavaScript objects.
- **Jest** - A delightful JavaScript Testing Framework with a focus on simplicity.

## Features

✅ Add superheroes with strict validations (name, superpower, humility score between 1 and 10).
✅ Get a list of superheroes sorted by humility score (descending).
✅ Robust error handling with `BadRequestException` and `NotFoundException`.
✅ Unit tests for all major functionalities.

## Installation

1.  Clone the repository:

```bash
    git clone [https://github.com/karenporrass/repository-name.git]
```

2.  Navigate to the project directory:

    ```bash
    cd humble-hero-api
    ```

3. Install dependencies

````bash
    npm install
    ```


4. To run the project in development mode:

```bash
npm run start:dev
````

## 🛠 API Usage


```http
POST /superheroes
```

**JSON Body:**

```json
{
  "name": "Batman",
  "superpower": "Detective",
  "humilityScore": 8
}
```

### ➤ Get All Superheroes

```http
GET /superheroes
```

## ✅ Unit Tests

Run the tests with:

```bash
npm run test
```

## If I Had More Time

If I had more time to improve this backend, the following enhancements could be implemented:

- **Database Persistence:** Currently, the data is stored in memory. I would integrate a database like PostgreSQL or MongoDB using TypeORM or Prisma for persistent storage.
- **Authentication and Authorization:** Implement JWT (JSON Web Tokens) for secure API access, allowing only authorized users to perform certain actions.
- **Pagination:** For large datasets, implement pagination to improve performance and user experience when retrieving lists of superheroes.
- **Caching:** Implement caching mechanisms to improve response times for frequently accessed data.

Developed with ❤️ for [Karen Cardenas]
