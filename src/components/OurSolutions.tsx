import React from 'react'

interface Solution {
  title: string
  content: string
}

interface TwoColumnFAQProps {
  faqItems: Solution[],
    title?:string,
    subTitle?:string
}

export default function TwoColumnFAQ({ faqItems, title, subTitle }: TwoColumnFAQProps) {
  return (
    <div className="container mx-auto  px-0 md:px-4 py-0 md:py-8 !mt-12 leading-6">
      <h2 className="text-3xl font-bold text-center mb-8">{title ? title : "Our Solutions"}</h2>

        {subTitle && (
            <p className={"text-center text-xl font-bold text-center mb-8"}>

                {subTitle}
            </p>
        )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white dark:bg-neutral-900 dark:border-white dark:border-solid dark:border rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{item.title}</h3>
              <div className={'h-1 w-12 my-4 bg-[#00ce1b] rounded-lg'}></div>
            <p className="text-gray-600 dark:text-white">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
