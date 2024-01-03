import React from 'react';
import './App.css'

import { Button, Navbar, Carousel, Footer } from 'flowbite-react';

function App() {

  return (
    <>

      <Navbar fluid rounded>

        <Navbar.Brand href="https://ieeesrmist.com">
          <img src="/img/IEEE_SRM_SB.png" className="mr-3 h-6 sm:h-6 md:h-9 lg:h-12" alt="IEEE SRM" />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link href="#">Login</Navbar.Link>
        </Navbar.Collapse>

      </Navbar>


      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Welcome to IEEE SRM Event Registration
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Unlock Exclusive Access to Exciting Events and Workshops
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-gery-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Register Here
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">23+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                Teams
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">71+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                Members
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                Sponsors
              </dd>
            </div>
          </dl>
        </div>
      </section>




      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000}>
          <img src="/img/Hero-bg-1.jpg" alt="..." />
          <img src="/img/Hero-bg-2.jpg" alt="..." />
        </Carousel>
      </div>



      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            HACTRIX-24 Registration
          </h2>
          <form action="#">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your full name"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="registration-number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                >
                  Registration Number
                </label>
                <input
                  type="text"
                  name="registration-number"
                  id="registration-number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your registration number"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your email"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="contact-number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                >
                  Contact No.
                </label>
                <input
                  type="tel"
                  name="contact-number"
                  id="contact-number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your contact number"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="department"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                >
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your department"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="section"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                >
                  Section
                </label>
                <input
                  type="text"
                  name="section"
                  id="section"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your section"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="faculty-advisor"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                >
                  Faculty Advisor
                </label>
                <input
                  type="text"
                  name="faculty-advisor"
                  id="faculty-advisor"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter faculty advisor's name"
                  required=""
                />
              </div>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-gery-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 mt-8"
              >
                Register
              </a>
            </div>
          </form>
        </div>
      </section>





      <Footer container>
        <Footer.Copyright href="#" by="IEEE SRM" year={2024} />
        <Footer.LinkGroup>
          <Footer.Link href="#">Home</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
        </Footer.LinkGroup>
      </Footer>

    </>
  )
}

export default App
