import { FaCode, FaDatabase, FaTools, FaServer } from "react-icons/fa"

export const SkillsSection = () => {
    const skillCategories = [
        {
            icon: FaCode,
            title: "Frontend Expertise",
            skills: ["React", "Next.js", "JavaScript ES6+", "CSS3", "Tailwind CSS", "Responsive Design", "Component Architecture", "Web Performance"]
        },
        {
            icon: FaServer,
            title: "Backend & APIs",
            skills: ["Node.js", "Express", "REST APIs", "JWT Auth", "API Integration", "Data Fetching"]
        },
        {
            icon: FaDatabase,
            title: "Data & Databases",
            skills: ["PostgreSQL", "Prisma ORM", "TanStack Query", "State Management", "Data Modeling"]
        },
        {
            icon: FaTools,
            title: "Modern Tools & AI",
            skills: ["Git/GitHub", "Vite", "Docker", "Vercel", "AI-Assisted Coding", "Dev Automation"]
        },
    ]

    return (
        <section className="py-12 md:py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">

                {/* HEADER */}
                <div className="mb-12 md:mb-16 text-center fade-up">
                    <span className="inline-block text-xs md:text-sm font-mono text-cyan-500 mb-3 opacity-80">
                        [ 02. SKILLS ]
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black mb-4">
                        <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                            Technical Expertise
                        </span>
                    </h2>
                </div>

                {/* SKILLS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {skillCategories.map((category, idx) => {
                        const Icon = category.icon
                        return (
                            <div
                                key={category.title}
                                className="fade-up p-5 md:p-6 bg-gray-900/50 backdrop-blur border border-cyan-500/20 rounded-lg
                                transition duration-300 hover:border-cyan-500/70 hover:bg-gray-900/80 neon-box
                                group cursor-pointer"
                                style={{animationDelay: `${idx * 100}ms`}}
                            >
                                <div className="mb-4 text-2xl md:text-3xl text-cyan-400 transition duration-300 group-hover:scale-110 group-hover:text-pink-500">
                                    <Icon />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-4 text-cyan-300">
                                    {category.title}
                                </h3>
                                <ul className="space-y-2">
                                    {category.skills.map((skill) => (
                                        <li key={skill} className="text-xs md:text-sm text-gray-400 flex items-start gap-2 transition duration-300 group-hover:text-gray-300">
                                            <span className="text-cyan-500 mt-1 flex-shrink-0">›</span>
                                            <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
