"use client"
import { motion } from 'framer-motion'

import Image from "next/image"

export default function WorksCard({
  title,
  description,
  buttonText,
  programmingLanguages,
  hasRepo = false,
  repo = ''
} : { 
  title: string,
  description: string,
  buttonText: string,
  programmingLanguages: string[],
  hasRepo?: boolean,
  repo?: string
}) {

  return (
    <div
      className="container flex flex-wrap px-5 pt-16 mx-auto items-center">
      <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{title}</h1>
        <p className="leading-relaxed text-base">
           {description}
        </p>
        <div className="flex items-center h-auto mt-4 gap-4">
          <motion.a
            whileHover={{
              scale: 1.1,
              transition: { duration: .1 },
            }}
            whileTap={{ scale: 1 }}
            className="text-main inline-flex items-center cursor-pointer">
              {buttonText}
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </motion.a>
          {hasRepo && (
            <a
              href={repo}
              className="text-main inline-flex items-center cursor-pointer"
              target='_blank'
            >
              <Image 
                src={'/assets/github-icon.svg'}
                width={26}
                height={26}
                alt='github-icon'
              />
          </a>
          )}
        </div>
      </div>
      <div className="flex flex-col md:w-1/2 md:pl-12">
        <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">Programming languages and technologies</h2>
        <nav className="flex flex-wrap list-none -mb-1">
          {programmingLanguages.map((language: string, index: number)=>{
            return (
             <li className="lg:w-1/3 mb-1 w-1/2" key={index}>
                <a className="text-gray-600 hover:text-gray-800">{language}</a>
              </li>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
