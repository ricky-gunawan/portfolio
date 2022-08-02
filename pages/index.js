import Head from "next/head";
import { useState } from "react";
import { ExpressJs, GitHub, Gmail, LinkedIn, MongoDb, NextJs, NodeJs, ReactJs, ReactNative, Redux, TailwindCss } from "../components/svgIcon";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ricky Indra Gunawan`s Portfolio</title>
        <meta name="description" content="Ricky`s Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col sm:flex-row-reverse p-8 bg-white h-[80vh] justify-center items-center gap-16">
          <img src={"/photo-profile.jpg"} className="rounded-md w-[10rem] sm:w-[12rem] border-4 border-[#023047]" />
          <div className="text-center flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Ricky Indra Gunawan</h1>
            <p className="text-xl">I am a frontend developer looking for opportunities in the industry</p>
            <div className="flex justify-center gap-6">
              <a href="#portfolio" className="text-white uppercase bg-[#fb8500] py-1 px-2 rounded-md shadow-lg hover:bg-[#d87503] border-2 border-slate-300">
                my portfolio
              </a>
              <a href="#contact" className="text-white uppercase bg-[#fb8500] py-1 px-2 rounded-md shadow-lg hover:bg-[#d87503] border-2 border-slate-300">
                contact me
              </a>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#023047"
            fillOpacity="1"
            d="M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,197.3C672,203,768,181,864,170.7C960,160,1056,160,1152,154.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div id="portfolio" className="px-8 bg-[#023047] text-white">
          <h2 className="text-3xl font-semibold text-center">Projects that I have personally built</h2>
          <div className="mt-16 flex flex-col sm:flex-row gap-8">
            <div className="group cursor-pointer relative sm:w-[60%] sm:max-w-[48rem] self-start border-4 border-[#fb8500] rounded-md shadow-lg shadow-black">
              <img src="/web-ui-components.png" alt="web ui components library" />
              <div className="hidden group-hover:flex absolute top-0 left-0 w-full h-full bg-slate-300/40 justify-center items-center">
                <a href="https://ricky-gunawan.github.io/personal-ui-components" target="blank" className="text-white uppercase bg-[#fb8500] py-1 px-2 rounded-md hover:bg-[#d87503] border-2 border-slate-300">
                  Live Demo
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 sm:w-[40%]">
              <h3 className="uppercase text-lg font-semibold">web ui components</h3>
              <p>In this website I have built web UI common components, such as button, modal, card, carousel, etc. I learned a lot about CSS in this project and also learned how to implement color theme</p>
              <div className="flex gap-6">
                <a href="https://ricky-gunawan.github.io/personal-ui-components" target="blank" className="text-white uppercase bg-[#fb8500] py-1 px-2 rounded-md shadow-lg shadow-black hover:bg-[#d87503] border-2 border-slate-300">
                  Live Demo
                </a>
                <a
                  href="https://github.com/ricky-gunawan/personal-ui-components"
                  target="blank"
                  className="flex items-center gap-1 text-white uppercase bg-[#023047] py-1 px-2 rounded-md shadow-lg shadow-black hover:bg-black border-2 border-[#fb8500]"
                >
                  <span>Repository</span>
                  <GitHub fill="white" width="15" height="15" />
                </a>
              </div>
              <div className="mt-8 flex flex-col gap-2 items-center">
                <p className="text-lg">Technology used:</p>
                <div className="flex gap-4 items-center">
                  <TailwindCss />
                  <ReactJs />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-32 flex flex-col sm:flex-row-reverse gap-8">
              <div className="group cursor-pointer relative sm:w-[60%] sm:max-w-[48rem] self-start border-4 border-[#fb8500] rounded-md shadow-lg shadow-black">
                <img src="/shoeshop.png" alt="shoeshop" />
                <div className="hidden group-hover:flex absolute top-0 left-0 w-full h-full bg-slate-300/40 justify-center items-center">
                  <a href="https://react-shoe-shop.herokuapp.com" target="blank" className="text-white uppercase bg-[#fb8500] py-1 px-2 rounded-md hover:bg-[#d87503] border-2 border-slate-300">
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 sm:w-[40%]">
                <h3 className="uppercase text-lg font-semibold">Shoeshop</h3>
                <div>
                  <p>Simple online shop that I have built from the scratch. In this project I learn many things from frontend to backend, such as:</p>
                  <ol className="list-disc list-inside overflow-hidden">
                    <li>Built frontend UI using Tailwind CSS and React JS</li>
                    <li>Using Redux Toolkit for state management</li>
                    <li>Built Rest API using Express JS</li>
                    <li>Using MongoDB Atlas as a database</li>
                    <li>Built Authentication System using JWT</li>
                    <li>Using Axios to communicate between client and server</li>
                    <li>
                      Built many features, like sign up, login, backend product filtering, add a product to cart, set product quantity, automatic total price calculation, place an order, admin dashboard to manage products, users, and
                      orders, etc
                    </li>
                    <li>Deploy app to heroku</li>
                  </ol>
                </div>
                <div className="flex gap-2">
                  <a href="https://react-shoe-shop.herokuapp.com" target="blank" className="text-white uppercase bg-[#fb8500] py-1 px-2 rounded-md shadow-lg shadow-black hover:bg-[#d87503] border-2 border-slate-300">
                    Live Demo
                  </a>
                  <a href="https://github.com/ricky-gunawan/shoeshop" target="blank" className="flex items-center gap-1 text-white uppercase bg-[#023047] py-1 px-2 rounded-md shadow-lg shadow-black hover:bg-black border-2 border-[#fb8500]">
                    <span>Repository</span>
                    <GitHub fill="white" width="15" height="15" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-2 items-center">
              <p className="text-lg">Technology used:</p>
              <div className="flex gap-4 items-center flex-wrap">
                <TailwindCss />
                <ReactJs />
                <Redux />
                <NodeJs />
                <ExpressJs />
                <MongoDb />
              </div>
            </div>
          </div>
          <div className="mt-32 flex flex-col sm:flex-row gap-8">
            <div className="mockup-phone border-[#fb8500] max-w-[18rem] self-start shadow-lg shadow-black">
              <div className="camera"></div>
              <div className="display">
                <img src="/android-1_home.png" alt="android-app" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h3 className="uppercase text-lg font-semibold">Simple Note Android App</h3>
              <p>Simple app to keep notes. You can create, search, and delete note. In this project I learned the basics of react native</p>
              <div className="flex gap-2">
                <a href="/simple-note.apk" className="text-white uppercase bg-[#fb8500] py-1 px-2 rounded-md shadow-lg shadow-black hover:bg-[#d87503] border-2 border-slate-300">
                  Download APK
                </a>
                <a
                  href="https://github.com/ricky-gunawan/react-native-simple-note"
                  target="blank"
                  className="flex items-center gap-1 text-white uppercase bg-[#023047] py-1 px-2 rounded-md shadow-lg shadow-black hover:bg-black border-2 border-[#fb8500]"
                >
                  <span>Repository</span>
                  <GitHub fill="white" width="15" height="15" />
                </a>
              </div>
              <div className="mt-8 flex flex-col gap-2 items-center">
                <p className="text-lg">Technology used:</p>
                <div className="flex gap-4 items-center">
                  <ReactNative />
                  <Redux />
                  <TailwindCss />
                  <p className="text-sm">React Native Async Storage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg className="bg-[#023047]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L120,229.3C240,235,480,245,720,229.3C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
      </main>
      <footer id="contact" className="flex flex-col justify-center items-center gap-2 bg-[#ffffff] text-center">
        <h2 className="text-2xl font-semibold">Reach Me On:</h2>
        <div className="flex flex-col gap-2">
          <a href="https://www.linkedin.com/in/ricky-indra-gunawan-68a1281a1/" target="blank" className="flex items-center gap-2 hover:underline">
            <LinkedIn width="35" height="30" />
            <span>Ricky Indra Gunawan</span>
          </a>
          <a href="mailto:rickyindra006@gmail.com" target="blank" className="flex items-center gap-2 hover:underline">
            <Gmail />
            <span className="ml-1">rickyindra006@gmail.com</span>
          </a>
          <a href="https://github.com/ricky-gunawan" target="blank" className="flex items-center gap-2 hover:underline">
            <GitHub width="31" height="30" />
            <span className="ml-1">ricky-gunawan</span>
          </a>
        </div>
        <p className="mt-12">&copy; 2022, Ricky Indra Gunawan</p>
        <div className="flex items-center gap-2">
          <span>Built with</span>
          <NextJs />
        </div>
      </footer>
    </div>
  );
}
