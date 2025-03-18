import React from 'react'
import { motion } from "framer-motion";
import { BookOpen, Briefcase, GraduationCap } from "lucide-react";

export default function Resume() {
    return (
        <section id="resume" className="py-5 bg-white">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center mb-5"
                >
                    <h2 className="fw-bold text-dark">Resume</h2>
                    <p className="text-muted">My educational and professional journey</p>
                </motion.div>

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="mb-4"
                >
                    <div className="d-flex align-items-center mb-3">
                        <GraduationCap className="text-primary me-2" size={24} />
                        <h3 className="fw-bold">Education</h3>
                    </div>
                    <div className="card custom-card mb-3">
                        <div className="card-body">
                            <h4 className="fw-semibold">Bachelor of Technology in Computer Science</h4>
                            <h5 className="text-primary">VNR Vignana Jyothi Institute of Engineering and Technology</h5>
                            <p className="text-muted">2021 - 2025</p>
                            <p>
                                • Maintaining a CGPA of 7.76/10
                                <br />• Core coursework: Data Structures, Algorithms, Database
                                Management, Operating Systems
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Work Experience */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="mb-4"
                >
                    <div className="d-flex align-items-center mb-3">
                        <Briefcase className="text-primary me-2" size={24} />
                        <h3 className="fw-bold">Work Experience</h3>
                    </div>
                    <div className="card custom-card mb-3">
                        <div className="card-body">
                            <h4 className="fw-semibold">Full Stack Developer Intern</h4>
                            <h5 className="text-primary">Kraf Technologies</h5>
                            <p className="text-muted">Feb 2025 - Present</p>
                            <p>
                                • Designed intuitive UI/UX using Figma for a seamless user experience
                                <br />• Developed a support chatbot in React.js for user assistance
                                <br />• Built a real-time chat system with WebSockets for instant communication
                                <br />• Integrated Google and GitHub authentication APIs via Supabase
                                <br />• Managed authentication, chat storage, and user data using Supabase
                                <br />• Collaborated with senior developers, participated in code reviews and team meetings

                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div className="d-flex align-items-center mb-3">
                        <BookOpen className="text-primary me-2" size={24} />
                        <h3 className="fw-bold">Certifications</h3>
                    </div>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="card custom-card h-100">
                                <div className="card-body">
                                    <h4 className="fw-semibold">Web Development</h4>
                                    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7256220938231296000/" className="text-primary h5 text-decoration-none">
                                        Sky-Highies Technologies
                                    </a>
                                    <p className="text-muted mt-2">2024</p>
                                    <p>Comprehensive course covering full-stack web development</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card custom-card h-100">
                                <div className="card-body">
                                    <h4 className="fw-semibold">Data Structures and Algorithms</h4>
                                    <a href="https://smartinterviews.in/certificate/d46c37de" className="text-primary h5 text-decoration-none">
                                        Smart Interviews
                                    </a>
                                    <p className="text-muted mt-2">2023</p>
                                    <p>Advanced course on DSA and problem-solving techniques</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
