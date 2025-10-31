'use client';

import Link from 'next/link';
import { useState } from 'react';
import BlurText from '@/components/ui/shadcn-io/blur-text';

// Blog post interface
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

// Dummy blog posts
const initialBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI-Powered Code Reviews',
    excerpt: 'Discover how artificial intelligence is transforming the way developers review code, catching bugs faster and improving code quality across teams.',
    author: 'Sarah Chen',
    date: 'Oct 28, 2025',
    readTime: '5 min read',
    category: 'AI & Technology',
  },
  {
    id: '2',
    title: '10 Common Security Vulnerabilities and How to Prevent Them',
    excerpt: 'Learn about the most common security vulnerabilities in modern applications and practical strategies to protect your codebase from potential threats.',
    author: 'Michael Rodriguez',
    date: 'Oct 25, 2025',
    readTime: '8 min read',
    category: 'Security',
  },
  {
    id: '3',
    title: 'Building Better Teams with Automated Code Review',
    excerpt: 'How automated code review tools can improve team collaboration, reduce bottlenecks, and help developers ship faster without sacrificing quality.',
    author: 'Emily Thompson',
    date: 'Oct 22, 2025',
    readTime: '6 min read',
    category: 'Best Practices',
  },
  {
    id: '4',
    title: 'Understanding Code Quality Metrics That Matter',
    excerpt: 'Not all metrics are created equal. Learn which code quality metrics actually impact your product and how to measure what truly matters.',
    author: 'David Kim',
    date: 'Oct 20, 2025',
    readTime: '7 min read',
    category: 'Development',
  },
  {
    id: '5',
    title: 'From Code Review to Deployment: A Complete CI/CD Guide',
    excerpt: 'A comprehensive guide to building a robust CI/CD pipeline that includes automated code review, testing, and deployment strategies.',
    author: 'Jessica Martinez',
    date: 'Oct 18, 2025',
    readTime: '10 min read',
    category: 'DevOps',
  },
  {
    id: '6',
    title: 'The Psychology of Code Review: Giving and Receiving Feedback',
    excerpt: 'Master the art of constructive code review feedback. Learn communication strategies that foster growth and maintain positive team dynamics.',
    author: 'Alex Johnson',
    date: 'Oct 15, 2025',
    readTime: '6 min read',
    category: 'Team Culture',
  },
];

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: '',
    excerpt: '',
    author: '',
    category: '',
    readTime: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewBlog(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new blog post
    const newPost: BlogPost = {
      id: (blogPosts.length + 1).toString(),
      title: newBlog.title,
      excerpt: newBlog.excerpt,
      author: newBlog.author,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: newBlog.readTime || '5 min read',
      category: newBlog.category,
    };

    // Add to beginning of array (most recent first)
    setBlogPosts([newPost, ...blogPosts]);
    
    // Reset form and close modal
    setNewBlog({
      title: '',
      excerpt: '',
      author: '',
      category: '',
      readTime: ''
    });
    setIsModalOpen(false);
  };

  return (
    <div className="greptile-blog-wrapper">
      {/* Add Blog Button */}
      <button 
        className="add-blog-btn"
        onClick={() => setIsModalOpen(true)}
        aria-label="Add new blog post"
      >
        <span className="add-icon">+</span>
        Add Blog
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="blog-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
            <div className="blog-modal-header">
              <h2 className="blog-modal-title">Create New Blog Post</h2>
              <button 
                className="blog-modal-close"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="blog-form">
              <div className="form-group">
                <label htmlFor="title">Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newBlog.title}
                  onChange={handleInputChange}
                  placeholder="Enter blog title"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="excerpt">Excerpt/Description *</label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={newBlog.excerpt}
                  onChange={handleInputChange}
                  placeholder="Brief description of the blog post"
                  rows={4}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="author">Author Name *</label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={newBlog.author}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category">Category *</label>
                  <select
                    id="category"
                    name="category"
                    value={newBlog.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select category</option>
                    <option value="AI & Technology">AI & Technology</option>
                    <option value="Security">Security</option>
                    <option value="Best Practices">Best Practices</option>
                    <option value="Development">Development</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Team Culture">Team Culture</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="readTime">Read Time (optional)</label>
                <input
                  type="text"
                  id="readTime"
                  name="readTime"
                  value={newBlog.readTime}
                  onChange={handleInputChange}
                  placeholder="5 min read"
                />
              </div>

              <div className="form-actions">
                <button 
                  type="button" 
                  className="btn-cancel"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn-create"
                >
                  Create Blog Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="greptile-blog-hero">
        <div className="container">
          <div className="greptile-blog-hero-content">
            <BlurText
              text="Insights & Updates"
              delay={150}
              animateBy="words"
              direction="top"
              className="greptile-blog-title"
              as="h1"
            />
            <p className="greptile-blog-subtitle">
              The latest thoughts on code review, development best practices, and building better software.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="greptile-featured-post">
        <div className="container">
          <div className="featured-post-card">
            <div className="featured-badge">Featured</div>
            <div className="featured-post-content">
              <div className="post-meta">
                <span className="post-category">{blogPosts[0].category}</span>
                <span className="post-divider">•</span>
                <span className="post-date">{blogPosts[0].date}</span>
              </div>
              <h2 className="featured-post-title">{blogPosts[0].title}</h2>
              <p className="featured-post-excerpt">{blogPosts[0].excerpt}</p>
              <div className="featured-post-footer">
                <div className="post-author">
                  <div className="author-avatar">{blogPosts[0].author.charAt(0)}</div>
                  <div className="author-info">
                    <div className="author-name">{blogPosts[0].author}</div>
                    <div className="author-meta">{blogPosts[0].readTime}</div>
                  </div>
                </div>
                <Link href={`/blog/${blogPosts[0].id}`} className="read-more-btn">
                  Read Article →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="greptile-blog-grid">
        <div className="container">
          <div className="blog-grid-header">
            <h2 className="blog-grid-title">Latest Articles</h2>
            <div className="blog-filter">
              <button className="filter-btn active">All Posts</button>
              <button className="filter-btn">Security</button>
              <button className="filter-btn">Best Practices</button>
              <button className="filter-btn">Development</button>
            </div>
          </div>

          <div className="blog-posts-grid">
            {blogPosts.slice(1).map((post, index) => (
              <article key={post.id} className="blog-post-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="blog-post-header">
                  <span className="post-category">{post.category}</span>
                  <span className="post-date">{post.date}</span>
                </div>
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <div className="blog-post-footer">
                  <div className="post-author-simple">
                    <div className="author-avatar-sm">{post.author.charAt(0)}</div>
                    <span className="author-name-sm">{post.author}</span>
                  </div>
                  <span className="post-read-time">{post.readTime}</span>
                </div>
                <Link href={`/blog/${post.id}`} className="blog-post-link">
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="greptile-blog-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay updated</h2>
            <p className="newsletter-description">
              Get the latest articles and insights delivered directly to your inbox.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
            <p className="newsletter-privacy">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="container" style={{ padding: '2rem', textAlign: 'center' }}>
        <Link href="/" className="greptile-back-link">← Back to Home</Link>
      </div>
    </div>
  );
}
