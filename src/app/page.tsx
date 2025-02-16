// "use client";
// import Link from 'next/link';
// import Navbar from '../components/Navbar';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white flex flex-col items-center justify-center">
//       <Navbar />
//       <h1 className="text-5xl font-bold mb-6 text-center animate-fade-in">
//         Welcome to AI Agentia
//       </h1>
//       <li className="text-lg mb-4 text-center max-w-2xl">
//         Discover the power of AI Agents designed to automate and enhance your workflow.
//       </li>
//       <Link href="/agents">
//         <p className="px-6 py-3 bg-pink-600 hover:bg-pink-500 transition rounded-lg text-lg font-medium">
//           Explore AI Agents
//         </p>
//       </Link>

//       {/* Simple CSS animation */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(-50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fadeIn 0.8s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white flex flex-col items-center justify-center">
      <Navbar />
      <div className="text-center">
        {/* Heading with Animation */}
        <h1 className="text-5xl font-bold mb-6 text-center animate-fade-in">
          Welcome to AI Agentia
        </h1>
        <p className="text-lg mb-8 text-center max-w-2xl text-gray-300">
          Discover the power of AI Agents designed to automate and enhance your workflow.
        </p>

        {/* Call-to-Action Button */}
        <Link href="/agents">
          <p className="px-6 py-3 bg-pink-600 hover:bg-pink-500 transition rounded-lg text-lg font-medium">
            Explore AI Agents
          </p>
        </Link>
      </div>

      {/* Additional Content */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Card 1: Why Choose Us */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 transform">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Why Choose Us?
          </h2>
          <p className="text-gray-300">
            We combine cutting-edge AI technology with industry expertise to deliver
            solutions that drive real results for your business.
          </p>
        </div>

        {/* Card 2: Our Expertise */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 transform">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Our Expertise
          </h2>
          <p className="text-gray-300">
            From chatbots to machine learning models, our team specializes in creating
            intelligent solutions tailored to your needs.
          </p>
        </div>

        {/* Card 3: Get Started */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 transform">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Get Started
          </h2>
          <p className="text-gray-300">
            Ready to transform your business? Contact us today to learn how AI Agentia
            can help you achieve your goals.
          </p>
        </div>
      </div>

      {/* Simple CSS animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}