"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "EcoSphere AI",
    description: "An AI-powered environmental monitoring platform providing real-time data visualization.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    video: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-the-earth-2041-large.mp4",
    tags: ["React", "Three.js", "AI", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "Nova Dashboard",
    description: "High-performance analytics dashboard for crypto assets with interactive charts.",
    image: "https://images.unsplash.com/photo-1551288049-bbdac8626ad1?q=80&w=2070&auto=format&fit=crop",
    video: "https://assets.mixkit.co/videos/preview/mixkit-data-processing-on-a-digital-screen-22646-large.mp4",
    tags: ["Next.js", "Recharts", "Framer Motion"],
    link: "#",
    github: "#",
  },
  {
    title: "Aura Lifestyle",
    description: "Minimalist e-commerce platform focusing on sustainable living and design.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-a-laptop-4481-large.mp4",
    tags: ["TypeScript", "Stripe", "Next.js"],
    link: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="works" className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold font-space">Selected Works</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            A collection of projects where I've combined design and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-muted/50 rounded-3xl overflow-hidden border border-muted transition-all hover:border-primary/50"
            >
              {/* Media Container */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Video Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                   <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover"
                   >
                     <source src={project.video} type="video/mp4" />
                   </video>
                   <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <div className="p-2 rounded-full bg-background/80 backdrop-blur-sm border border-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Play size={16} fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-background border text-[10px] font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-space group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
                  >
                    Source <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
