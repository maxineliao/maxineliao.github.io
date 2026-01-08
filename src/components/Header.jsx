
import logo from '../assets/images/maxine_logo.svg'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Hamburger() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hamburger-icon lucide-hamburger text-neon"><path d="M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25"/><path d="M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2"/><path d="M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0"/><path d="m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"/></svg>
}
function ModeSwitch({mode, setMode}) {
  return <div className='border border-neon rounded-full w-fit mx-auto'>
  <button onClick={() => setMode('Cool')} className={`py-1 px-4 m-1 font-bold rounded-full ${mode === 'Cool' ? 'dark:text-black dark:bg-neon' : 'dark:text-white'}`}>Cool</button>
  <button onClick={() => setMode('Cute')} className={`py-1 px-4 m-1 font-bold rounded-full ${mode === 'Cute' ? 'text-black bg-neon' : 'text-white'}`}>Cute</button>
</div>
}
export default function Header({mode, setMode}) {
    return <header className='font-display dark:bg-black'>
    <div className="container flex md:flex-row-reverse justify-between items-center">
    {/* <div className="container flex justify-between items-center"> */}
      <div className='hidden md:flex font-medium'>
        <NavLink className='dark:text-white py-6 px-5 block' to="/about">關於我</NavLink>
        <NavLink className='dark:text-white py-6 px-5 block' to="/projects/slam-access">專案｜<small>預覽系統</small></NavLink>
        <NavLink className='dark:text-white py-6 px-5 block' to="/projects/pulse">專案｜<small>Web Player</small></NavLink>
      </div>
      <NavLink to="/" className='w-[96px] sm:w-auto'>
        <img src={logo} alt="Maxine's LOGO" />
      </NavLink>
      <div className='block md:hidden my-2'>
         {/* <div className='flex items-center my-2'> */}
        {/* <div className='hidden md:block'>
          <ModeSwitch  mode={mode} setMode={setMode}/>
        </div> */}
        <Menu as="div" className='block md:hidden ms-2'>
          <MenuButton className='focus:outline-0 mt-1'>
            <Hamburger />
          </MenuButton>
          <MenuItems as="div" anchor="bottom" className='focus:outline-0 w-screen absolute inset-0 pt-10 text-center text-xl dark:bg-black dark:text-white flex flex-col'>
            <MenuItem as="div">
              {({ focus }) => (
                <a href="#" className={`block py-4 ${focus ? 'bg-blue-100 dark:bg-neon-dark' : ''}`}>
                  關於我</a>
              )}
            </MenuItem>
            <MenuItem as="div">
              {({ focus }) => (
                <NavLink to="/projects/slam-access" className={`block py-4 ${focus ? 'bg-blue-100 dark:bg-neon-dark' : ''}`}>
                  專案｜預覽系統</NavLink>
              )}
            </MenuItem>
            <MenuItem as="div">
              {({ focus }) => (
                <NavLink to="/projects/pulse" className={`block py-4 ${focus ? 'bg-blue-100 dark:bg-neon-dark' : ''}`}>
                  專案｜Web Player</NavLink>
              )}
            </MenuItem>

            {/* <div className="px-3 py-4 mt-auto mb-8">
              <ModeSwitch mode={mode} setMode={setMode} />
            </div> */}
          </MenuItems>
        </Menu>
      </div>
    </div>
  </header>
}