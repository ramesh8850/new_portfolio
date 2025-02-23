import { motion } from "framer-motion";
import { Code2, Laptop, Rocket, Terminal } from "lucide-react";

export default function About() {
    return (
        <section
            id="about"
            className="py-5"
            style={{
                background: "linear-gradient(to bottom right, #eef2ff, #ffffff, #f3e8ff)",
            }}
        >
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center mb-4"
                >
                    <h2 className="fw-bold text-dark">About Me</h2>
                    <p className="text-secondary mt-2">
                        Passionate about creating innovative web solutions
                    </p>
                </motion.div>

                <div className="row align-items-center g-4 mt-1">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="col-md-6"
                    >
                        <div className="custom-card bg-white rounded-3 p-4 mb-3 fs-6">
                            <p className="text-muted">
                                I'm a final year B.Tech student with a passion for full-stack
                                development. Currently working as a Full Stack Developer Intern,
                                I've worked on various exciting projects that helped me grow both
                                technically and professionally.
                            </p>
                        </div>

                        <div className="row g-3">
                            {[
                                {
                                    icon: Code2,
                                    title: "Full Stack",
                                    description: "End-to-end web development expertise",
                                },
                                {
                                    icon: Terminal,
                                    title: "Problem Solver",
                                    description: "Analytical and creative solutions",
                                },
                                {
                                    icon: Rocket,
                                    title: "Quick Learner",
                                    description: "Adaptable to new technologies",
                                },
                                {
                                    icon: Laptop,
                                    title: "Project Focus",
                                    description: "Hands-on project experience",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className="col-6"
                                >
                                    <div className=" custom-card bg-white rounded-3 p-3 text-start">
                                        <item.icon className="text-primary mb-3" size={32} />
                                        <h5 className="fw-semibold text-dark mt-1">{item.title}</h5>
                                        <p className="text-muted small">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="col-md-6"
                    >
                        <div className="custom-card bg-white rounded-3 p-4 mb-3">
                            <h4 className="text-dark mb-3">What I Do</h4>
                            <ul className="list-unstyled">
                                {[
                                    {
                                        title: "Full Stack Development",
                                        description:
                                            "Building end-to-end web applications using React, Node.js, and PostgreSQL.",
                                    },
                                    {
                                        title: "Project Exploration",
                                        description:
                                            "Exploring and implementing various full-stack projects to enhance my skills.",
                                    },
                                    {
                                        title: "Continuous Learning",
                                        description:
                                            "Staying updated with the latest web technologies and best practices.",
                                    },
                                    {
                                        title: "Problem Solving",
                                        description:
                                            "Applying data structures and algorithms to solve complex problems.",
                                    },
                                ].map((item, index) => (
                                    <motion.li
                                        key={item.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        className="d-flex align-items-start mb-2"
                                    >
                                        <span
                                            className="rounded-circle bg-primary d-inline-block me-2"
                                            style={{ width: "8px", height: "8px", marginTop: "8px" }}
                                        />
                                        <div>
                                            <h6 className="text-dark fw-semibold">{item.title}</h6>
                                            <p className="text-muted small">{item.description}</p>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div
                            className="custom-card text-white rounded-3 p-4"
                            style={{
                                background: "linear-gradient(to right, #4f46e5, #9333ea)",
                            }}
                        >
                            <h4 className="fw-semibold">Current Status</h4>
                            <p className="text-light">
                                Full Stack Developer Intern | Final Year B.Tech Student
                            </p>
                            <p className="text-light mt-2">
                                Actively seeking opportunities to contribute to innovative web
                                projects and continue growing as a developer.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
