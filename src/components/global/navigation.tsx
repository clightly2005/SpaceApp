import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function NavBar() {
  return (
    <Disclosure as="nav" className="fixed top-0 w-full z-50 bg-black/60 shadow-sm">
      <div className="mx-auto max-w-7xl backdrop-filter backdrop-blur-lg px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:justify-between justify-center items-center">
          {/* Mobile menu button */}
          <div className="absolute left-2 flex items-center md:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-indigo-600 focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Logo is centered on mobile, butleft on desktop */}
          <div className="flex shrink-0 items-center">
            <img alt="lunar logo" src="/logo.png" className="mt-2 h-25 w-auto md:h-16"/>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:ml-6 md:flex md:space-x-8">
            <a href="/" className="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-white">
              Home
            </a>
            <a href="#" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-400 hover:border-gray-300 hover:text-gray-200">
              Solar Map
            </a>
            <a href="/" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-400 hover:border-gray-300 hover:text-gray-200">
              News
            </a>
            <a href="/" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-400 hover:border-gray-300 hover:text-gray-200">
              Satellite Tracker
            </a>
            <a href="/education" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-400 hover:border-gray-300 hover:text-gray-200">
              Education
            </a>
            <a href="/" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-400 hover:border-gray-300 hover:text-gray-200">
              Games
            </a>
          </div>

          {/* Profile - desktop only */}
          <div className="hidden md:flex items-center">
            <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img alt="astronaut profile" src="/profilepic.png"
                  className="size-9 rounded-full bg-gray-100 outline -outline-offset-1 outline-black/5"/>
              </MenuButton>

              <MenuItems transition className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black/90 py-1 shadow-lg outline outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-200 data-focus:bg-black data-focus:outline-hidden">
                    Your profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-200 data-focus:bg-black data-focus:outline-hidden">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition enter="transition duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
        leave="transition duration-150 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
        <DisclosurePanel className="md:hidden fixed inset-0 z-50 bg-black/95 flex flex-col">
          <div className="flex justify-between p-4 ">
            <DisclosureButton className="rounded-md p-2 text-gray-400 hover:bg-slate-800 hover:text-white">
              <XMarkIcon className="size-6" />
            </DisclosureButton>
            <img alt="astronaut profile" src="/profilepic.png" className="size-10 rounded-full bg-gray-100"/>
          </div>

          <div className="flex-1 flex flex-col mt-10 space-y-8 px-8">
            <DisclosureButton as="a" href="/" className="text-2xl font-medium text-white hover:text-red-500 transition-colors">
              Home
            </DisclosureButton>
            <DisclosureButton as="a" href="#" className="text-2xl font-medium text-white hover:text-red-500 transition-colors">
              Solar Map
            </DisclosureButton>
            <DisclosureButton as="a" href="#" className="text-2xl font-medium text-white hover:text-red-500 transition-colors">
              News
            </DisclosureButton>
            <DisclosureButton as="a" href="#" className="text-2xl font-medium text-white hover:text-red-500 transition-colors">
              Satellite Tracker
            </DisclosureButton>
            <DisclosureButton as="a" href="/education" className="text-2xl font-medium text-white hover:text-red-500 transition-colors">
              Education
            </DisclosureButton>
            <DisclosureButton as="a" href="#" className="text-2xl font-medium text-white hover:text-red-500 transition-colors">
              Games
            </DisclosureButton>
          </div>

          <div className="p-6 border-t border-slate-700/40 space-y-3">
            <DisclosureButton as="a" href="#" className="block text-center py-3 text-base text-gray-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors">
              Settings
            </DisclosureButton>
            <DisclosureButton as="a" href="#" className="block text-center py-3 text-base text-gray-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors">
              Sign out
            </DisclosureButton>
          </div>
        </DisclosurePanel>
      </Transition>
    </Disclosure>
  )
}