'use client';

import React, { FC, useEffect } from 'react';
import Script from "next/script";
import {
  getIFrameURL,
  getScriptQueryString,
  GoogleTagManagerArgs,
  pageview,
} from '../utils/gtm';
import { usePathname, useSearchParams } from 'next/navigation';

const GoogleTagManager: FC<GoogleTagManagerArgs> = ({
  id,
  server = 'www.googletagmanager.com',
  auth,
  environment,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) pageview(pathname);
  }, [pathname, searchParams]);

  return (
    <>
      <noscript>
        <iframe
          title="gtm"
          src={getIFrameURL({ id, server, auth, environment })}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://${server}/gtm.js?id='+i+dl ${getScriptQueryString(auth, environment)};f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${id}');
          `,
        }}
      />
    </>
  );
};

export default GoogleTagManager;
