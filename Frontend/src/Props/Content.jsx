import React from 'react'

function Content({title,content,disclaimer,
    css_change="" ,title_css="mb-4", content_css='mb-4'
    }) 
    {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow-lg rounded-xl my-6 ${css_change}`}>
      {/* Optional */}
      {title && (<h2 className={`text-3xl font-bold text-purple-600 dark:text-white  
       ${title_css}`}>
        {title}
      </h2>)}
      <p className={`text-gray-700 dark:text-gray-300 ${content_css}`}>{content}</p>
    {/* okay so this is also opentional */}
      {disclaimer && (
        <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg text-sm text-yellow-800 dark:text-yellow-200">
          <strong>Disclaimer:</strong> {disclaimer}
        </div>
      )}
    </div>
  )
}

export default Content