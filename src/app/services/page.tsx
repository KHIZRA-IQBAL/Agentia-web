// export default function Services() {
//     return (
//       <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
//         <h1 className="text-4xl font-bold mb-4">Our AI Services</h1>
//         <ul className="text-lg max-w-2xl text-center">
//           <li>🤖 AI Chatbots</li>
//           <li>📊 Data Analytics</li>
//           <li>⚡ Process Automation</li>
//           <li>🧠 Machine Learning Models</li>
//         </ul>
//       </div>
//     );
//   }

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        Our AI Services
      </h1>

      {/* Services in Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* Card 1: AI Chatbots */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 transform">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            🤖 AI Chatbots
          </h2>
          <p className="text-gray-300">
            Build intelligent chatbots that enhance customer engagement, automate support,
            and streamline communication for your business.
          </p>
        </div>

        {/* Card 2: Data Analytics */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 transform">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            📊 Data Analytics
          </h2>
          <p className="text-gray-300">
            Leverage advanced data analytics to uncover insights, predict trends, and make
            data-driven decisions for your organization.
          </p>
        </div>

        {/* Card 3: Process Automation */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 transform">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            ⚡ Process Automation
          </h2>
          <p className="text-gray-300">
            Automate repetitive tasks and workflows to improve efficiency, reduce errors,
            and free up your team for more strategic work.
          </p>
        </div>

        {/* Card 4: Machine Learning Models */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 transform">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            🧠 Machine Learning Models
          </h2>
          <p className="text-gray-300">
            Develop custom machine learning models tailored to your business needs, enabling
            predictive analytics and intelligent decision-making.
          </p>
        </div>
      </div>
    </div>
  );
}