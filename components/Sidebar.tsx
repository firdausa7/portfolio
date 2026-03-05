"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from './ThemeToggle';
import {
    Menu,
    X,
    Home,
    User,
    Code,
    Mail,
    Briefcase,
    Linkedin,
    Github,
    Instagram,
    Download
} from 'lucide-react';

export default function Sidebar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const toggleDropdown = (label: string) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'experience', 'contact'];

            if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100) {
                setActiveSection('contact');
                return;
            }

            const scrollPosition = window.scrollY + window.innerHeight / 2;
            let current = 'home';
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && scrollPosition >= element.offsetTop) {
                    current = section;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: "#home", label: "Home", id: "home", icon: Home },
        { href: "#about", label: "About", id: "about", icon: User },
        { href: "#projects", label: "My Projects", id: "projects", icon: Code },
        { href: "#experience", label: "Experience", id: "experience", icon: Briefcase },
        { href: "#contact", label: "Contact", id: "contact", icon: Mail },
    ];

    const socialLinks = [
        { href: "https://www.linkedin.com/in/firdausasalat-1714ba385", icon: Linkedin, label: "LinkedIn" },
        { href: "https://github.com/firdausa7", icon: Github, label: "GitHub" },
        { href: "https://www.instagram.com/firdausahh?utm_source=qr", icon: Instagram, label: "Instagram" },
    ];

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={toggleMenu}
                className="fixed top-4 right-4 z-[100] p-3 rounded-full bg-accent text-white md:hidden shadow-lg transition-transform active:scale-95"
                aria-label="Toggle Menu"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar Overlay (Mobile) */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[80] md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={closeMenu}
            />

            {/* Sidebar Container */}
            <aside
                className={`fixed top-0 left-0 bottom-0 w-72 bg-[#050b10] text-sidebar-text z-[90] transition-transform duration-300 md:translate-x-0 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } flex flex-col p-8 overflow-y-auto border-r border-white/5`}
            >
                {/* Profile Section */}
                <div className="flex flex-col items-center mb-10 mt-4">
                    <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl">
                        <Image
                            src="/myhero.jpeg"
                            alt="Firdausa Salat"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-center uppercase text-white">FIRDAUSA SALAT</h2>

                    {/* Social Links */}
                    <div className="flex gap-2 mt-6">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="p-2 rounded-full border border-white/10 hover:bg-accent hover:border-accent transition-all group"
                                    aria-label={social.label}
                                >
                                    <Icon size={16} className="text-zinc-400 group-hover:text-white transition-colors" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-grow">
                    <ul className="space-y-1">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = activeSection === link.id;

                            /** 
                            if (link.children) {
                                return (
                                    <li key={link.label} className="group">
                                        <button
                                            onClick={() => toggleDropdown(link.label)}
                                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 transition-all group"
                                        >
                                            <div className="flex items-center gap-4">
                                                <Icon size={20} className={`${isActive ? 'text-accent' : 'text-zinc-500 group-hover:text-accent'} transition-colors`} />
                                                <span className={`font-medium ${isActive ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`}>{link.label}</span>
                                            </div>
                                            <ChevronDown size={14} className={`text-zinc-500 transition-transform duration-300 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ${openDropdown === link.label ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                                            <ul className="pl-12 space-y-1 py-1">
                                                {link.children.map((child) => (
                                                    <li key={child.label}>
                                                        <Link
                                                            href={child.href}
                                                            onClick={closeMenu}
                                                            className="block py-2 text-sm text-zinc-500 hover:text-accent transition-colors"
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                );
                            }
                            */

                            return (
                                <li key={link.id}>
                                    <Link
                                        href={link.href}
                                        onClick={closeMenu}
                                        className={`flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group relative ${isActive ? 'text-white' : 'text-zinc-400'
                                            }`}
                                    >
                                        {isActive && (
                                            <div className="absolute left-0 w-1 h-6 bg-accent rounded-full -translate-x-8"></div>
                                        )}
                                        <Icon size={20} className={`${isActive ? 'text-accent' : 'text-zinc-500 group-hover:text-accent'} transition-colors`} />
                                        <span className={`font-medium group-hover:text-white`}>{link.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Download Resume */}
                <a
                    href="/resume.pdf"
                    download="Firdausa_Salat_Resume.pdf"
                    className="mt-8 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-accent/40 text-accent hover:bg-accent hover:text-white transition-all text-sm font-semibold"
                >
                    <Download size={16} />
                    Download Resume
                </a>

                {/* Footer Section in Sidebar */}
                <div className="mt-6 pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="text-[10px] text-zinc-600 font-medium tracking-wide uppercase">
                        <p>&copy; {new Date().getFullYear()} Firdausa Salat</p>
                    </div>
                    <ThemeToggle />
                </div>
            </aside>
        </>
    );
}

