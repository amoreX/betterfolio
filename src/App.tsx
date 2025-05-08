import './App.css'
import Navbar from './components/navbar'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'

function App() {
  return (
    <>
      <div className="min-h-screen w-screen flex flex-col overflow-hidden p-4 gap-4 bg-black">
        <Navbar />
        <div className="flex flex-col md:flex-row gap-4 flex-1">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </>
  )
}

export default App
