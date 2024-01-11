![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)

# todolist-api-gateway

Gateway to access all backend services

## how to run

```bash
yarn
yarn dev # for development mode, don't need to restart if you do some updates
yarn start # for production mode
```

you need a .env like this (if everything run on your local machine):
```bash
GATEWAY_PORT=8080
AUTHENTIFICATION_API=http://localhost:8081/auth
USER_API=http://localhost:8082/users
PROJECT_API=http://localhost:8083/projects
LIST_API=http://localhost:8084/lists
TASK_API=http://localhost:8085/tasks

```
