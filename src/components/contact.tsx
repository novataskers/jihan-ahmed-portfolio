"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold font-space">Get in Touch</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a project in mind? Let's build something amazing together.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-muted transition-colors hover:border-primary/50">
              <div className="p-3 rounded-xl bg-background border text-primary">
                <Mail size={20} />
              </div>
                <div>
                  <span className="block text-sm text-muted-foreground uppercase tracking-wider font-bold">Email Me</span>
                  <a href="mailto:hello@jihanahmed.com" className="text-lg font-medium hover:text-primary transition-colors">
                    hello@jihanahmed.com
                  </a>
                </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-4 rounded-2xl bg-muted/50 border border-muted text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-muted/30 border border-muted"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Name</label>
              <input
                required
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-background border border-muted focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email</label>
              <input
                required
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-background border border-muted focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-background border border-muted focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-foreground text-background font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
