import { NextSeo } from 'next-seo';
import Link from 'next/link';

function About() {
  return (
    <>
      <NextSeo
        title="About Page"
        description="This is the about page of the example."
      />
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/example-jsonld">
        <a>Example JSON-LD</a>
      </Link>
    </>
  );
}

export default About;
