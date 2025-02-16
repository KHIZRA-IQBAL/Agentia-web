// // export default function About() {
// //     return (
// //       <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
// //         <h1 className="text-4xl font-bold mb-4">About AI Agentia</h1>
// //         <p className="text-lg max-w-2xl text-center">
// //           AI Agentia is a platform dedicated to bringing the latest AI-driven solutions
// //           to businesses and individuals. Our AI Agents are designed to automate tasks,
// //           enhance decision-making, and improve efficiency.
// //         </p>
// //       </div>
// //     );
// //   }

// export default function About() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-12">
//       {/* Original Content */}
//       <h1 className="text-4xl font-bold mb-4">About AI Agentia</h1>
//       <p className="text-lg max-w-2xl text-center mb-12">
//         AI Agentia is a platform dedicated to bringing the latest AI-driven solutions
//         to businesses and individuals. Our AI Agents are designed to automate tasks,
//         enhance decision-making, and improve efficiency.
//       </p>

//       {/* Additional Content in Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
//         {/* Card 1: What We Do */}
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
//           <p className="text-gray-300">
//             At AI Agentia, we specialize in developing AI-powered tools that streamline
//             operations, reduce costs, and drive innovation. From chatbots to predictive
//             analytics, our solutions are tailored to meet your needs.
//           </p>
//         </div>

//         {/* Card 2: Our Mission */}
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
//           <p className="text-gray-300">
//             Our mission is to democratize AI technology, making it accessible to businesses
//             of all sizes. We believe in empowering organizations with intelligent tools
//             that foster growth and competitiveness.
//           </p>
//         </div>

//         {/* Card 3: Core Values */}
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
//           <ul className="list-disc list-inside text-gray-300">
//             <li>Innovation: Constantly pushing the boundaries of AI.</li>
//             <li>Integrity: Transparent and ethical AI practices.</li>
//             <li>Customer-Centric: Solutions tailored to your needs.</li>
//             <li>Collaboration: Working together to achieve success.</li>
//           </ul>
//         </div>

//         {/* Card 4: Our Team */}
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
//           <p className="text-gray-300">
//             Our team consists of AI experts, data scientists, and software engineers
//             who are passionate about creating cutting-edge solutions. We are committed
//             to delivering excellence in every project.
//           </p>
//         </div>

//         {/* Card 5: Industries We Serve */}
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold mb-4">Industries We Serve</h2>
//           <ul className="list-disc list-inside text-gray-300">
//             <li>Healthcare</li>
//             <li>Finance</li>
//             <li>Retail</li>
//             <li>Manufacturing</li>
//             <li>Education</li>
//           </ul>
//         </div>

//         {/* Card 6: Why Choose Us */}
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
//           <p className="text-gray-300">
//             We combine technical expertise with a deep understanding of industry challenges.
//             Our solutions are scalable, secure, and designed to deliver measurable results.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-12">
      {/* Original Content */}
      <h1 className="text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        About AI Agentia
      </h1>
      <p className="text-lg max-w-2xl text-center mb-12 text-gray-300">
        AI Agentia is a platform dedicated to bringing the latest AI-driven solutions
        to businesses and individuals. Our AI Agents are designed to automate tasks,
        enhance decision-making, and improve efficiency.
      </p>

      {/* Additional Content in Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Card 1: What We Do */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            What We Do
          </h2>
          <p className="text-gray-300">
            At AI Agentia, we specialize in developing AI-powered tools that streamline
            operations, reduce costs, and drive innovation. From chatbots to predictive
            analytics, our solutions are tailored to meet your needs.
          </p>
        </div>

        {/* Card 2: Our Mission */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Our Mission
          </h2>
          <p className="text-gray-300">
            Our mission is to democratize AI technology, making it accessible to businesses
            of all sizes. We believe in empowering organizations with intelligent tools
            that foster growth and competitiveness.
          </p>
        </div>

        {/* Card 3: Core Values */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Core Values
          </h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Innovation: Constantly pushing the boundaries of AI.</li>
            <li>Integrity: Transparent and ethical AI practices.</li>
            <li>Customer-Centric: Solutions tailored to your needs.</li>
            <li>Collaboration: Working together to achieve success.</li>
          </ul>
        </div>

        {/* Card 4: Our Team */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Our Team
          </h2>
          <p className="text-gray-300">
            Our team consists of AI experts, data scientists, and software engineers
            who are passionate about creating cutting-edge solutions. We are committed
            to delivering excellence in every project.
          </p>
        </div>

        {/* Card 5: Industries We Serve */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Industries We Serve
          </h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Healthcare</li>
            <li>Finance</li>
            <li>Retail</li>
            <li>Manufacturing</li>
            <li>Education</li>
          </ul>
        </div>

        {/* Card 6: Why Choose Us */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Why Choose Us
          </h2>
          <p className="text-gray-300">
            We combine technical expertise with a deep understanding of industry challenges.
            Our solutions are scalable, secure, and designed to deliver measurable results.
          </p>
        </div>
      </div>
    </div>
  );
}