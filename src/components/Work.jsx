import React from "react";

const Work = () => {
  const project = [
    { image: "../assets/tailwind.png", name: "Tailwind Project" },
  ];

  return (
    <div
      name="work"
      className=" w-full h-auto sm-h-screen bg-[#0a192f] text-gray-300 "
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-1 gap-8">
          <div className=" pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Work
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid  sm:grid-cols-2 gap-8 px-4">
          <div className="text-[15px] font-semibold border border-gray-700 shadow-lg p-4">
            <p className="border-b-2 border-pink-600  text-orange-300 font-bold cursor-default">
              IRNet –Cancer Treatment Prediction Tool
            </p>
            <p className="text-sm sm:text-sm">
              <ul>
                <li className="pt-3 cursor-default">
                  <span className="font-extrabold text-green-400">
                    Overview:{" "}
                  </span>
                  Developed a responsive and scalable application with ReactJS,
                  utilizing React Hooks, Context API, and React Router for an
                  optimized UI. Implemented advanced state management with Redux
                  and integrated APIs using Axios. Built the backend with
                  Node.js and Express.js, leveraging PostgreSQL for data
                  management. Enhanced server performance with asynchronous
                  programming and automated deployment through Jenkins, GitLab
                  CI/CD, Docker, and Kubernetes for consistent, scalable
                  releases.
                </li>
                <li className="pt-2 cursor-default">
                  <span className="font-extrabold text-green-400">
                    Technologies:
                  </span>{" "}
                  ReactJS, Node.js, Express.js, PostgreSQL, Redux, Axios,
                  Jenkins, GitLab CI/CD, Docker, Kubernetes
                </li>
              </ul>
            </p>
          </div>
          <div className="text-[15px] font-semibold border border-gray-700 shadow-lg p-4">
            <p className="border-b-2 border-pink-600 text-orange-300 font-bold cursor-default">
              FatPlants
            </p>
            <p className="text-sm sm:text-sm">
              <ul>
                <li className="pt-3 cursor-default">
                  <span className="font-extrabold text-green-400">
                    Overview:{" "}
                  </span>
                  Fatplants is a web portal that offers analysis and
                  visualization tools for plant fat-related genes, proteins, and
                  metabolism. we used ReactJS to build dynamic and responsive
                  user interfaces, leveraging React Hooks to provide an
                  efficient and interactive user experience. On the server side,
                  I developed robust functionality using Node.js and Express.js,
                  and optimized SQL queries to improve data processing and
                  management efficiency.
                </li>
                <li className="pt-2 cursor-default">
                  <span className="font-extrabold text-green-400">
                    Technologies:
                  </span>{" "}
                  ReactJS, Node.js, Express.js, SQL
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid  sm:grid-cols-1 gap-8 px-4 py-4">
          <div className="text-[15px] font-semibold border border-gray-700 shadow-lg p-4">
            <p className="border-b-2 border-pink-600 text-orange-300 font-bold cursor-default">
              Application Development Analyst
            </p>
            <p className="text-sm sm:text-sm">
              <ul>
                <li className="pt-3 cursor-default">
                  <span className="font-extrabold text-green-400">
                    Overview:{" "}
                  </span>
                  As an Application Development Analyst at Accenture Solutions
                  Private Limited , I optimized API performance with Express.js,
                  enhanced user engagement with real-time features using
                  Socket.io and Node.js, and accelerated release cycles through
                  automated deployment with Git, Jenkins, and Docker. I improved
                  UI components with React and Redux, achieving a 35% increase
                  in conversion rates, and optimized MongoDB interactions for
                  faster query responses. My role also involved implementing
                  security measures, conducting requirement analysis, and
                  following Agile methodologies to ensure efficient project
                  delivery.
                </li>
                <li className="pt-2 cursor-default">
                  <span className="font-extrabold text-green-400">
                    Technologies & Development/Deployment Tools:
                  </span>{" "}
                  React, Redux , Node.js, Express.js, Socket.io , MongoDB,
                  Mongoose , Git, Jenkins, Docker , OAuth2, JWT, Encryption
                  Agile, Scrum
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
