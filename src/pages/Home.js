import React from 'react'
import MyNav from '../components/MyNav'
import MyCarousel from '../components/MyCarousel'
import LatestRelease from '../components/LatestRelease'
import MyFooter from '../components/MyFooter'

const Home = () => {
  return (
    <>
    <MyNav/>
    <MyCarousel/>
    <LatestRelease/>
    <MyFooter/>
    </>
  )
}

export default Home