import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 flex justify-between items-center bg-gray-900/80 backdrop-blur-md px-6 py-3 border-b border-gray-700 shadow-md">

            {/* LEFT */}
            <div className="flex items-center gap-3">

                {/* AVATAR */}
                <div className="flex items-center justify-center rounded-full bg-blue-500 text-white font-semibold w-10 h-10 md:w-12 md:h-12 text-sm md:text-base shadow-md
        transition duration-300 hover:scale-110 hover:shadow-blue-500/50 cursor-pointer">
                    GR
                </div>

                {/* NAME */}
                <div className="leading-tight">
                    <h1 className="text-sm md:text-base font-semibold text-white">
                        Gerardo Rito
                    </h1>
                    <p className="text-xs text-gray-400">
                        Fullstack Developer
                    </p>
                </div>

            </div>

            {/* RIGHT */}
            <nav>
                <ul className="flex items-center gap-4 text-lg text-gray-300">

                    <li>
                        <a
                            href="https://www.facebook.com/gerardojesus.ritoanguiano"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition duration-300 hover:text-blue-400 hover:scale-110"
                        >
                            <TiSocialFacebook />
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.instagram.com/grrdrito11/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition duration-300 hover:text-pink-400 hover:scale-110"
                        >
                            <FaInstagram />
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.linkedin.com/in/gerardo-jesus-rito-b55831183/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition duration-300 hover:text-blue-500 hover:scale-110"
                        >
                            <FaLinkedin />
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://github.com/gerard-11"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition duration-300 hover:text-white hover:scale-110"
                        >
                            <FaGithub />
                        </a>
                    </li>

                </ul>
            </nav>

        </header>
    );
};