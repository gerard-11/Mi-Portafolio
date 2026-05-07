import { FaRobot, FaLightbulb, FaRocket } from "react-icons/fa"

export const AIHighlight = () => {
    return (
        <section className="py-8 md:py-12 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 px-4 md:px-6 border-y border-cyan-500/20">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

                    {/* AI ASSISTED */}
                    <div className="fade-up p-4 md:p-6 bg-gray-900/50 backdrop-blur border border-cyan-500/20 rounded-lg
                    transition duration-300 hover:border-cyan-500/70 hover:bg-gray-900/80 neon-box
                    flex flex-col items-center text-center">
                        <div className="mb-3 text-2xl md:text-3xl text-cyan-400">
                            <FaRobot />
                        </div>
                        <h3 className="text-sm md:text-base font-bold mb-2 text-cyan-300">
                            AI-Assisted Development
                        </h3>
                        <p className="text-xs md:text-sm text-gray-400">
                            Leveraging AI tools to accelerate coding, improve code quality, and reduce development time
                        </p>
                    </div>

                    {/* MODERN PRACTICES */}
                    <div className="fade-up p-4 md:p-6 bg-gray-900/50 backdrop-blur border border-cyan-500/20 rounded-lg
                    transition duration-300 hover:border-cyan-500/70 hover:bg-gray-900/80 neon-box
                    flex flex-col items-center text-center"
                    style={{animationDelay: '50ms'}}>
                        <div className="mb-3 text-2xl md:text-3xl text-pink-500">
                            <FaLightbulb />
                        </div>
                        <h3 className="text-sm md:text-base font-bold mb-2 text-pink-300">
                            Modern Tech Stack
                        </h3>
                        <p className="text-xs md:text-sm text-gray-400">
                            Always learning latest technologies: React patterns, performance optimization, automation workflows
                        </p>
                    </div>

                    {/* AUTOMATION */}
                    <div className="fade-up p-4 md:p-6 bg-gray-900/50 backdrop-blur border border-cyan-500/20 rounded-lg
                    transition duration-300 hover:border-cyan-500/70 hover:bg-gray-900/80 neon-box
                    flex flex-col items-center text-center"
                    style={{animationDelay: '100ms'}}>
                        <div className="mb-3 text-2xl md:text-3xl text-cyan-400">
                            <FaRocket />
                        </div>
                        <h3 className="text-sm md:text-base font-bold mb-2 text-cyan-300">
                            Automation & Efficiency
                        </h3>
                        <p className="text-xs md:text-sm text-gray-400">
                            Building scalable solutions with focus on workflow automation and developer productivity
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
