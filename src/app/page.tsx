'use client'
import React  from 'react'

import { Atom, Monitor, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/moving-border';
import Navbar from '@/components/Navbar';
import Link from "next/link"
import { ArrowUp } from "lucide-react"
import ExperienceSection from "@/components/experience-section";
import BentoGridDemo from '@/components/bento-grid-demo';
import Image from 'next/image';
import GridBackgroundDemo from '@/components/ui/boxBackgorund';


export default function Home() {
  return (
  <div className="flex flex-col justify-center bg-black ">
    <Navbar/>
      <div className="p-4 ">
        <div className="h-full mt-16 relative  w-full overflow-hidden bg-black flex flex-col items-center justify-center ">
            <GridBackgroundDemo />
        </div>
      </div>
      <div>
          <div className="bg-[#121212] text-white py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">My Expertise</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-700">
              {/* Software Development */}
              <div className="border-b md:border-b-0 md:border-r border-gray-700 p-8">
                <div className="flex items-center mb-4">
                  <Monitor className="w-10 h-10 mr-4" />
                  <div>
                    <h2 className="text-2xl font-bold">
                      <span className="relative">
                        Software
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-pink-600"></span>
                      </span>
                    </h2>
                    <h2 className="text-2xl font-bold">Development</h2>
                  </div>
                </div>

                <div className="font-mono mt-8">
                  <h3 className="text-gray-400 text-sm">&lt;h3&gt;</h3>
                  <p className="my-4 leading-relaxed border-gray-400 border-l-2 pl-2 ">
                    Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.
                  </p>
                  <h3 className="text-gray-400 text-sm">&lt;/h3&gt;</h3>
                </div>
              </div>

              {/* Frontend Dev */}
              <div className="border-b md:border-b-0 md:border-r border-gray-700 p-8">
                <div className="flex items-center mb-4">
                  <Atom className="w-10 h-10 mr-4" />
                  <div>
                    <h2 className="text-2xl font-bold">
                      <span className="relative">
                        Frontend Dev
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></span>
                      </span>
                    </h2>
                    <h2 className="text-2xl font-bold">React, NextJS</h2>
                  </div>
                </div>

                <div className="font-mono mt-8">
                  <h3 className="text-gray-400 text-sm">&lt;h3&gt;</h3>
                  <p className="my-4 leading-relaxed border-gray-400 border-l-2 pl-2">
                    Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS
                    frameworks.
                  </p>
                  <h3 className="text-gray-400 text-sm">&lt;/h3&gt;</h3>
                </div>
              </div>

              {/* Flutter Dev */}
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Smartphone className="w-10 h-10 mr-4" />
                  <div>
                    <h2 className="text-2xl font-bold">
                      <span className="relative">
                        Feact Native Dev
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></span>
                      </span>
                    </h2>
                    <h2 className="text-2xl font-bold">Android, iOS</h2>
                  </div>
                </div>
                <div className="font-mono mt-8">
                  <h3 className="text-gray-400 text-sm">&lt;h3&gt;</h3>
                  <p className="my-4 leading-relaxed border-gray-400 border-l-2 pl-2">
                    Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.
                  </p>
                  <h3 className="text-gray-400 text-sm">&lt;/h3&gt;</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white flex flex-col md:flex-row px-4 py-8 md:p-8 ">
          {/* Left side content */}
          <div className="w-full md:w-1/2 mb-12 items-start p-10 md:mb-0">
            <h1 className="text-5xl md:text-8xl font-bold mb-8">
              My
              <br />
              Work
            </h1>
            <p className="text-lg md:text-2xl max-w-xl">
              Deployed scalable , appointment doctor web and hybrid mobile apps using Native React.
              <br />
              <br />
              Collaborated in 40+ projects with 10+ clients . I am also interested in data analytics
              and visualization.
            </p>
          </div>
          {/* Right side content */}
          <div className='w-full md:w-1/2 flex flex-col '>
          <div className="w-full flex flex-row justify-center gap-x-0 md:gap-x-5">
            <div className="flex flex-col items-end">
              {/* Arrow pointing to phone */}
              <div className='flex items-end h-full'>
                <Image width={100} height={100} src="/arrowAnimation.gif" className="w-24 h-24 rotate-90 " alt="Arrow animation" unoptimized />
              </div>
              </div>
              {/* Phone mockup */}
              <div className="flex items-start bg-black">
                <video 
                  autoPlay 
                  loop={true}
                  muted 
                  playsInline
                  className="w-full h-[600px] object-contain"
                  style={{ willChange: 'transform' }}
                >
                  <source src="/Newiphone14Model-vmake.mp4" type="video/mp4" />
                </video>
              </div>
          </div>
              <div className='flex flex-col items-start justify-center h-full md:ml-8'>
                <p className="text-xl text-gray-400">Featured Project</p>
                <h2 className="text-4xl font-bold mt-1 mb-4">Ai Manager App</h2>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-md text-lg">
                  View Project
                </Button>
              </div>
          </div>
          </div>
            <div className='w-full pt-16'>
                  <BentoGridDemo />
            </div>
            <div className='bg-black w-full'>
              <ExperienceSection/>
            </div>
            <div>
            <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Left Column - Availability */}
      <div className="bg-black text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[600px]">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Available for select freelance opportunities</h2>

          <div className="mt-8 space-y-2">
            <p className="text-lg">Have an exciting project you need help with?</p>
            <p className="text-lg">Send me an email or contact me via instant message!</p>
          </div>
        </div>

        <div className="mt-12 space-y-4">
          <Link
            href="kushchauhan2004@gmail.com"
            className="text-xl md:text-2xl font-mono text-purple-300 hover:text-purple-200 underline transition-colors"
          >
            kushchauhan2004@gmail.com
          </Link>

          <div className="flex flex-col space-y-2 text-lg">
            <Link href="www.linkedin.com/in/ramanshchauhanvoldigoad" className="hover:text-purple-300 transition-colors">
              LinkedIn
            </Link>
            <Link href="https://www.instagram.com/_.ramansh._/" className="hover:text-purple-300 transition-colors">
              Instagram
            </Link>
            <Link href="https://github.com/solovoldigoad" className="hover:text-purple-300 transition-colors">
              Github
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column - Testimonials */}
      <div className="flex flex-col">
        {/* First Testimonial */}
        <div className="bg-purple-500 text-white p-8 md:p-12 relative">
          <div className="text-6xl text-white/30 absolute top-6 left-6">&quot;</div>
          <div className="flex flex-col h-full justify-between">
            <div className="relative z-10 mb-6">
              <p className="text-lg">
                Since 2018 Tamal has been responsible for the development of our website which has been instrumental to
                the growth of our company. Even while working remotely he&apos;s been highly responsive, organized and
                strategic in his thinking.
              </p>
            </div>
            <div className="flex items-center mt-4">
              <div>
                <p className="font-bold">- Mark Greenspan</p>
                <p className="text-sm">Founder at influenceTHIS Canada</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Testimonial */}
        <div className="bg-blue-600 text-white p-8 md:p-12 relative">
          <div className="text-6xl text-white/30 absolute top-6 left-6">&quot;</div>
          <div className="flex flex-col h-full justify-between">
            <div className="relative z-10 mb-6">
              <p className="text-lg">
                Tamal is AMAZING! If you have any doubt about hiring him, ask me - I am really impressed by this guy!
              </p>
            </div>

            <div className="flex items-center mt-4">
              <div>
                <p className="font-bold">- Wilfried Hajek</p>
                <p className="text-sm">Agile Coach | Speaker | Trainer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Testimonial */}
        <div className="bg-purple-500 text-white p-8 md:p-12 relative">
          <div className="text-6xl text-white/30 absolute top-6 left-6">&quot;</div>
          <div className="flex flex-col h-full justify-between">
            <div className="relative z-10 mb-6">
              <p className="text-lg">
                Tamal is one of the best professionals that we have known in web development skills. Between his skills
                you can find good communication and accuracy with the planning in complex projects.
              </p>
            </div>

            <div className="flex items-center mt-4">
              <div>
                <p className="font-bold">- Jonathan Castro</p>
                <p className="text-sm">CEO & Founder at The Cliff</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <div className="bg-purple-500 p-4 flex justify-end">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-purple-500" />
          </button>
        </div>
      </div>
    </section>
    </div>
  </div>
</div>
  );
}


