# Welcome to Deadlock API, a RESTful API built from the ground up with speed in mind

## Table of Contents

<!--toc:start-->

- [Welcome to Deadlock API, a RESTful API built from the ground up with speed in mind](#welcome-to-deadlock-api-a-restful-api-built-from-the-ground-up-with-speed-in-mind)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Docker Startup](#docker-startup)
      - [First time running the application](#first-time-running-the-application)
      - [If you made changes](#if-you-made-changes)
    - [Testing out the API](#testing-out-the-api)
  - [Custom Characters](#custom-characters)
  <!--toc:end-->

This API provides detailed information about characters in Valve's Deadlock.
The API features both a summary view of all characters and in-depth information of your desired characters.

## Getting Started

If you don't already have TS runtime, install one. Bun is what this project utilizes.

To install for MacOS & Linux:

```bash
curl -fsSL https://bun.sh/install | bash
```

To install for Windows:

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

Then, clone the project and navigate into the directory:

```bash
git clone https://codeberg.org/dalentri/deadlock_api.git
cd deadlock_api
```

After cloning, you must configure your `.env` variables. The project has a pre-populated `.env` under the name `.env.example`, to use the provided template, rename it to `.env`:

```bash
mv .env.example .env
```

### Docker Startup

Once `.env` variables are configured, next is running the docker compose file.

#### First time running the application

If its your first time running the app, or you haven't changed any config files:

```bash
docker compose up -d
```

#### If you made changes

If you made any changes to your `.env` file or if you made any changes to the code or dependencies in 'package.json':

```bash
docker compose up --build
```

Next is to test the API endpoints.

### Testing out the API

Now lets test it out! There are two quick ways to test the API:

First we can get a JSON response from the browser. To start, paste and search this sample request URL into your browser's address bar:

`http://localhost:3000/api/characters`

The second method is to use cURL if you're more familiar with the command line, to request JSON from the server, run this command to fetch data:

```bash
curl http://localhost:3000/api/characters
```

That's it, its as simple as that.

## Custom Characters

To request custom characters, append your desired character name after the `characters/` endpoint like so:

`http://localhost:3000/api/characters/character-name`

Which turns into:

`http://localhost:3000/api/characters/mina`

Note that custom character names follow a special formatting:

- If the character name has a space, replace the space with a hyphen "-".
- The character name must be lowercase.

Alternatively, if you would like to type the name with spaces and uppercase letters, the application will properly format the name.
