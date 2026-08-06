import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const contactLinks = [
  {
    icon: Mail,
    label: 'mail.rohitraj9973@gmail.com',
    href: 'mailto:mail.rohitraj9973@gmail.com',
  },
  {
    icon: FaGithub,
    label: 'github.com/rohitraj-dev',
    href: 'https://github.com/rohitraj-dev',
  },
  {
    icon: FaLinkedin,
    label: 'linkedin.com/in/rohitraj-dev',
    href: 'https://www.linkedin.com/in/rohitraj-dev/',
  },
  {
    icon: FaXTwitter,
    label: 'x.com/rajrohit_7388',
    href: 'https://x.com/rajrohit_7388',
  },
];

const inputStyle = {
  backgroundColor: 'var(--surface-2)',
  border: '1px solid var(--border)',
  color: 'var(--text)',
  borderRadius: '2px',
  width: '100%',
  outline: 'none',
};

const labelStyle = {
  color: 'var(--text-muted)',
  fontSize: '0.7rem',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  display: 'block',
  marginBottom: '0.375rem',
};

function Field({ label, children }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });
    emailjs
      .sendForm('service_b7aivig', 'template_l17vlez', formRef.current, 'zW73IJZEv2Nsgd6w4')
      .then(() => {
        setStatus({ type: 'success', message: "Message sent!" });
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus({ type: 'error', message: "Something went wrong. Try emailing me directly." });
      })
      .finally(() => setIsSubmitting(false));
  };

  const handleFocus = (e) => { e.currentTarget.style.borderColor = 'var(--gold)'; };
  const handleBlur  = (e) => { e.currentTarget.style.borderColor = 'var(--border)'; };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-16"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span
            className="w-10 h-px"
            style={{ backgroundColor: 'var(--gold)', display: 'inline-block' }}
          />
          <span
            style={{
              color: 'var(--gold)',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              fontVariant: 'small-caps',
              fontWeight: 600,
            }}
          >
            CONTACT
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display text-3xl md:text-4xl font-bold mb-4"
          style={{ color: 'var(--text)' }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="text-sm mb-14 max-w-lg"
          style={{ color: 'var(--text-muted)' }}
        >
          Open to internships, freelance projects, and collaborations. Drop a message or reach out directly.
        </motion.p>

        {/* 2-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-3"
          >
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-sm transition-all duration-200"
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--gold)';
                  e.currentTarget.style.color = 'var(--gold)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-muted)';
                }}
              >
                <Icon size={15} className="shrink-0" />
                <span className="text-sm truncate">{label}</span>
              </a>
            ))}

            <p
              className="text-xs italic mt-2 pl-1"
              style={{ color: 'var(--text-muted)', opacity: 0.7 }}
            >
              Open to internships, freelance, and collaborations.
            </p>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
              <Field label="Name">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="px-4 py-3 text-sm transition-colors duration-200"
                  style={{ ...inputStyle, '::placeholder': { color: 'var(--text-muted)' } }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </Field>

              <Field label="Email">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="px-4 py-3 text-sm transition-colors duration-200"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </Field>

              <Field label="Message">
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                  className="px-4 py-3 text-sm resize-none transition-colors duration-200"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </Field>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 text-sm font-medium rounded-sm transition-opacity duration-200 disabled:opacity-50"
                style={{ backgroundColor: 'var(--gold)', color: '#000' }}
                onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.opacity = '0.88'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>

              {status.message && (
                <p
                  className="text-center text-sm font-medium"
                  style={{ color: status.type === 'success' ? 'var(--gold)' : '#f87171' }}
                >
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
