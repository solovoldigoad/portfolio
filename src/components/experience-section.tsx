"use client"

import { useState } from "react"
import { Plus, Minus, MapPin, Globe } from "lucide-react"

export default function ExperienceSection() {
  const [expandedJob, setExpandedJob] = useState<number>(1)

  const toggleExpand = (index: number) => {
    setExpandedJob(expandedJob === index ? -1 : index)
  }

  const jobs = [
    {
      title: "Senior Web developer",
      company: "UpDate",
      period: "23/12/2024- 13/02/2025 ",
      location: "Remote",
      website: "UpDate.in",
      description:
        "Job Portal for Job Seekers and Employers. Developed and maintained a robust job platform with a focus on user experience and functionality.",
      skills: ["React", "NextJS", "TypeScript", "TailwindCSS"],
    },
    {
      title: "Digitl Dose Inter",
      company: "Digitl Dose",
      period: "21/08/2023 - 21/10/2023",
      location: "Remote",
      website: "DigitlDose.in",
      description:
        "Digital Marketing Agency. Developed and maintained a robust marketing platform with a focus on user experience and functionality.",
      skills: [ "TS", "React", "NextJS", "CSS", "TailwindCSS" ],
    },
    {
      title: "Ai Task Manager",
      company: "Start-Up",
      period: "2023",
      location: "MP,bhopal",
      website: "sageaimentor.com",
      description:
        "Ai Task Manager. Developed and maintained a robust marketing platform with a focus on user experience and functionality.",
      skills: ["Next", "TypeScript", "TailwindCSS", "Node.js", "Express.js", "MongoDB" , "React Native"],
    },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 bg-black text-white ">
      <h2 className="text-5xl font-bold text-center mb-12 md:text-6xl">
        Professional
        <br />
        Experience
      </h2>

      <div className="space-y-4">
        {jobs.map((job, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <button
              onClick={() => toggleExpand(index)}
              className="w-full flex items-center justify-between p-4 bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              <div className="text-left">
                <h3 className="text-lg font-medium">
                  {job.title} @ {job.company}
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <span>{job.period}</span>
                {expandedJob === index ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </div>
            </button>

            {expandedJob === index && (
              <div className="bg-[#252533] p-6 relative">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    <a
                      href={`https://${job.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-300 transition-colors"
                    >
                      {job.website}
                    </a>
                  </div>
                </div>

                <p className="mb-6">{job.description}</p>

                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 rounded-full text-sm bg-[#2e2e4b] text-white">
                      {skill}
                    </span>
                  ))}
                </div>
                {index === 1 && (
                  <div className="absolute right-6 bottom-6 w-16 h-16 opacity-80">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#6525f5] to-[#00d4ff] flex items-center justify-center">
                      <span className="text-2xl font-bold">S</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

