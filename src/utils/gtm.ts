interface IDataLayerObject {
  event?: string;
  page?: string;
  [key: string]: any;
}

// @ts-ignore
interface ICustomWindow extends Window {
  dataLayer?: IDataLayerObject[];
}

declare let window: ICustomWindow;

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const GTM_SERVER = process.env.NEXT_PUBLIC_GTM_SERVER || 'www.googletagmanager.com';

const GTM_AUTH = process.env.NEXT_PUBLIC_GTM_AUTH;

const GTM_ENV = process.env.NEXT_PUBLIC_GTM_ENV;

export const getIFrameURL = () => {
  const BASE_URL = `https://${GTM_SERVER}/ns.html`;

  if (!GTM_ID) {
    console.warn('next-google-tag-manager: It looks like you forgot to configure your Google Tag Manager. For more information please check https://github.com/XD2Sketch/next-google-tag-manager#usage');
  }

  const queryParams = new URLSearchParams({ id: GTM_ID! });

  if (GTM_AUTH) {
    queryParams.append('gtm_auth', GTM_AUTH);
  }

  if (GTM_ENV) {
    queryParams.append('gtm_preview', `env-${GTM_ENV}`);
    queryParams.append('gtm_cookies_win', 'x');
  }

  return `${BASE_URL}?${queryParams.toString()}`;
}

export const getScriptQueryString = () => {
  const string = '';

  if (GTM_AUTH) string.concat(`&gtm_auth=${GTM_AUTH}`);
  if (GTM_ENV) string.concat(`&gtm_preview=env-${GTM_ENV}&gtm_cookies_win=x`);

  return string;
}

export const pageview = (url: string) => {
  if (!window.dataLayer) return;

  window.dataLayer.push({ event: 'pageview', page: url });
};
