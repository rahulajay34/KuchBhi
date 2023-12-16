import React from 'react'
import Navbar from './Navbar'
import Slider from '../MainContent/Slider'
import UserCards from '../MainContent/UserCards'
import Images from '../MainContent/Images'
import CategoryReviewCurious from '../MainContent/CategoryReviewCurious'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
         <Navbar />
      <Slider />
      <UserCards />
      <Images />
      <CategoryReviewCurious />
      <Footer />
    </div>
  )
}
