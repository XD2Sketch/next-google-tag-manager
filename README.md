# @magicul/next-google-tag-manager

![npm bundle size](https://img.shields.io/bundlephobia/min/@magicul/next-google-tag-manager)
![npm](https://img.shields.io/npm/dt/next-google-tag-manager)
![GitHub issues](https://img.shields.io/github/issues/XD2Sketch/next-google-tag-manager)
![npm](https://img.shields.io/npm/v/@magicul/next-google-tag-manager)
![GitHub Repo stars](https://img.shields.io/github/stars/XD2Sketch/next-google-tag-manager?style=social)

A lightweight Next 13 library to easily implement Google Tag Manager
in your projects. This package forwards all of the page changes to
Google Tag Manager so you can easily track your users.

## Installation

Install this package with `npm`

```bash
npm i @magicul/next-google-tag-manager
```

Or with `yarn`

```bash
yarn add @magicul/next-google-tag-manager
```

## Usage

### Using the GoogleTagManager component

To initialize Google Tag Manager, add `<GoogleTagManager />`
to `app/layout.tsx` like this:

```tsx
import GoogleTagManager from '@magicul/next-google-tag-manager';

const RootLayout = ({ children }) => (
  <html lang="en">
  <body>
  <GoogleTagManager id="GTM-XXXXX" />
  {children}
  </body>
  </html>
);
```

Note: This package
utilizes [next/script](https://nextjs.org/docs/basic-features/script),
which means you **can't** place it inside a `next/head`.

### Configuring

To customize the way you load Google Tag Manager, you can pass the
following props to the component:

| Prop name   | Type   | Default value            | Description                                                                                                                                                                                                                                                       |
|-------------|--------|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id          | string | -                        | The ID of your Google Tag Manager container                                                                                                                                                                                                                       |
| server      | string | www.googletagmanager.com | The tagging server that is used, you can configure your own server here or use the default Google Tag Manager server by default. This is used for server side tagging. Please only put the domain, subdomain and top level domain here to make it work correctly. |
| auth        | string | -                        | Authentication string for the container configuration.                                                                                                                                                                                                            |
| environment | string | -                        | The environment that is used, see [Environments - Tag Manager Help](https://support.google.com/tagmanager/answer/6311518?hl=en) for more information                                                                                                              |

