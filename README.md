# Dev's Board Server

**_Dev's Board is the app that makes a developer's life a teensy bit easier!_**

This is the backend for my capstone project for BrainStation's full-stack bootcamp.

## :running: Run Locally

Follow these steps to run a local instance of Dev's Board's server. Install the frontend [here](https://github.com/LamiSaadat/devs-board-client):  
(You'll need node, npm, and MySQL already installed.)

<!-- Run Locally -->

### Installation

1. Clone the project

```bash
  git clone git@github.com:LamiSaadat/devs-board-server.git
```

2. Create a new database in MySQL called devsboard_database.

3. Install dependencies

```bash
npm install
```

4. Run migrations

```bash
npm run migrate
```

5. Run seeds

```bash
npm run seeds
```

6. Set environment variables:

Rename `.env_sample` to `.env` and change the placeholder value to the port you set for the server.

```shell
   PORT=<PORT_NUMER>
   DB_HOST=<HOST ADDRESS>
   DB_USER=<YOUR DB USERNAME>
   DB_PSWD=<YOUR DB PASSWORD>
```

7. Start the server

```bash
  npm start
```

<!-- TechStack -->

## :space_invader: Tech Stack

- Express
- MySQL
- Knex

<!-- Contact -->

## :handshake: Contact

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lamisaadat/)

<!-- Acknowledgments -->

## :gem: Acknowledgements

- [Nodemon](https://www.npmjs.com/package/nodemon)
