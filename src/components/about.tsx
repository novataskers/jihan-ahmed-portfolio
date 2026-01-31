"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Sparkles } from "lucide-react";

const skills = [
  { icon: Code2, label: "Development", description: "Crafting clean, maintainable code with modern frameworks." },
  { icon: Palette, label: "Design", description: "Creating visually stunning and intuitive user interfaces." },
  { icon: Sparkles, label: "Innovation", description: "Always exploring new technologies and creative solutions." },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold font-space">About Jihan Ahmed</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I am Jihan Ahmed, a multidisciplinary digital specialist and AI developer dedicated to bridging the gap between creativity and advanced technology.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground">
                Skilled in content production, editing, video and graphic design, web/app development, UI/UX, and AI systems, I leverage modern technologies to create innovative digital products that drive real impact.
              </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-background border">
                <span className="block text-2xl font-bold font-space">5+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="p-4 rounded-2xl bg-background border">
                <span className="block text-2xl font-bold font-space">50+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Projects Completed</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4"
        >
          {skills.map((skill, index) => (
            <div
              key={skill.label}
              className="group p-6 rounded-3xl bg-background border transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <skill.icon size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-space">{skill.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
