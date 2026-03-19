import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import ProjectDetail from './pages/ProjectDetail'
import PageTransition from './components/PageTransition'
import './App.css'

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition>
              <Home />
            </PageTransition>
          } />
          <Route path="/about" element={
            <PageTransition>
              <About />
            </PageTransition>
          } />
          <Route path="/works" element={
            <PageTransition>
              <Works />
            </PageTransition>
          } />
          <Route path="/project/:id" element={
            <PageTransition>
              <ProjectDetail />
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App

