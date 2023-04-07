import React from 'react'

export default function LanguagesCard() {
  return (
    <>
        <p className="leading-relaxed mb-4">
        I am a software engineer with experience in several programming languages. Throughout my career, I have worked with Java, C#, Python, Go, and more, gaining valuable experience in different paradigms and approaches to programming.
        </p>
        <p className="leading-relaxed mb-4">
        However, I have found my true passion in web development and the languages associated with it. Specifically, I have dedicated a significant amount of time to mastering HTML, CSS, and JavaScript, as well as popular front-end frameworks like React.
        </p>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Confident to work with </span>
          <span className="ml-auto text-gray-900">HTML CSS and JavaScript</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Frontend Languages/Frameworks</span>
          <span className="ml-auto text-gray-900">React JS</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Backend Languages/Frameworks</span>
          <span className="ml-auto text-gray-900">Node JS(Web api) and Golang(Micro-services)</span>
        </div>
        </>
  )
}
