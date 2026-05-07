import Pelis4uFoto from "../assets/pelis4u-app.png"
import BassebalAppFoto from "../assets/baseball-app.png"
import SisRef from "../assets/sis-ref.png"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

export const ProjectsSection = () => {
    const projects = [
        {
            title: "Pelis4U",
            image: Pelis4uFoto,
            url: "https://pelis4u-project.vercel.app/",
            github: "https://github.com",
            description: "Fullstack movie exploration app with React, state management, data caching, and token-based auth. Features real-time details, personalized lists, and best development practices.",
            tech: ["React", "Node.js", "JWT", "TanStack Query"],
        },
        {
            title: "Baseball Analytics",
            image: BassebalAppFoto,
            url: "https://pro-baseball-analytics.vercel.app/",
            github: "https://github.com",
            description: "Real-time sports analytics platform with external API integration. Features interactive drag-and-drop Dream Team builder using dnd-kit. Includes BFF pattern for CORS resolution.",
            tech: ["React", "dnd-kit", "API REST", "Vite"],
        },
        {
            title: "Referral Manager",
            image: SisRef,
            url: "#",
            github: "https://github.com",
            description: "[IN DEVELOPMENT] Enterprise referral management system. Full stack with React, Zustand, TanStack Query frontend and NestJS, Prisma, PostgreSQL backend. Docker-based deployment.",
            tech: ["React", "NestJS", "PostgreSQL", "Docker"],
        },
    ]

    return (
        <section id="projects" className="py-12 md:py-20 bg-gradient-to-b from-gray-950 to-gray-900 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">

                <div className="mb-12 md:mb-16 text-center fade-up">
                    <span className="inline-block text-xs md:text-sm font-mono text-pink-500 mb-3 opacity-80">
                        [ 03. PORTFOLIO ]
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                        Cutting-edge applications built with modern tech stack, focusing on performance, scalability, and user experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {projects.map((project, idx) => (
                        <div
                            key={project.title}
                            className="group h-full fade-up"
                            style={{animationDelay: idx * 100 + 'ms'}}
                        >
                            <div className="h-full flex flex-col bg-gray-900/50 backdrop-blur border border-cyan-500/20 rounded-lg overflow-hidden transition duration-300 hover:border-cyan-500/70 hover:bg-gray-900/80 neon-box">

                                <div className="relative overflow-hidden h-48 md:h-56 bg-gray-800">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition duration-500 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-40"></div>

                                    <div className="absolute top-3 right-3 flex flex-wrap gap-1 justify-end">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-xs bg-cyan-500/80 text-gray-950 px-2 py-1 rounded font-semibold">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col p-4 md:p-5">
                                    <h3 className="text-lg md:text-xl font-bold mb-2 text-cyan-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-400 mb-4 leading-relaxed flex-1">
                                        {project.description}
                                    </p>

                                    <div className="flex gap-2 mt-auto pt-4 border-t border-cyan-500/20">
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs md:text-sm bg-gradient-to-r from-cyan-500/20 to-pink-500/10 text-cyan-300 border border-cyan-500/30 rounded transition duration-300 hover:from-cyan-500/40 hover:to-pink-500/20 hover:border-cyan-400/50 hover:text-cyan-200"
                                        >
                                            <FaExternalLinkAlt size={12} /> Live
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs md:text-sm bg-gray-800/50 text-gray-300 border border-gray-700/50 rounded transition duration-300 hover:bg-gray-800 hover:border-gray-600 hover:text-gray-100"
                                        >
                                            <FaGithub size={12} /> Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}