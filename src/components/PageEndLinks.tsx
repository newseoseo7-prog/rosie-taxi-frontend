import Link from 'next/link'
import React from 'react'

const PageEndLinks = ({routes} :any) => {
  return (
    <div className="bg-gray-50 rounded-lg py-16 leading-6">
      <div className="container mx-auto px-8 ">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 leading-tight">
              POPULAR AIRPORT ROUTES & DESTINATIONS
            </h2>
          </div>
          <div>
            <ul className="space-y-2">
              {routes.map((route : any) => (
                <li key={route.name}>

                <div  className="group flex  items-center text-md text-gray-700 hover:text-blue-600 transition-colors duration-200">
                    <span className="mr-2 text-blue-500 group-hover:text-blue-600">›</span>
                    {route.name.trim()}
                </div>

                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageEndLinks