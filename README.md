OpenAPI 3.0 Specification for Azure Standard's API.

## Style guide

`summary` values are essentially headings. The first character of the string should always be capitalized. They should never end in a period.

`description` values should be formatted with normal sentence formatting. They should always end with a period. Markdown is supported for rich-text formatting. Use one space between sentences (not two).

## Docs site

URL: https://azure-api-docs.netlify.app/

Uses [Redoc](https://github.com/Redocly/redoc).

### Run it locally

Via Node.js (with zero dependencies, so no `npm install` necessary):

```sh
$ node serve.js # Use `--port=` for a non-default port (e.g. `--port=9999`).
```

Via other languages: use a [one-liner in your choice language](https://gist.github.com/willurd/5720255).