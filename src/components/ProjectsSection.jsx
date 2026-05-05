import Pelis4uFoto from "../assets/pelis4u-app.png"
import BassebalAppFoto from "../assets/baseball-app.png"
import SisRef from "../assets/sis-ref.png"

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

                            <p className="p-5">Pelis4U is a fullstack web application focused on movie exploration and management, designed with an emphasis on performance, scalability, and user experience. It allows users to browse content, view real-time details, and manage personalized lists.

                                Built with React, it implements advanced state management, data caching, and API consumption, along with backend integration for token-based authentication. The project follows best development practices, featuring a modular structure and professional version control.</p>
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
                            src={BassebalAppFoto}
                            alt="Proyecto Baseball Analytics"
                            className="w-full h-60 object-cover group-hover:scale-105 transition duration-300"
                        />

                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                              <p className="p-5 ">
                               Baseball App is a web application that consuming data from an external API, allowing users to explore teams and players in real time.

The project includes a lightweight Backend for Frontend to handle communication with the API and resolve constraints such as CORS, while centralizing data access.

Its core feature is the “Dream Team”, where users can build their ideal lineup through an interactive drag-and-drop interface powered by dnd-kit, enabling dynamic player selection and organization. This feature highlights strong frontend state management and user experience design.
                              </p>
                        </div>
                    </div>
                </a>
                <a
                    rel="noopener noreferrer"
                    className="group block rounded-xl overflow-hidden shadow-lg"
                >
                    <div className="relative">
                        <img
                            src={SisRef}
                            alt="Proyecto Baseball Analytics"
                            className="w-full h-60 object-cover group-hover:scale-105 transition duration-300"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                            <p className="p-5 text-sm ">
                                Referral Management App is a web application currently in development, designed to manage sales referrals by allowing users to organize and prioritize leads through a color-based system.

                                The frontend, built with React + Vite, focuses on efficient state management and seamless server synchronization. It uses Zustand for global state and TanStack Query for data fetching, caching, and updates, improving performance and reducing unnecessary requests.

                                The application features a dynamic interface that enhances lead visualization and classification, supporting better decision-making through clear visual indicators
                                The backend is built with NestJS, Prisma ORM, and PostgreSQL, running in Docker containers, providing a solid and scalable foundation.
                            </p>
                        </div>
                    </div>
                </a>
            </div>

        </>


    )
}