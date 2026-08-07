import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Education', path: '/education' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Contact', path: '/#contact' },
  ];

  return (
    <footer
      className="py-10 px-6 md:px-16"
      style={{
        backgroundColor: 'var(--bg)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* ROW 1: Logo, Nav, Socials */}
        <div className="flex flex-wrap justify-between items-center gap-6">
          {/* Left: Logo */}
          <Link
            to="/"
            className="font-bold text-lg"
            style={{
              fontFamily: 'Georgia, serif',
              color: 'var(--gold)',
              letterSpacing: '0.1em',
            }}
          >
            Rohit
          </Link>

          {/* Center: Nav links */}
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              link.path.startsWith('/#') ? (
                <a
                  key={link.label}
                  href={link.path}
                  className="text-xs uppercase tracking-widest transition-colors duration-200"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-xs uppercase tracking-widest transition-colors duration-200"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Right: Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/rohitraj-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/rohitraj-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="https://x.com/rajrohit_7388"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              aria-label="Twitter / X"
            >
              <FaXTwitter size={16} />
            </a>
          </div>
        </div>

        {/* Divider line */}
        <div className="w-full h-px my-6" style={{ backgroundColor: 'var(--border)' }} />

        {/* ROW 2: Copyright & Credits */}
        <div className="flex flex-wrap justify-between items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
          <span>© 2025 Rohit Raj. All rights reserved.</span>
          <span>Built with React &amp; Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
