import React from 'react'
import { Hero ,Faq , FeatureProducts , Testmonials } from './components'
import { useTitle } from '../../Hooks/useTitle'

export const HomePage = () => {
  useTitle("Home")
  return (
    <main className='min-h-screen'>
      <Hero/>
      <FeatureProducts/>
      <Testmonials/>
      <Faq/>


    </main>
  )
}
