import { useState } from 'react'
import Header from './Components/Header';
import Hero from './Components/Hero';
import Companies from './Components/Companies';
import CourseCard from './Components/courseCard';
import Footer from './Components/Footer';
import SignIn from './Components/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Companies/>
      <CourseCard/>
      < Footer/>
    </>
  )
}

export default App
