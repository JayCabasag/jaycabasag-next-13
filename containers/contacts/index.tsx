"use client"
import { motion } from 'framer-motion'

export default function Contactspage() {
  return (
  <motion.section
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="text-gray-600 body-font relative"
  >
  <div className="container px-5 py-16">
    <div className="flex flex-col text-left w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Me</h1>
      <p className="lg:w-2/3 leading-relaxed">
        Hello! Thank you for visiting my website. 
        If you have any questions or would like to get in touch with me, 
        please fill out the form below and I will get back to you as soon as possible. 
        Alternatively, you can email me directly at jaycabasag1999@gmail.com. I look forward to hearing from you!
      </p>
    </div>
    <div className="w-full text-left">
      <div className="flex flex-wrap -m-2 w-full md:w-1/2">
        <div className="p-2 w-full md:w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input
              type="text" 
              id="name" 
              name="name" 
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-main focus:bg-white focus:ring-1 focus:ring-main text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
            />
          </div>
        </div>
        <div className="p-2 w-full md:w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email" 
              id="email" 
              name="email" 
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-main focus:bg-white focus:ring-1 focus:ring-main text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-main focus:bg-white focus:ring-1 focus:ring-main h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: .2 },
            }}
            whileTap={{ scale: 1 }} 
            className="flex text-white bg-main border-0 py-2 px-8 focus:outline-none hover:bg-main rounded text-lg"
          >
              Send message
          </motion.button>
        </div>
      </div>
    </div>
  </div>
</motion.section>
  )
}
