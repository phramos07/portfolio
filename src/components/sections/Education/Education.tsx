import React from 'react'

interface EducationItem {
  degree: string
  institution: string
  period: string
  dissertation?: string
}

interface EducationProps {
  items: EducationItem[]
}

const Education: React.FC<EducationProps> = ({ items }) => {
  return (
    <section id="education" className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-100 mb-8 pb-4 border-b-2 border-blue-500">
          Education
        </h2>
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-100 mb-2">
                {item.degree}
              </h3>
              <p className="text-gray-300 mb-2">{item.institution}</p>
              <p className="text-gray-400 text-sm">{item.period}</p>
              {item.dissertation && (
                <p className="text-gray-300 mt-4">
                  Dissertation: "{item.dissertation}"
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

