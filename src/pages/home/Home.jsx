import React from 'react'
import Winter from './winter/Winter'
import Discover from './discover/Discover'
import Recommended from './recommended/Recommended'
import './Home.scss'
function Home() {

  return (
    <>
    <Winter/>
    <Discover/>
    <Recommended/>
    </>
  )
}

export default Home