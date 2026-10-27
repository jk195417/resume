# Resume

Serves the PDF resume at <https://resume.yang-hong-xin.com>.

The online versions live on Notion ([English](https://yang-hong-xin.notion.site/Resume-b8b910439158413a81868e1a39c27310) / [中文](https://yang-hong-xin.notion.site/926f9aff8ffd4166a8e1ed5d37f6cd89)), and all other links are on <https://yang-hong-xin.com>.

## Updating the PDF

The PDF is rendered from [`pdf-source/resume-en.html`](./pdf-source/resume-en.html). After editing it, regenerate the PDF with Playwright:

```bash
node pdf-source/build-pdf.mjs "$PWD/pdf-source/resume-en.html" public/aaron-yang-software-engineer-resume-en.pdf /tmp/resume-preview.png
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
