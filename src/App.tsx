import './App.css'
import Navbar from './components/navbar'

function App() {
  return (
    <>
      <div className="min-h-screen w-screen flex flex-col overflow-hidden p-4 gap-4 bg-black">
        <Navbar />

        <div className="flex flex-col md:flex-row gap-4 flex-1">
          {/* Left grid section */}
          <div className="flex-1 flex flex-col gap-4 max-h-[calc(100vh-4rem)]"> {/* or h-screen if desired */}
            {/* Top row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
              {/* Headline (2/3 width) */}
              <div className="md:col-span-2 bg-[#e6ddcc] text-black rounded-xl p-6 flex flex-col justify-center">
                <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
                  Let’s create dance floor <em className="italic font-normal">magic</em> for your special day
                </h1>
              </div>

              {/* Image (1/3 width) */}
              <div className="bg-[#1e1e1e] rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="/your-image.jpg"
                  alt="DJ Portrait"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
              {/* Bio (1/3 width) */}
              <div className="bg-[#e6ddcc] text-black rounded-xl p-4 text-sm leading-relaxed">
                <p>
                  DJ Lisa is a passionate wedding DJ acclaimed for blending diverse musical genres with expert
                  crowd-reading skills. Based in Florida, she crafts personalized soundtracks that turn every
                  wedding into an unforgettable celebration.
                </p>
              </div>

              {/* Contact (2/3 width) */}
              <div className="md:col-span-2 bg-[#1e1e1e] rounded-xl p-6 flex flex-col justify-between text-[#e6ddcc]">
                <p className="text-sm mb-2">Have some questions?</p>
                <h2 className="text-2xl italic underline underline-offset-4 cursor-pointer">
                  Contact <span className="not-italic">me</span>
                </h2>
              </div>
            </div>
          </div>

          {/* Right column (Playlist + Socials) */}
          <div className="flex flex-col md:w-[25%] w-full gap-4">
            {/* Playlist */}
            <div className="flex-1 bg-[#e6ddcc] text-black rounded-xl p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold">First Dance</span>
                <span>↗</span>
              </div>
              <p>Cocktail Hour</p>
              <p>Dinner Music</p>
              <p>After Party</p>
            </div>

            {/* Socials */}
            <div className="h-[60px] flex justify-around items-center bg-[#e6ddcc] text-black rounded-xl p-2 text-xs font-medium">
              <a href="#">INSTAGRAM</a>
              <a href="#">TWITTER</a>
              <a href="#">PINTEREST</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
