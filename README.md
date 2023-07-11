# next-google-tag-manager

![npm bundle size](https://img.shields.io/bundlephobia/min/@magicul/next-google-tag-manager)
![npm](https://img.shields.io/npm/dt/next-google-tag-manager)
![GitHub issues](https://img.shields.io/github/issues/XD2Sketch/@magicul/next-google-tag-manager)
![npm](https://img.shields.io/npm/v/@magicul/next-google-tag-manager)
![GitHub Repo stars](https://img.shields.io/github/stars/XD2Sketch/@magicul/next-google-tag-manager?style=social)

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
import { Suspense } from 'react';
import NextGoogleTagManager from '@magicul/next-google-tag-manager';

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Suspense>
        <NextGoogleTagManager />
      </Suspense>
      {children}
    </body>
  </html>
);
```

**Important:** make sure to wrap the component in `<Suspense>` to still be able to have your root layout as a server component.

This package utilizes [next/script](https://nextjs.org/docs/basic-features/script), which means you **can't** place it inside a `next/head`.
