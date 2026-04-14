import Pelis4uFoto from "../assets/pelis4u-app.png"
import BassebalAppFoto from "../assets/baseball-app.png"

export const ProjectsSection = () => {
    return (
        <>
            <h2 className="text-center text-3xl text-gray-500 font-bold mb-4">Mis Proyectos</h2>
            <div className="grid mx-4 my-2 md:grid-cols-2 gap-6">
                <a
                    href="https://pelis4u-project.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-xl overflow-hidden shadow-lg"
                >
                    <div className="relative ">
                        <img
                            src={Pelis4uFoto}
                            alt="Proyecto Pelis4U"
                            className="w-full h-60 object-cover group-hover:scale-105 transition duration-300"
                        />

                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                              <span className="text-white font-bold text-lg">
                                Ver proyecto
                              </span>
                        </div>
                    </div>
                </a>

                <a
                    href="https://pro-baseball-analytics.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-xl overflow-hidden shadow-lg"
                >
                    <div className="relative">
                        <img
                            src="/src/assets/baseball-app.png"
                            alt="Proyecto Baseball Analytics"
                            className="w-full h-60 object-cover group-hover:scale-105 transition duration-300"
                        />

                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                              <span className="text-white font-bold text-lg">
                                Ver proyecto
                              </span>
                        </div>
                    </div>
                </a>

            </div>

        </>


    )
}