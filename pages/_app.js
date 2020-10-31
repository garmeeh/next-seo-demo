import { DefaultSeo } from 'next-seo';
import { DefaultSeoValues } from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...DefaultSeoValues} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
