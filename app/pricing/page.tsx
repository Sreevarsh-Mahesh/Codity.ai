import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="container" style={{paddingTop: '120px', minHeight: '80vh'}}>
      <h1>Pricing</h1>
      <p>This is the pricing page. Content coming soon.</p>
      <Link href="/">← Back to Home</Link>
    </div>
  );
}
