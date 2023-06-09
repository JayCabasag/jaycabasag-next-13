import React from 'react'

export default function WorkExperienceCard(
  {
    workedAt,
    workedSince,
    workTitle,
    description,
    buttonLabel
  } : {
    workedAt: string,
    workedSince: string,
    workTitle: string,
    description: string,
    buttonLabel: string
  }
) {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
     <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
       <span className="font-semibold title-font text-gray-700">{workedAt}</span>
       <span className="text-sm text-gray-500">{workedSince}</span>
     </div>
     <div className="md:flex-grow">
       <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{workTitle}</h2>
       <p className="leading-relaxed">{description}</p>
       <a className="text-main inline-flex items-center mt-4 cursor-pointer">{buttonLabel}
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}
