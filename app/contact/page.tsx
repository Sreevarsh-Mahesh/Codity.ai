import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container" style={{paddingTop: '120px', minHeight: '80vh'}}>
      <h1>Contact</h1>
      <p>This is the contact page. Content coming soon.</p>
      <Link href="/">← Back to Home</Link>
    </div>
  );
}
