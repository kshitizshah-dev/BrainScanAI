import React from 'react'
import Content from '../Props/Content'
function Contact() {
  return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-10">
      <section>
        <Content
          title="Contact Us"
          content={`If you have any questions, feedback, or inquiries, feel free to reach out to us. 
          We're here to help you with any technical, academic, or project-related concerns.`}
          disclaimer="This is a demo project. Do not share any sensitive medical information."
          css_change="max-w-2xl mx-auto p-6"
          title_css="text-4xl text-center mb-6"
          content_css="text-center mb-6"
        />
        
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact