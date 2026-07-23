import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 flex flex-col">
      <Navbar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />

      <div className="flex flex-1">
        <main className={`flex-1 min-w-0 transition-all duration-300 ${sidebarOpen ? 'sm:mr-96' : ''}`}>
          <Outlet />
        </main>

        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>

      <Footer />
    </div>
  )
}
