import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <div className="container" style={{paddingTop: '120px', minHeight: '80vh'}}>
      <h1>Features</h1>
      <p>This is the features page. Content coming soon.</p>
      <Link href="/">← Back to Home</Link>
    </div>
  );
}
