import Link from 'next/link';
import FeaturesDetailedSection from '../../components/FeaturesDetailedSection';

export default function FeaturesPage() {
  return (
    <div style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div className="container">
        <div className="section-header-center">
          <h1>Features</h1>
          <p className="lead">Explore the powerful capabilities that make Codity the best choice for automated code reviews and security scanning.</p>
        </div>

        {/* Render the detailed features section from the components folder */}
        <FeaturesDetailedSection />

        <div style={{ marginTop: 24 }}>
          <Link href="/">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
