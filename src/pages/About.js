import React from 'react'
import {Helmet} from "react-helmet";

function About() {
  return (
    <div className='container mx-auto'>
        <Helmet>
            <title>About - mutlukasap.dev</title>
        </Helmet>
            <div className='p-6 lg:p-10 mb-6 border rounded-md bg-green-500/5 border-green-500/10'>
                <h2 className='text-xl lg:text-4xl font-bold lg:leading-[46px]'>About</h2>
                <p className='text-[15px] lg:text-lg text-gray-400 py-2'>
                I got my excitement about software, which started with my interest in high school, at university.
                </p>
                <p className='text-[15px] lg:text-lg text-gray-400 py-2'>
                I created websites for almost every sector at university and afterwards. Then I took part in the software problems of the sites by doing SEO studies in one of the best e-commerce companies in Turkey.
                </p>
                <p className='text-[15px] lg:text-lg text-gray-400 py-2'>
                In my current position, I am a frontend developer of a product. Apart from my current job, I create new websites and make my own ventures.
                </p>
                <p className='text-[15px] lg:text-lg text-gray-400 py-2'>
                It excites me to learn new things in the field of software and to develop new projects by improving the technologies I have learned every day.
                </p>
                <p className='text-[15px] lg:text-lg text-gray-400 py-2'>
                  <b><i>Technologies I use in my projects;</i></b>
                </p>
                <div className='text-[15px] lg:text-lg text-gray-400 py-2 flex-col items-baseline md:flex-row flex md:items-center'>
                  <span className='mr-4 mb-2 inline-block'><b>Frontend: </b></span>
                  <div className='flex flex-wrap'>
                    <span className='rounded-full text-sm font-bold inline py-1 px-3 mr-1 bg-[#0e2114] text-white mb-1 md:mb-0'>html</span>
                    <span className='rounded-full text-sm font-bold inline py-1 px-3 mr-1 bg-[#0e2114] text-white mb-1 md:mb-0'>css</span>
                    <span className='rounded-full text-sm font-bold inline py-1 px-3 mr-1 bg-[#0e2114] text-white mb-1 md:mb-0'>sass</span>
                    <span className='rounded-full text-sm font-bold inline py-1 px-3 mr-1 bg-[#0e2114] text-white mb-1 md:mb-0'>tailwind</span>
                    <span className='rounded-full text-sm font-bold inline py-1 px-3 mr-1 bg-[#0e2114] text-white mb-1 md:mb-0'>bootstrap</span>
                    <span className='rounded-full text-sm font-bold inline py-1 px-3 mr-1 bg-[#0e2114] text-white mb-1 md:mb-0'>js</span>
                    <span className='rounded-full text-sm font-bold inline py-1 px-3 mr-1 bg-[#0e2114] text-white mb-1 md:mb-0'>jquery</span>
                    <span className='rounded-full text-sm font-bold inline py-1 px-3 mr-1 bg-[#0e2114] text-white mb-1 md:mb-0'>react</span>
                    <span className='rounded-full text-sm font-bold inline py-1 px-3 mr-1 bg-[#0e2114] text-white mb-1 md:mb-0'>redux</span>
                    <span className='rounded-full text-sm font-bold inline py-1 px-3 mr-1 bg-[#0e2114] text-white mb-1 md:mb-0'>redux-toolkit</span>
                    <span className='rounded-full text-sm font-bold inline py-1 px-3 mr-1 bg-[#0e2114] text-white mb-1 md:mb-0'>redux-router</span>
                    <span className='rounded-full text-sm font-bold inline py-1 px-3 mr-1 bg-[#0e2114] text-white mb-1 md:mb-0'>figma</span>
                    <span className='rounded-full text-sm font-bold inline py-1 px-3 mr-1 bg-[#0e2114] text-white mb-1 md:mb-0'>md</span>
                  </div>
                </div>
                <p className='text-[15px] lg:text-lg text-gray-400 py-2'>
                  <span className='mr-4 mb-2 inline-block'><b>Backend: </b></span>
                  <span className='rounded-full text-sm font-bold inline py-1 px-3 mr-1 bg-[#0e2114] text-white'>php</span>
                  <span className='rounded-full text-sm font-bold inline py-1 px-3 mr-1 bg-[#0e2114] text-white'>mysql</span>
                  <span className='rounded-full text-sm font-bold inline py-1 px-3 mr-1 bg-[#0e2114] text-white'>laravel</span>
                  <span className='rounded-full text-sm font-bold inline py-1 px-3 mr-1 bg-[#0e2114] text-white'>firebase</span>
                </p>
            </div>
      </div>
  )
}

export default About