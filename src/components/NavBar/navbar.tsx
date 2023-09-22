import { component$ } from "@builder.io/qwik";

export interface NavbarProps {}

export const NavBar = component$<NavbarProps>(() => {
  return (
    <>
      <div class="grid grid-rows-1 grid-cols-1 ">
        <nav class="bg-white  border-gray-200 dark:bg-gray-900 row-start-1 row-end-2 ">
          <div class="max-w-screen-xl flex flex-wrap items-center  justify-between mx-auto p-4">
            <a href="https://flowbite.com/" class="flex items-center">
              <img src="./logo.svg " alt="easybank logo" />
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <img src="./images/icon-hamburger.svg" alt="menu bar " />
            </button>
            <div class="hidden w-full md:block md:w-auto " id="navbar-default">
              <div class="flex justify-center ">
                <ul class="font-medium relative flex w-80 min-w-max flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg text-center bg-tp-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 max-w-xs">
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div class="bg-[url('/images/bg-intro-mobile.svg')] row-start-2 row-end-[-1] bg-no-repeat bg-center bg-cover h-fit -z-20 ">
          <img
            class="-z-10 w-full h-full relative top-[-16vw]"
            src="./images/image-mockups.png "
            alt="multiple phones logged into easybank"
          />
        </div>
      </div>
    </>
  );
});
