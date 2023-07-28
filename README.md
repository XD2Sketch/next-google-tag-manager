# @magicul/next-google-tag-manager

![npm bundle size](https://img.shields.io/bundlephobia/min/@magicul/next-google-tag-manager)
![npm](https://img.shields.io/npm/dt/next-google-tag-manager)
![GitHub issues](https://img.shields.io/github/issues/XD2Sketch/next-google-tag-manager)
![npm](https://img.shields.io/npm/v/@magicul/next-google-tag-manager)
![GitHub Repo stars](https://img.shields.io/github/stars/XD2Sketch/next-google-tag-manager?style=social)

A lightweight Next 13 library to easily implement Google Tag Manager in your projects. This package forwards all of the page changes to Google Tag Manager so you can easily track your users.

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

### Setting up the environment variables

Create a `.env.local` file in the root of your project and add the following variables:

```env
NEXT_PUBLIC_GTM_ID=<YOUR-GTM-ID>
```

### Importing the component

To initialize Google Tag Manager, add `<GoogleTagManager />` to `app/layout.tsx` like this:

```tsx
import GoogleTagManager from '@magicul/next-google-tag-manager';

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <GoogleTagManager />
      {children}
    </body>
  </html>
);
```

Note: This package utilizes [next/script](https://nextjs.org/docs/basic-features/script), which means you **can't** place it inside a `next/head`.

### Using your own tagging server

For utilizing server-side tagging through your own tagging server, you can do so by adding the `NEXT_PUBLIC_GTM_SERVER` environment variable to the `.env.local` file, this value should be the domain, any subdomains and the top level domain of your tagging server, for example:

If the URL of your tagging server is `https://tagging.example.com`, you would add the following to your `.env.local` file:

```env
NEXT_PUBLIC_GTM_SERVER=tagging.example.com
```

### Configuring your own container

Next to setting up your own tagging server, you can also configure next-google-tag-manager to use your custom container configuration. These are the values that you can set in your `.env.local` file:

| Value                  | Description                                       |
|------------------------|---------------------------------------------------|
| `NEXT_PUBLIC_GTM_AUTH` | ?                                                 |
| `NEXT_PUBLIC_GTM_ENV`  | The preview environment which the GTM belongs to. |
