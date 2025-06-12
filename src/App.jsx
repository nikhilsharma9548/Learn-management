import { Routes, Route } from 'react-router-dom';
import './index.css'

import Header from './Components/Header';
import Hero from './Components/Hero';
import Companies from './Components/Companies';
import Courses from './Components/Courses';
import CourseCard from './Components/CourseCard';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="overflow-hidden">
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <Hero />
              <Companies />
              <CourseCard />
              <Testimonials />
              <Footer />
            </>
          } 
        />
        <Route path="/courses/id" element={<>
          <Header />
          <Courses />
          <Footer />
        </>} />
      </Routes>

      
    </div>
  );
}

export default App;
