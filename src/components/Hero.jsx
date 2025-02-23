import { motion } from 'framer-motion';
import { CiMail } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { LuLinkedin } from "react-icons/lu";

export default function Hero() {
    return (
        <section id="home" className="d-flex min-vh-100 align-items-center justify-content-center bg-light" style={{
            background: "linear-gradient(to bottom right, #eef2ff, #ffffff, #f3e8ff)",
        }}>
            <div className="container text-center py-5">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/images/portfolio_photo2.jpg`}
                        alt="Profile"
                        className="rounded-circle shadow-lg mb-4"
                        style={{ width: "130px", height: "130px", objectFit: "cover" }}
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="fw-bold text-dark display-4"
                >
                    <span className="d-block">Hi, I'm</span>
                    <span className="d-block text-primary">Ramesh Bheemanapally</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-3 mx-auto lead text-muted"
                    style={{ maxWidth: "500px" }}
                >
                    Full Stack Developer
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-4 d-flex justify-content-center gap-3"
                >
                    <a href="https://github.com/ramesh8850" className="text-secondary fs-4">
                        <VscGithubAlt/>
                    </a>
                    <a href="https://www.linkedin.com/in/ramesh-bheemanapally-056a59256/" className="text-secondary fs-4">
                        <LuLinkedin />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&to=rameshgoud8850@gmail.com" className="text-secondary fs-4">
                        <CiMail />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}