// export default function Contact() {
//     return (
//       <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
//         <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
//         <p className="text-lg max-w-2xl text-center">
//           Have questions? Get in touch with us and discover how AI Agentia can help you.
//         </p>
//       </div>
//     );
//   }

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        Contact Us
      </h1>
      <p className="text-lg max-w-2xl text-center mb-12 text-gray-300">
        Have questions? Get in touch with us and discover how AI Agentia can help you.
      </p>

      {/* Contact Form */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl hover:shadow-xl transition-shadow duration-300">
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="How can we help you?"
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Additional Contact Information */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Or Reach Us Directly
        </h2>
        <div className="space-y-2 text-gray-300">
          <p>📧 Email: support@aiagentia.com</p>
          <p>📞 Phone: +1 (123) 456-7890</p>
          <p>📍 Address: 123 AI Street, Tech City, World</p>
        </div>
      </div>
    </div>
  );
}