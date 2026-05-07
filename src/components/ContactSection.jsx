import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

export const ContactSection = () => {
    return (
        <section id="contact" className="py-12 md:py-20 bg-gradient-to-b from-gray-950 to-gray-900 px-4 md:px-6">
            <div className="max-w-4xl mx-auto">

                {/* HEADER */}
                <div className="mb-10 md:mb-16 text-center fade-up">
                    <span className="inline-block text-xs md:text-sm font-mono text-pink-500 mb-3 opacity-80">
                        [ 04. CONTACT ]
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                            Let's Build Something
                        </span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                        Have a project in mind? Let's collaborate and create something amazing.
                    </p>
                </div>

                {/* CONTACT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">

                    {/* EMAIL CARD */}
                    <a
                        href="mailto:grrdrito@gmail.com"
                        className="fade-up p-6 md:p-8 bg-gray-900/50 backdrop-blur border border-cyan-500/20 rounded-lg
                        transition duration-300 hover:border-cyan-500/70 hover:bg-gray-900/80 neon-box
                        flex flex-col items-center text-center group"
                    >
                        <div className="mb-4 text-3xl md:text-4xl text-cyan-400 transition duration-300 group-hover:scale-110 group-hover:text-pink-500">
                            <FaEnvelope />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-cyan-300">Email</h3>
                        <p className="text-xs md:text-sm text-gray-400 break-all hover:text-cyan-300 transition">
                            grrdrito@gmail.com
                        </p>
                    </a>

                    {/* CONTACT INFO */}
                    <div className="fade-up p-6 md:p-8 bg-gray-900/50 backdrop-blur border border-cyan-500/20 rounded-lg neon-box">
                        <div className="flex flex-col gap-4">
                            <div className="text-center pb-4 border-b border-cyan-500/20">
                                <p className="text-xs md:text-sm text-gray-500 mb-1">Phone</p>
                                <p className="text-lg md:text-xl font-bold text-cyan-400">221-166-78-95</p>
                            </div>
                            <div className="text-center pb-4 border-b border-cyan-500/20">
                                <div className="text-2xl md:text-3xl font-bold text-pink-500">3+</div>
                                <p className="text-xs md:text-sm text-gray-400">Projects Completed</p>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-cyan-400">100%</div>
                                <p className="text-xs md:text-sm text-gray-400">Quality Focused</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* SOCIAL LINKS */}
                <div className="flex justify-center gap-4 md:gap-6 fade-up">
                    <a
                        href="https://github.com/gerard-11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 md:p-5 bg-gray-900/50 backdrop-blur border border-cyan-500/20 rounded-lg
                        transition duration-300 hover:border-cyan-500/70 hover:bg-gray-900/80 hover:scale-110
                        text-cyan-400 text-xl md:text-2xl neon-box"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/gerardo-jesus-rito-b55831183/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 md:p-5 bg-gray-900/50 backdrop-blur border border-cyan-500/20 rounded-lg
                        transition duration-300 hover:border-cyan-500/70 hover:bg-gray-900/80 hover:scale-110
                        text-cyan-400 text-xl md:text-2xl neon-box"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://www.instagram.com/grrdrito11/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 md:p-5 bg-gray-900/50 backdrop-blur border border-cyan-500/20 rounded-lg
                        transition duration-300 hover:border-cyan-500/70 hover:bg-gray-900/80 hover:scale-110
                        text-cyan-400 text-xl md:text-2xl neon-box"
                    >
                        <FaInstagram />
                    </a>
                </div>

                {/* FOOTER */}
                <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-cyan-500/20 text-center fade-up">
                    <p className="text-xs md:text-sm text-gray-500 font-mono">
                        © 2026 Gerardo J. Rito • Crafted with code and passion
                    </p>
                </div>

            </div>
        </section>
    )
}
