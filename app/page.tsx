import HeroPatterns from "@/components/HeroPatterns";
import HeroText from "@/components/HeroText";
import Image from "next/image";
import {
    SiX,
    SiLinkedin,
    SiGithub,
    SiInstagram
} from 'react-icons/si';


const projects = [
    {
        "id": 1,
        "name": "Wabber Flow",
        "image": "/wabberflow.jpg",
        "url": "https://github.com/firdausa7/wabberflow",
        "description": "Comprehensive water network management dashboard for monitoring zones, meters, and customers.",
    },
    {
        "id": 2,
        "name": "MediAlert",
        "image": "/medialert-new.png",
        "url": "https://medialert.vercel.app/",
        "description": "Intelligent medication reminder system with advanced scheduling, dosage tracking, and health monitoring capabilities.",
    },
    {
        "id": 3,
        "name": "Leap Innovations",
        "image": "/qleap-drivers.png",
        "url": "https://qleap.co.ke",
        "description": "Transforming logistics for modern business with real-time tracking, intelligent routing, and seamless fleet management.",
    },
    {
        "id": 4,
        "name": "PitchSync",
        "image": "/pitchsync-new.png",
        "url": "https://pitchsync.vercel.app",
        "description": "The most trusted platform for authentic influencer marketing, connecting creators with brands to drive real results.",
    },
]

