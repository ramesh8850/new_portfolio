import React,{useState} from "react"
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function Contact() {

    const [loading, setLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        toast.info("Sending...", { position: "bottom-right" });

        const formData = new FormData(event.target);
        formData.append("access_key", process.env.REACT_APP_API_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            setLoading(false);

            if (data.success) {
                toast.success("Form Submitted Successfully!", { position: "bottom-right" });
                event.target.reset();
            } else {
                toast.error(`Error: ${data.message}`, { position: "bottom-right" });
            }
        } catch (error) {
            setLoading(false);
            toast.error("Something went wrong. Please try again.", { position: "bottom-right" });
            console.error("Submission error:", error);
        }
    };

    return (
        <section id="contact" className="py-1" style={{
            background: 'linear-gradient(135deg, #f6f9fc 0%, #ffffff 100%)'
        }}>
            <div className="container py-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center mb-4"
                >
                    <h2 className="h2 fw-bold text-dark mb-2">Get in Touch</h2>
                    <p className="text-muted">Let's discuss your project ideas</p>
                </motion.div>

                <div className="row g-4 justify-content-center py-3">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="col-lg-5"
                    >
                        <div className="card h-100 border-0" style={{
                            background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
                            borderRadius: '0.75rem',
                            boxShadow: '0 10px 20px rgba(79, 70, 229, 0.15)'
                        }}>
                            <div className="card-body p-4">
                                <h3 className="h4 fw-bold text-white mb-3">Contact Information</h3>
                                <div className="d-flex flex-column gap-3">
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="d-flex align-items-center"
                                    >
                                        <Mail className="flex-shrink-0 me-2 text-white" style={{ width: '1.25rem', height: '1.25rem' }} />
                                        <div>
                                            <a href="mailto:rameshgoud8850@gmail.com" className="text-white text-decoration-none">
                                                rameshgoud8850@gmail.com
                                            </a>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="d-flex align-items-center"
                                    >
                                        <Phone className="flex-shrink-0 me-2 text-white" style={{ width: '1.25rem', height: '1.25rem' }} />
                                        <div>
                                            <a href="tel:+917569414038" className="text-white text-decoration-none">
                                                +91 7569414038
                                            </a>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="d-flex align-items-center"
                                    >
                                        <MapPin className="flex-shrink-0 me-2 text-white" style={{ width: '1.25rem', height: '1.25rem' }} />
                                        <div>
                                            <span className="text-white">Hyderabad,Telangana,India</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="col-lg-7"
                    >
                        <div className="card h-100 border-0" style={{
                            borderRadius: '0.75rem',
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
                        }}>
                            <div className="card-body p-4">
                                <form onSubmit={onSubmit} className="row g-3">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Name"
                                            name="name"
                                            style={{
                                                borderRadius: '0.5rem',
                                                padding: '0.625rem 1rem',
                                                border: '1px solid #e5e7eb'
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Your Email"
                                            name="email"
                                            style={{
                                                borderRadius: '0.5rem',
                                                padding: '0.625rem 1rem',
                                                border: '1px solid #e5e7eb'
                                            }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Subject"
                                            name="subject"
                                            style={{
                                                borderRadius: '0.5rem',
                                                padding: '0.625rem 1rem',
                                                border: '1px solid #e5e7eb'
                                            }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <textarea
                                            className="form-control"
                                            placeholder="Your Message"
                                            name="message"
                                            style={{
                                                height: '120px',
                                                borderRadius: '0.5rem',
                                                padding: '0.625rem 1rem',
                                                border: '1px solid #e5e7eb',
                                                resize: 'none'
                                            }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <button
                                            type="submit"
                                            className="btn d-flex align-items-center gap-2"
                                            style={{
                                                backgroundColor: '#4F46E5',
                                                color: '#fff',
                                                borderRadius: '0.5rem',
                                                padding: '0.625rem 1.25rem',
                                                transition: 'all 0.3s ease'
                                            }}
                                            disabled={loading}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.backgroundColor = '#4338CA';
                                                e.currentTarget.style.transform = 'translateY(-1px)';
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.backgroundColor = '#4F46E5';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            }}
                                        >
                                            {loading ? "Sending..." : <><Send size={18} /><span>Send Message</span></>}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Toast Container for displaying toasts */}
            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop />
        </section>
    );
}