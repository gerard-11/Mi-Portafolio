import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {TiSocialFacebook} from "react-icons/ti";

export const Header = () => {
    return (
          <header className="flex justify-between bg-blue-400 p-2 border-b border-white max-h-17">
              <div className="ml-5 flex items-center gap-4">
                  <figure className="flex items-center justify-center rounded-full bg-blue-600 text-white font-bold w-12 h-12 text-2xl md:w-16 md:h-16 md:text-4xl shadow-md">
                      G
                  </figure>
                  <div>
                      <h1 className="text-xs md:text-xl font-bold text-gray-800">Gerardo Jesus Rito A.</h1>
                      <h2 className="text-xs md:text-lg text-gray-600">Software Developer</h2>
                  </div>
              </div>
              <nav className=" flex">
                  <ul className=" flex text-xl gap-2 md:gap-5 md:text-2xl mr-2 items-center">
                      <li>
                          <a href="https://www.facebook.com/gerardojesus.ritoanguiano" className="hover:text-black transition-colors " target="_blank">
                              <TiSocialFacebook />
                          </a>

                      </li>
                      <li>
                          <a href="https://www.instagram.com/grrdrito11/" className="hover:text-black transition-colors" target="_blank">
                              <FaInstagram />
                          </a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/gerardo-jesus-rito-b55831183/" className="hover:text-black transition-colors" target="_blank">
                              <FaLinkedin />
                          </a>

                      </li>
                      <li>
                          <a href="https://github.com/gerard-11" className="hover:text-black transition-colors" target="_blank">
                              <FaGithub />
                          </a>

                      </li>
                  </ul>
              </nav>

          </header>


    )
}