import Link from 'next/link';
import { ArticleJsonLd } from 'next-seo';

function About() {
  return (
    <>
      <ArticleJsonLd
        url="https://example.com/article"
        title="Article headline"
        images={[
          'https://example.com/photos/1x1/photo.jpg',
          'https://example.com/photos/4x3/photo.jpg',
          'https://example.com/photos/16x9/photo.jpg',
        ]}
        datePublished="2015-02-05T08:00:00+08:00"
        dateModified="2015-02-05T09:00:00+08:00"
        authorName={['Jane Blogs', 'Mary Stone']}
        publisherName="Jane Blogs"
        publisherLogo="https://www.example.com/photos/logo.jpg"
        description="This is a mighty good description of this article."
      />

      <h1>JsonLd</h1>
      <p>
        This page shows how you can use one of the supported JSON-LD components.
      </p>

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
