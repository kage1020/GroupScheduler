import { useState, useEffect } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [liffObject, setObject] = useState(null);
  const [liffError, setError] = useState(null);

  useEffect(() => {
    import('@line/liff').then((liff) => {
      liff
        .init({
          liffId: process.env.NEXT_PUBLIC_LIFF_ID,
          // withLoginOnExternalBrowser: true,
        })
        .then(() => {
          console.log('liff.init() done');
          setObject(liff);
        })
        .catch((error) => {
          console.log(`liff.init() failed: ${error}`);
          if (!process.env.NEXT_PUBLIC_LIFF_ID) {
            console.info(
              'LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable.'
            );
          }
          setError(error.toString());
        });
    });
  }, []);

  pageProps.liff = liffObject;
  pageProps.liffError = liffError;
  return <Component {...pageProps} />
}

export default MyApp
