export const HeroSection = () => {
    const stack=[
        "JavaScript",
        "React",
        "CSS",
        "HTML",
        "Node.js",
        "TanStack Query",
        "API REST",
        "JWT",
    ]
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
                <div className="flex mt-2 md:mb-4 justify-center order-1 md:order-2">
                    <div className="w-40 h-40 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg group transition duration-300 hover:shadow-blue-500/50 hover:scale-105">
                        <img
                            src="/src/assets/foto de presentacion.jpeg"
                            alt="Foto de Gerardo"
                            className="w-full h-full object-cover transition duration-500 ease-out group-hover:scale-110"
                        />
                    </div>
                </div>
                <div className="order-2 md:order-1">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Hola, soy <span className="text-blue-400">Gerardo</span> 👋
                    </h1>
                    <h2 className="text-lg md:text-2xl mb-6 text-gray-300">
                        Desarrollador Web Frontend Junior
                    </h2>
                    <p className="mb-6 text-gray-400 leading-relaxed">
                        Desarrollador web enfocado en crear aplicaciones modernas, funcionales y escalables. Especializado en JavaScript y React, con experiencia integrando APIs y construyendo interfaces eficientes. Interesado en backend, arquitectura de software y automatización con AI workflows.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30
                              backdrop-blur-md shadow-sm
                              transition duration-300 ease-out
                              hover:bg-blue-500 hover:text-white hover:scale-105 hover:shadow-blue-500/40 cursor-default">
                                {tech}
                                </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}