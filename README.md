## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Lib requirements
In order to allow the appliction to manipulate the images, we need the following libs to be installed:

Debian/Ubuntu:

`sudo apt install libreoffice-dev imagemagick poppler-utils`

Mac:

`brew install imagemagick poppler ghostscript`

Debian/Ubuntu:
```bash
$ sudo apt-get install ghostscript
$ sudo apt-get install graphicsmagick
```

Mac:
```bash
brew install gs graphicsmagick
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

The app is available in port 3000, example: http://localhost:3000

## Swagger
you could access swagger by the following url:
http://localhost:3000/swagger/#/