import FotoGer from "../assets/foto de presentacion.jpeg"

export const HeroSection = () => {
    const stack=[
        "React",
        "JavaScript",
        "CSS3",
        "Tailwind CSS",
        "HTML5",
        "Responsive Design",
        "TanStack Query",
        "REST APIs",
    ]
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 text-white px-4 py-12 md:py-0 md:px-6">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">

                {/* IMAGEN - Mobile first */}
                <div className="flex justify-center order-1 md:order-2 w-full">
                    <div className="relative w-40 h-40 md:w-80 md:h-80 float">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 md:border-4 border-cyan-500/70 neon-box group transition duration-300 hover:scale-105">
                            <img
                                src={FotoGer}
                                alt="Foto de Gerardo"
                                className="w-full h-full object-cover transition duration-500 ease-out group-hover:scale-110 brightness-110 contrast-125"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-20"></div>
                        </div>
                    </div>
                </div>

                {/* TEXTO - Mobile first */}
                <div className="order-2 md:order-1 w-full fade-up">
                    <div className="mb-2 md:mb-4">
                        <span className="inline-block text-xs md:text-sm font-mono text-cyan-400 mb-2 opacity-80">
                            &lt; FRONTEND DEVELOPER &gt;
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-6xl font-black mb-3 md:mb-4 leading-tight">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent neon-text">
                            Gerardo
                        </span>
                        {" "}👨‍💻
                    </h1>

                    <h2 className="text-lg md:text-2xl mb-4 md:mb-6 text-gray-400 font-light">
                        Building beautiful, responsive web interfaces
                    </h2>

                    <p className="mb-6 md:mb-8 text-sm md:text-base text-gray-400 leading-relaxed">
                        Frontend Developer passionate about creating modern, functional, and scalable user interfaces.
                        Specialized in React and JavaScript with expertise in API integration and responsive design.
                        Building efficient, performant applications with focus on user experience.
                        Also have knowledge of backend technologies to understand the full development lifecycle.
                    </p>

                    {/* TECH STACK */}
                    <div className="mb-8 md:mb-10">
                        <p className="text-xs md:text-sm text-gray-500 font-mono mb-3 opacity-70">
                            [ TECH STACK ]
                        </p>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {stack.map((tech, i) => (
                                <span
                                    key={tech}
                                    className="px-3 md:px-4 py-1.5 md:py-2 rounded text-xs md:text-sm font-medium
                                    bg-gradient-to-r from-cyan-500/20 to-pink-500/10
                                    text-cyan-300 border border-cyan-500/40
                                    backdrop-blur-md shadow-sm
                                    transition duration-300 ease-out
                                    hover:from-cyan-500/40 hover:to-pink-500/30
                                    hover:text-cyan-200 hover:scale-110 hover:shadow-cyan-500/40 cursor-default
                                    hover:border-cyan-400/70"
                                    style={{animationDelay: `${i * 50}ms`}}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA BUTTON */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                        <a
                            href="#projects"
                            className="px-6 md:px-8 py-2.5 md:py-3 rounded font-semibold text-sm md:text-base
                            bg-gradient-to-r from-cyan-500 to-pink-500 text-gray-950
                            transition duration-300 ease-out
                            hover:shadow-lg hover:scale-105 active:scale-95"
                        >
                            Ver Proyectos →
                        </a>
                        <a
                            href="#contact"
                            className="px-6 md:px-8 py-2.5 md:py-3 rounded font-semibold text-sm md:text-base
                            border-2 border-cyan-500/50 text-cyan-300
                            transition duration-300 ease-out
                            hover:bg-cyan-500/10 hover:border-cyan-400 active:scale-95"
                        >
                            Contacto
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
