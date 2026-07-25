import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const formRef = useRef(null);

  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      formRef.current, 
      'YOUR_PUBLIC_KEY'
    )
      .then(() => {
        setStatus({ type: 'success', message: "Message sent! I'll get back to you soon ✓" });
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus({ type: 'error', message: "Something went wrong. Try emailing me directly." });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/rohitraj-dev", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/rohitraj-dev/", label: "LinkedIn" },
    { icon: FaXTwitter, href: "https://x.com/rajrohit_7388", label: "Twitter/X" },
    { icon: FaInstagram, href: "https://www.instagram.com/r.a.j_rohit/", label: "Instagram" }
  ];

  return (
    <section id="contact" className="bg-[#0a0a0f] py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Left Column: Details */}
          <div className="flex flex-col">
            <motion.div variants={itemVariants} className="mb-8 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-white font-[Space_Grotesk] mb-3">Get In Touch</h2>
              <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto lg:mx-0"></div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-white/70 text-lg leading-relaxed mb-10 text-center lg:text-left">
              I'm open to internships, freelance projects, and collaborations. Drop a message!
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col gap-5 mb-12">
              <div className="flex items-center gap-4 text-white/80 justify-center lg:justify-start">
                <span className="text-xl">📧</span>
                <a href="mailto:mail.rohitraj@icloud.com" className="hover:text-cyan-400 font-medium transition-colors">
                  mail.rohitraj@icloud.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-white/80 justify-center lg:justify-start">
                <span className="text-xl">📍</span>
                <span className="font-medium">Deoghar, Jharkhand, India</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-cyan-400/20 hover:border-cyan-400/60 text-white/70 hover:text-cyan-400 px-4 py-2.5 rounded-full transition-all duration-300"
                >
                  <social.icon className="text-lg" />
                  <span className="text-sm font-medium">{social.label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-6 md:p-8">
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
              
              <div>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/60 transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/60 transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/60 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl py-3.5 mt-2 hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>

              {status.message && (
                <p className={`text-center text-sm mt-3 font-medium ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
