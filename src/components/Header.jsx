import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 flex justify-between items-center bg-gradient-to-b from-gray-950 to-transparent backdrop-blur-sm px-4 py-3 md:px-6 md:py-4 border-b border-cyan-500/30">

            <div className="flex items-center gap-2 md:gap-3 min-w-0">
                <div className="flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-magenta-600 text-gray-950 font-semibold w-9 h-9 md:w-11 md:h-11 text-xs md:text-sm flex-shrink-0 neon-box
                transition duration-300 hover:scale-110 cursor-pointer">
                    GR
                </div>

                <div className="leading-tight min-w-0">
                    <h1 className="text-xs md:text-sm font-bold text-cyan-400 truncate neon-text">
                        Gerardo Rito
                    </h1>
                    <p className="text-xs text-gray-500">
                        Frontend Developer
                    </p>
                </div>

            </div>

            {/* RIGHT */}
            <nav className="flex-shrink-0">
                <ul className="flex items-center gap-3 md:gap-4 text-base md:text-lg text-gray-400">

                    <li>
                        <a
                            href="https://www.facebook.com/gerardojesus.ritoanguiano"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition duration-300 hover:text-cyan-400 hover:scale-110 hover:drop-shadow-lg"
                            style={{textShadow: 'none'}}
                        >
                            <TiSocialFacebook />
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.instagram.com/grrdrito11/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition duration-300 hover:text-pink-500 hover:scale-110 hover:drop-shadow-lg"
                        >
                            <FaInstagram />
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.linkedin.com/in/gerardo-jesus-rito-b55831183/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition duration-300 hover:text-cyan-400 hover:scale-110 hover:drop-shadow-lg"
                        >
                            <FaLinkedin />
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://github.com/gerard-11"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition duration-300 hover:text-cyan-300 hover:scale-110 hover:drop-shadow-lg"
                        >
                            <FaGithub />
                        </a>
                    </li>

                </ul>
            </nav>

        </header>
    );
};