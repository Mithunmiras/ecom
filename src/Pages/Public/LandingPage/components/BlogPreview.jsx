import React, { useEffect, useRef } from 'react';

const BlogPreview = () => {
  const sectionRef = useRef(null);

  const blogPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1744640326166-433469d102f2?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
      category: 'AI Agents',
      date: 'Jan 15, 2024',
      readTime: '5 min read',
      title: 'The Future of AI Agents in Business',
      excerpt: 'Discover how AI agents are revolutionizing business operations and driving unprecedented efficiency gains.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1678977252570-58db7acbbeea?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
      category: 'Voice AI',
      date: 'Jan 10, 2024',
      readTime: '6 min read',
      title: 'Voice AI Revolution: Transforming Customer Experience',
      excerpt: 'Learn how voice AI is creating seamless customer interactions and reducing support costs by 50%.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1761393654131-c17830b2f823?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
      category: 'Strategy',
      date: 'Jan 5, 2024',
      readTime: '7 min read',
      title: 'Building Your First AI Digital Roadmap',
      excerpt: 'A comprehensive guide to creating an AI transformation roadmap that aligns with your business goals.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="blog-preview-section section" id="blog" ref={sectionRef}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-badge scroll-reveal">From Our Blog</span>
          <h2 className="section-title scroll-reveal">Latest AI Insights</h2>
          <p className="section-subtitle scroll-reveal">Stay updated with the latest trends in AI and automation</p>
        </div>

        <div className="blog-grid" style={{ justifyItems: 'center' }}>
          {blogPosts.map((post, index) => (
            <div key={post.id} className="blog-card scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-category">{post.category}</div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><i className="far fa-calendar"></i> {post.date}</span>
                  <span><i className="far fa-clock"></i> {post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href="#" className="blog-link">Read Article <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center scroll-reveal" style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
          <a href="#" className="btn btn-outline btn-lg">
            View All Articles <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;