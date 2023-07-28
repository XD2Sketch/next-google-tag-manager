'use client';

import React, { useEffect } from 'react';
import Script from "next/script";
import { getIFrameURL, getScriptQueryString, GTM_ID, GTM_SERVER, pageview } from '../utils/gtm';
import { usePathname, useSearchParams } from 'next/navigation';

const GoogleTagManager = () => {
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
          src={getIFrameURL()}
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
            'https://${GTM_SERVER}/gtm.js?id='+i+dl ${getScriptQueryString()};f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
    </>
  );
};

export default GoogleTagManager;
