import React from 'react'

export default function GoalsCard() {
  return (
    <>
    <p className="leading-relaxed mb-4">
     My goal is to become a fullstack developer and develop proficiency in both frontend and backend development.
     I understand that this will require a significant amount of time and effort, but I am willing to invest the necessary resources to achieve my goal.
    </p>
    <div className="flex border-t border-gray-200 py-2">
      <span className="text-gray-500">Soft Skills</span>
      <span className="ml-auto text-gray-900">Problem-solving, Flexible, Multitasking, and Consistent</span>
    </div>
    <div className="flex border-t border-gray-200 py-2">
      <span className="text-gray-500">Technical Skills</span>
      <span className="ml-auto text-gray-900">Programming</span>
    </div>
    </>
  )
}
