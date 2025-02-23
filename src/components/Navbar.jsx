import React from 'react'

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Resume', href: '#resume' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            style={{
                position: 'fixed',
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                zIndex: 50,
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
            }}
        >
            <div className="container">
                <div
                    className="d-flex align-items-center justify-content-between py-3"
                    style={{ height: '64px' }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        style={{ fontWeight: 'bold', fontSize: '24px', color: '#4F46E5' }}
                    >
                        Portfolio
                    </motion.div>

                    {/* Desktop menu */}
                    <div className="d-none d-md-block">
                        <div className="d-flex gap-3">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-decoration-none"
                                    style={{
                                        color: '#4A5568',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        padding: '8px 12px',
                                        borderRadius: '5px',
                                        transition: 'color 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => (e.target.style.color = '#4F46E5')}
                                    onMouseLeave={(e) => (e.target.style.color = '#4A5568')}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="d-md-none">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="border-0 bg-transparent"
                            style={{ color: '#4A5568' }}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="d-md-none"
                >
                    <div
                        className="bg-white p-3"
                        style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="d-block text-decoration-none"
                                style={{
                                    color: '#4A5568',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    padding: '8px 12px',
                                    borderRadius: '5px',
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={(e) => (e.target.style.color = '#4F46E5')}
                                onMouseLeave={(e) => (e.target.style.color = '#4A5568')}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
