// export default function Agents() {
//     return (
//       <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
//         <h1 className="text-4xl font-bold mb-4">Meet Our AI Agents</h1>
//         <p className="text-lg max-w-2xl text-center">
//           Our AI Agents are tailored to meet various needs, whether it's customer support,
//           automation, or data analysis.
//         </p>
//       </div>
//     );
//   }

export default function Agents() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        Meet Our AI Agents
      </h1>
      <p className="text-lg max-w-2xl text-center mb-12 text-gray-300">
        Our AI Agents are tailored to meet various needs, whether it's customer support,
        automation, or data analysis.
      </p>

      {/* AI Agents in Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Card 1: Customer Support Agent */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 transform">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            🤖 Customer Support Agent
          </h2>
          <p className="text-gray-300">
            Our AI-powered customer support agent provides 24/7 assistance, resolves queries,
            and ensures seamless customer experiences.
          </p>
        </div>

        {/* Card 2: Automation Agent */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 transform">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            ⚡ Automation Agent
          </h2>
          <p className="text-gray-300">
            Automate repetitive tasks and workflows with our intelligent automation agent,
            saving time and improving efficiency.
          </p>
        </div>

        {/* Card 3: Data Analysis Agent */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 transform">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            📊 Data Analysis Agent
          </h2>
          <p className="text-gray-300">
            Unlock insights from your data with our AI-driven analysis agent, enabling
            smarter decision-making and predictive analytics.
          </p>
        </div>

        {/* Card 4: Sales Agent */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 transform">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            💼 Sales Agent
          </h2>
          <p className="text-gray-300">
            Boost your sales with our AI sales agent, which identifies leads, nurtures
            relationships, and closes deals faster.
          </p>
        </div>

        {/* Card 5: Marketing Agent */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 transform">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            📈 Marketing Agent
          </h2>
          <p className="text-gray-300">
            Optimize your marketing campaigns with our AI marketing agent, which analyzes
            trends and targets the right audience.
          </p>
        </div>

        {/* Card 6: HR Agent */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 transform">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            👩‍💼 HR Agent
          </h2>
          <p className="text-gray-300">
            Streamline HR processes with our AI HR agent, from recruitment to employee
            engagement and performance analysis.
          </p>
        </div>
      </div>
    </div>
  );
}