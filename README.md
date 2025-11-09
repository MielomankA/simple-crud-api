# Simple CRUD API task

***Clone the repository https://github.com/MielomankA/simple-crud-api:***

`git clone <repository-url>`

***Change branch to develop:***

`git checkout develop`

***Install dependencies:***

`npm install`

***Create .env from example `.env.example`:***

`cp .env.example .env`

and specify the port (for example, PORT=3000)

***Run application***

*Development mode*

Automatic restart when files are changed:

`npm run start:dev`

*Production mode*

`npm run start:prod` - first compile TypeScript, then run JS

***Run tests:***

`npm run test`

***Run tests with force exit:***

`npm run test:exit`

***API***

You can use any HTTP client to test the API (for example, Postman)

*GET /api/users*

Get all users

*POST /api/users*

Create a new user

*GET /api/users/{userId}*

Get user by id

*PUT /api/users/{userId}*

Update user by id

*DELETE /api/users/{userId}*

Delete user by id

***Example of request body***

```json
{
    "username": "Bob",
    "age": 30,
    "hobbies": ["reading", "gaming"]
}
```
