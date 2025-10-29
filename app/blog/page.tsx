import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="container" style={{paddingTop: '120px', minHeight: '80vh'}}>
      <h1>Blog</h1>
      <p>This is the blog page. Content coming soon.</p>
      <Link href="/">← Back to Home</Link>
    </div>
  );
}
