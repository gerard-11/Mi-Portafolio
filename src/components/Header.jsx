import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {TiSocialFacebook} from "react-icons/ti";

export const Header = () => {
    return (
          <header className="flex justify-between bg-blue-400 p-2 border-b-amber-500 max-h-10">
              <div className="flex items-center ">
                  <h1 className="text-sm md:text-xl font-bold">My Personal projects</h1>
              </div>
              <div className=" flex">
                  <ul className=" flex gap-3 text-xl mr-2 items-center">
                      <li>
                          <a href="https://www.facebook.com/gerardojesus.ritoanguiano" className="hover:text-black transition-colors" target="_blank">
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
              </div>

          </header>


    )
}