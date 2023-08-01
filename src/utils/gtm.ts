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

export type GoogleTagManagerArgs = {
  id: string;
  server?: string;
  auth?: string;
  environment?: string;
}

export const getIFrameURL = ({ id, server, environment, auth }: GoogleTagManagerArgs) => {
  const BASE_URL = `https://${server}/ns.html`;

  if (!id) {
    console.warn('next-google-tag-manager: It looks like you forgot to configure your Google Tag Manager. For more information please check https://github.com/XD2Sketch/next-google-tag-manager#usage');
  }

  const queryParams = new URLSearchParams({ id });

  if (auth) {
    queryParams.append('gtm_auth', auth);
  }

  if (environment) {
    queryParams.append('gtm_preview', `env-${environment}`);
    queryParams.append('gtm_cookies_win', 'x');
  }

  return `${BASE_URL}?${queryParams.toString()}`;
}

export const getScriptQueryString = (auth?: string, environment?: string) => {
  const string = '';

  if (auth) string.concat(`&gtm_auth=${auth}`);
  if (environment) string.concat(`&gtm_preview=env-${environment}&gtm_cookies_win=x`);

  return string;
}

export const pageview = (url: string) => {
  if (!window.dataLayer) return;

  window.dataLayer.push({ event: 'pageview', page: url });
};
