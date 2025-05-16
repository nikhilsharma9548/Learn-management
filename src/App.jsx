import { useState } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Companies from './Components/Companies'
import CourseCard from './Components/CourseCard'
import SignIn from './Components/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Companies/>
      <CourseCard/>
      {/* <SignIn /> */}
    </>
  )
}

export default App
