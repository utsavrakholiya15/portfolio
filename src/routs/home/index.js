import React from 'react'
import Herobanner from './herobanner'
import Skills from './skills'
import Websites from './websites'
import Projects from './projects'

export default function Home() {
  return (
    <div>
        <Herobanner/>
        <Skills/>
        <Websites/>
        <Projects/>
    </div>
  )
}
