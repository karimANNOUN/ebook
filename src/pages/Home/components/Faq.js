import React, { useState } from 'react'
import {Accordion} from './Accordion';

export const Faq = () => {
   
    const Faqs=[
        {
            "id":1,
            "question":"What is your favorite book and why?",
            "answer":"Riyad al-Salihin: Riyad al-Salihin (The Gardens of the Righteous) is a compilation of Hadiths selected and arranged by Imam Nawawi. It is a popular book among Muslims, focusing on moral and ethical teachings for everyday life. The book covers topics such as sincerity, patience, kindness, honesty, and self-discipline, providing practical guidance on how to live a righteous and fulfilling life according to Islamic principles."
        },
        {
            "id":2,
            "question":"What is your favorite book and why?",
            "answer":"Riyad al-Salihin: Riyad al-Salihin (The Gardens of the Righteous) is a compilation of Hadiths selected and arranged by Imam Nawawi. It is a popular book among Muslims, focusing on moral and ethical teachings for everyday life. The book covers topics such as sincerity, patience, kindness, honesty, and self-discipline, providing practical guidance on how to live a righteous and fulfilling life according to Islamic principles."
        },
        {
            "id":3,
            "question":"What is your favorite book and why?",
            "answer":"Riyad al-Salihin: Riyad al-Salihin (The Gardens of the Righteous) is a compilation of Hadiths selected and arranged by Imam Nawawi. It is a popular book among Muslims, focusing on moral and ethical teachings for everyday life. The book covers topics such as sincerity, patience, kindness, honesty, and self-discipline, providing practical guidance on how to live a righteous and fulfilling life according to Islamic principles."
        }
    ]
  return (
    <section className='my-12'>
         <h1 className="text-2xl my-10  font-bold text-center tracking-normal underline underline-offset-8 dark:text-white ">Question in mind?</h1>
         <div className=" mx-20  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         
            <div className=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="faq" role="tabpanel" aria-labelledby="faq-tab">
            <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              {Faqs.map((raq)=>(
               <Accordion key={raq.id} raq={raq} />
              ))}       
    
            </div>
         </div>
         </div>
    </section>
  )
}
