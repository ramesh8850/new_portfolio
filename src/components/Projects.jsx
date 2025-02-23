import React from 'react'

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';


const projects = [
    {
        title: "Bookmark Manager",
        description: "Developed a web-based bookmark management system for organizing and accessing saved links efficiently. Implemented user authentication, CRUD operations, and a clean UI for seamless navigation.",
        image: `${process.env.PUBLIC_URL}/images/Bookmark_Application.png`,
        technologies: ["JavaScript", "Node.js", "Express.js", "ReactJS", "Postgres"],
        github: "https://github.com/ramesh8850/Bookmark_manager2",
        demo:"https://bookmark-manager2.vercel.app",
    },
        {
            title: "AI-Enhanced Video Translation System",
            description: "Built AI-powered multilingual video translation tool with high contextual accuracy. Created seamless pipeline for audio extraction, transcription, and reintegration. Developed user interface for video upload and language selection.",
        image: `${process.env.PUBLIC_URL}/images/AI-Enhanced_video_translation.png`,
            technologies: ["Python", "JavaScript", "HTML", "CSS"],
        github: "https://github.com/ramesh8850/AI-Enhanced-video-Translation-System",
        demo:"https://github.com/ramesh8850/AI-Enhanced-video-Translation-System",
        },
        {
            title: "Rule Engine Application",
            description: "Developed rule engine with dynamic rule parsing and efficient AST generation. Designed create, combine, and evaluation functionalities in a modular structure. Designed interactive web interface with EJS templating for user-friendly rule management.",
            image: `${process.env.PUBLIC_URL}/images/Rule_Engine.png`,
            technologies: ["JavaScript", "EJS", "Node.js", "Express.js"],
            github: "https://github.com/ramesh8850/3-tier-Rule-Engine-AST",
            demo: "https://github.com/ramesh8850/3-tier-Rule-Engine-AST",
        },
        {
            title: "Weather Monitoring System",
            description: "Developed a real-time weather monitoring system for dynamic weather updates. Implemented data retrieval from OpenWeatherMap API for daily summaries and alerts. Designed user interface for visualizing weather trends and threshold alerts.",
            image: `${process.env.PUBLIC_URL}/images/Weather_App.png`,
            technologies: ["JavaScript", "Node.js", "Express.js", "EJS"],
            github: "https://github.com/ramesh8850/Weather-Application",
            demo: "https://weather-application-liard-five.vercel.app",
        },
        {
            title: "Memory Flash Game",
            description: "Developed an interactive memory game where players repeat sequences of colors and sounds. Showcased front-end development skills through engaging game mechanics and user interface design. Implemented responsive design for optimal play on various devices.",
            image: `${process.env.PUBLIC_URL}/images/Memory_Flash_Game1.png`,
            technologies: ["JavaScript", "HTML", "CSS"],
            github: "https://github.com/ramesh8850/Memory-Flash-Game",
            demo: "https://memory-flash-game.vercel.app",
        },

];

export default function Projects() {
    return (
        <section id="projects" className="py-4" style={{ backgroundColor: '#fff' }}>
            <div className="container py-3">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center mb-4"
                >
                    <h2 className="h2 fw-bold text-dark mb-2" style={{ fontSize: '2rem' }}>
                        Featured Projects
                    </h2>
                    <p className="text-muted" style={{ fontSize: '1rem' }}>
                        A selection of my recent work and personal projects
                    </p>
                </motion.div>

                <div className="d-flex flex-column gap-4">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="row align-items-center g-3"
                        >
                            <div className="col-md-6">
                                <div className="position-relative custom-card" style={{ overflow: 'hidden', borderRadius: '0.5rem' }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="img-fluid"
                                        style={{
                                            height: '250px',
                                            width: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '0.5rem'
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h3 className="h4 fw-bold mb-2" style={{ fontSize: '1.5rem' }}>{project.title}</h3>
                                <p className="text-muted mb-3" style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                                    {project.description}
                                </p>
                                <div className="d-flex flex-wrap gap-2 mb-3">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="badge"
                                            style={{
                                                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                                                color: '#4F46E5',
                                                padding: '0.35rem 0.75rem',
                                                borderRadius: '9999px',
                                                fontSize: '0.8rem'
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="d-flex gap-3">
                                    <a
                                        href={project.github}
                                        className="text-decoration-none d-flex align-items-center gap-1"
                                        style={{ color: '#6B7280', fontSize: '0.9rem' }}
                                        onMouseOver={(e) => e.currentTarget.style.color = '#4F46E5'}
                                        onMouseOut={(e) => e.currentTarget.style.color = '#6B7280'}
                                    >
                                        <Github className="flex-shrink-0" style={{ width: '1rem', height: '1rem' }} />
                                        <span>Source Code</span>
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="text-decoration-none d-flex align-items-center gap-1"
                                        style={{ color: '#6B7280', fontSize: '0.9rem' }}
                                        onMouseOver={(e) => e.currentTarget.style.color = '#4F46E5'}
                                        onMouseOut={(e) => e.currentTarget.style.color = '#6B7280'}
                                    >
                                        <ExternalLink className="flex-shrink-0" style={{ width: '1rem', height: '1rem' }} />
                                        <span>Live Demo</span>
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