export default function Home() {
    return (
        <div className="flex flex-col w-full">
            {/* Home Section */}
            <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 md:px-12">
                <HeroPatterns />

                <div className="container mx-auto relative z-10 grid grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center min-h-[80vh] py-20 lg:py-0">
                    {/* Hero Content */}
                    <div className="relative z-10 flex flex-col items-start text-left space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                        <h1 className="text-6xl sm:text-5xl md:text-7xl lg:text-8xl text-white tracking-wide leading-[0.9] text-foreground transition-colors duration-500 inline-flex flex-col items-center"
                            style={{ fontFamily: 'var(--font-bebas-neue)' }}>
                            <span>FIRDAUSA</span>
                            <span>SALAT</span>
                        </h1>

                        <HeroText />
                    </div>
                </div>
            </section>



            {/* About Section */}
            <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-28 md:py-36 bg-[#fdfaf1] dark:bg-[#0a0a0a]">
                <div className="max-w-2xl w-full">
                    <h2 className="text-4xl md:text-5xl font-bold mb-14 md:mb-16 text-center text-[#171717] dark:text-[#ededed] tracking-tight">About Me</h2>
                    <div className="text-base md:text-lg text-[#4a4a4a] dark:text-[#a0a0a0] space-y-6 md:space-y-8 text-center leading-[1.9]">

                        <p>
                            Hi, I’m Firdausa Dahir Salat — a Software Engineer, Frontend Specialist, Generative AI Enthusiast, and Tech Entrepreneur based in Nairobi, Kenya.
                        </p>


                        <p>

                            I specialize in building modern, responsive, and user-focused web applications using technologies like React, JavaScript, Tailwind CSS, and modern frontend frameworks. I focus on creating clean, scalable interfaces and transforming ideas into real, functional digital products.
                        </p>


                        <p>
                            I am also a proud Fellow at Tech4Dev in the Women Techsters Fellowship, where I am strengthening my software engineering skills, collaborating with developers across Africa, and building impactful technology solutions.
                        </p>

                        <p>
                            In addition, I have developed skills in Generative AI, including working with AI tools and APIs to build intelligent features such as AI assistants, smart scanners, automated content generation, and AI-powered user experiences. I am passionate about integrating AI into real-world applications to make technology smarter and more useful.
                        </p>

                        <p>
                            I have worked on multiple projects ranging from web applications and AI-powered tools to startup MVP platforms. I am also the founder of Guardian Hub, a smart safety technology initiative focused on protecting children through discreet tracking solutions.

                            I am driven by continuous learning, innovation, and building scalable solutions that create meaningful impact across Africa and beyond.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-[70vh] flex flex-col items-center justify-center px-6 md:px-12 py-28 md:py-36 bg-[#fdfaf1] dark:bg-[#0a0a0a]">
                <h2 className="text-4xl md:text-5xl font-bold mb-14 md:mb-16 text-[#171717] dark:text-[#ededed] tracking-tight">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl w-full">

                    {projects.map((project: any) => (
                        <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-[#e5e0d5] dark:border-[#2a2a2a] bg-white dark:bg-[#141414] shadow-sm hover:border-accent hover:shadow-md transition-all group overflow-hidden flex flex-col">
                            {project.image && (
                                <div className="relative w-full h-52 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-[#fdfaf1]/30 dark:bg-transparent"></div>
                                </div>
                            )}
                            <div className="p-7 md:p-8 flex flex-col gap-3">
                                <h3 className="text-xl font-bold text-[#171717] dark:text-[#ededed] group-hover:text-accent transition-colors">{project.name}</h3>
                                <p className="text-sm md:text-base text-[#4a4a4a] dark:text-[#a0a0a0] leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-28 md:py-36 bg-[#f5f1e8] dark:bg-[#0f0f0f]">
                <div className="max-w-3xl w-full">
                    <h2 className="text-4xl md:text-5xl font-bold mb-14 md:mb-16 text-[#171717] dark:text-[#ededed] tracking-tight">Experience</h2>

                    <div className="rounded-2xl border border-[#e5e0d5] dark:border-[#2a2a2a] bg-white dark:bg-[#141414] overflow-hidden">
                        {/* Card Header */}
                        <div className="p-8 md:p-10 border-b border-[#e5e0d5] dark:border-[#2a2a2a]">
                            <div className="flex flex-col gap-2">
                                <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold">Founder & Marketing Strategist</span>
                                <a href="https://www.instagram.com/guardianhubke" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl font-bold text-[#171717] dark:text-[#ededed] hover:text-accent transition-colors">Guardian Hub</a>
                                <p className="text-sm text-[#6b6b6b] dark:text-[#808080] mt-1">Nairobi & Mombasa, Kenya</p>
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-8 md:p-10 flex flex-col gap-10">
                            {/* Description */}
                            <p className="text-base md:text-lg text-[#4a4a4a] dark:text-[#a0a0a0] leading-relaxed">
                                Guardian Hub is a child safety startup providing discreet smart tracking tags designed to help parents monitor their children safely. I developed and executed targeted marketing strategies to introduce and promote Guardian Hub to parents and schools across Nairobi and Mombasa, building trust and positioning the brand as a reliable child safety solution.
                            </p>

                            {/* Responsibilities */}
                            <div>
                                <h4 className="text-sm uppercase tracking-[0.15em] font-bold text-[#171717] dark:text-[#ededed] mb-5">Key Responsibilities</h4>
                                <ul className="flex flex-col gap-3">
                                    {[
                                        "Developed and executed social media marketing campaigns targeting parents in Nairobi and Mombasa",
                                        "Created educational and promotional content focused on child safety awareness",
                                        "Positioned Guardian Hub as a trusted safety solution for families and schools",
                                        "Engaged directly with parents through Instagram, WhatsApp, and community groups",
                                        "Built brand awareness and generated customer interest through organic marketing strategies",
                                        "Coordinated local outreach initiatives around schools and parent communities",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-[#4a4a4a] dark:text-[#a0a0a0] text-sm md:text-base leading-relaxed">
                                            <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Channels */}
                            <div>
                                <h4 className="text-sm uppercase tracking-[0.15em] font-bold text-[#171717] dark:text-[#ededed] mb-5">Marketing Channels</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Instagram", "WhatsApp", "Facebook", "Community Outreach", "Direct Parent Engagement"].map((channel) => (
                                        <span key={channel} className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#fdfaf1] dark:bg-[#1e1e1e] border border-[#e5e0d5] dark:border-[#2a2a2a] text-[#4a4a4a] dark:text-[#a0a0a0] tracking-wide">
                                            {channel}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Impact */}
                            <div className="rounded-xl bg-accent/8 dark:bg-accent/10 border border-accent/20 p-6">
                                <h4 className="text-sm uppercase tracking-[0.15em] font-bold text-accent mb-3">Impact</h4>
                                <p className="text-sm md:text-base text-[#4a4a4a] dark:text-[#a0a0a0] leading-relaxed">
                                    Successfully introduced Guardian Hub to local parent communities, built brand awareness, and established early customer trust through targeted, community-focused marketing strategies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="min-h-[60vh] flex flex-col items-center justify-center px-6 md:px-12 py-28 md:py-36 bg-[#fdfaf1] dark:bg-[#0a0a0a]">
                <div className="max-w-2xl w-full text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tight text-[#171717] dark:text-[#ededed]">Get in touch</h2>
                    <p className="text-lg md:text-xl text-[#4a4a4a] dark:text-[#a0a0a0] mb-16 md:mb-20 max-w-xl mx-auto leading-relaxed">
                        If you want to talk to me about a project we should collaborate on or even just say hi.
                    </p>
                    <div className="flex flex-col items-center gap-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#6b6b6b] dark:text-[#808080] font-bold">Available for new opportunities</p>
                        <a
                            href="info@firdausa.dev"
                            className="text-2xl md:text-3xl font-bold text-accent hover:text-black dark:hover:text-white transition-colors break-all underline decoration-accent/30 decoration-4 underline-offset-8"
                        >info@firdausa.dev</a>
                    </div>
                </div>
            </section>
        </div>

    );
}
