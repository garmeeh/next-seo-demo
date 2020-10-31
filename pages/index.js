import { NextSeo } from 'next-seo';
import Link from 'next/link';

function Home() {
  return (
    <>
      <NextSeo
        title="Example App"
        description="This is an example description for the page."
        openGraph={{
          title: 'Different Open Graph Title',
          description: 'A different description for open graph if you want.',
          images: [
            {
              url: 'https://www.example.ie/og-image.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: 'https://www.example.ie/og-image-2.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt 2',
            },
          ],
        }}
      />

      <h1>Example Next SEO</h1>
      <p>This app is just a small demo of next-seo in action.</p>

      <Link href="/about">
        <a>About Page</a>
      </Link>

      <Link href="/example-jsonld">
        <a>Example JSON-LD</a>
      </Link>
    </>
  );
}

export default Home;
