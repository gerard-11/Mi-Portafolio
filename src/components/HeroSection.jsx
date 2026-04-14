export const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Hola, soy <span className="text-blue-400">Gerardo</span> 👋
                    </h1>

                    <h2 className="text-lg md:text-2xl mb-6 text-gray-300">
                        Desarrollador Web Fullstack Junior
                    </h2>

                    <p className="mb-6 text-gray-400 leading-relaxed">
                        Soy un desarrollador autodidacta enfocado en crear aplicaciones web
                        funcionales y modernas. Me especializo en JavaScript, React y desarrollo
                        frontend, con interés en backend y arquitectura de software.
                    </p>

                    {/* STACK */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">JavaScript</span>
                        <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">React</span>
                        <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">CSS</span>
                        <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">HTML</span>
                        <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">Node.js</span>
                        <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">TanStack Query</span>
                        <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">API REST</span>
                        <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">JWT</span>
                    </div>
                    
                    <div className="flex gap-4">
                        <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg font-semibold">
                            Ver proyectos
                        </button>

                        <button className="border border-blue-400 px-5 py-2 rounded-lg font-semibold hover:bg-blue-400 hover:text-black">
                            Contacto
                        </button>
                    </div>
                </div>


                <div className="flex justify-center">
                    <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
                        <img
                            src="/src/assets/Foto Ger.jpeg"
                            alt="Foto de Gerardo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>

    )
}