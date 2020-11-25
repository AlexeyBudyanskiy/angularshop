# Shop

This is training project which emulates simple shop. 
Completed tasks:
1 - Created project, tested components work, tested services work.
2 - Splitted app on several modules, created functionality to add items to the cart, used lifecycle hooks, used template variables, used directives.
3 - Added more functionality to CartService. Added ConfigOptionsService, ConstantsService, GeneratorService. Added FirstComponent where all the services injected with different DI options.
4 - Added pipes for date, currency, uppercase/lowercase/titlecase in product and cart-items component. Product servie now returns observable and asycn pipe used. Added order-by custom pipe. The pipe is used on cart-list component.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
