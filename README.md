<h1 align="center">
  @traent/ngx-dialog
</h1>

<p align="center">
  <img width="250px" height="auto" src="https://traent.com/wp-content/uploads/2022/07/logo-color.svg">
</p>

<br />

> @traent/ngx-dialog is an Angular library that provides a dialog service for showing some predefined typologies of dialog.


> Notice: This library is currently under development and might be subjected to breaking changes.

## Compatibility with Angular Versions

| @traent/ngx-dialog | Angular        |
| ------------------ | -------------- |
| 0.0.x              | 14             |


## Installation

You can install it through **NPM**:

```bash
npm install @traent/ngx-dialog
```

When you install using **npm**, you will also need to import `NgxT3DialogModule` in your `app.module`:

```typescript
import { NgxT3DialogModule } from '@traent/ngx-dialog';

@NgModule({
  imports: [NgxT3DialogModule],
})
class AppModule {}
```

## API & Examples

The example app can be launched using `npm run serve:example`.

Please note that the `example-app` depends from `@traent/design-system` and in particular from its `fonts.scss and  `material/theme` configurations and styles.

In it, you can find a simple usage of `NgxT3DialogService` that is used to instantiate customizable dialogs.

There are three main dialog methods that you can use to instantiate `alert` dialogs, `confirm` dialogs and `message` dialogs.

## Building & Publishing

The building and publishing of this library to NPM is performed through an internal Organization flow that uses the standard Angular approach.

In the future, we will improve the tooling to allow everyone to build this library easily.

## License

`@traent/ngx-dialog` is available under the Apache-2 license. See the [LICENSE](./LICENSE) file for more info.

## Contributors

We are open to any contributions and feedbacks.
