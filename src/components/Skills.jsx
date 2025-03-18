import React from 'react'
import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Terminal, Wrench } from "lucide-react";

const skills = [
    {
        category: "Programming Languages",
        icon: Code2,
        items: [
            "C",
            "C++",
            "JavaScript",
            "Python (Basic)",
            "Object-Oriented Programming",
            "Data Structures & Algorithms",
        ],
    },
    {
        category: "Frontend Development",
        icon: Layout,
        items: [
            "HTML",
            "CSS",
            "JavaScript",
            "ReactJS",
            "Responsive Design",
            "Modern ES6+",
        ],
    },
    {
        category: "Backend Development",
        icon: Server,
        items: [
            "NodeJS",
            "ExpressJS",
            "REST APIs",
            "API Integration",
            "Server Architecture",
        ],
    },
    {
        category: "Database Technologies",
        icon: Database,
        items: ["SQL", "PostgreSQL", "Database Design", "Query Optimization", "Data Modeling"],
    },
    {
        category: "Development Tools",
        icon: Wrench,
        items: ["Git", "GitHub", "VS Code", "Postman", "CodeSandbox", "API Testing"],
    },
    {
        category: "Development Practices",
        icon: Terminal,
        items: ["Version Control", "RESTful Services", "API Documentation", "Code Review", "Problem Solving"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-5 bg-light">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center mb-5"
                >
                    <h2 className="fw-bold text-dark">Skills & Expertise</h2>
                    <p className="text-muted">
                        A comprehensive overview of my technical skills and proficiencies
                    </p>
                </motion.div>

                <div className="row">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            className="col-md-6 col-lg-4 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <div className="skill-card custom-card bg-white p-4 rounded-3">

                                <div className="d-flex align-items-center mb-3">
                                    <skill.icon size={24} className="text-primary me-2" />
                                    <h3 className="fs-5 fw-semibold" style={{ color:" #212529"}}>{skill.category}</h3>

                                </div>
                                <ul className="list-unstyled">
                                    {skill.items.map((item) => (
                                        <li key={item} className="d-flex align-items-center text-muted p-1">
                                            <span
                                                className="d-inline-block bg-primary rounded-circle me-3"
                                                style={{ width: "8px", height: "8px" }}
                                            ></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
