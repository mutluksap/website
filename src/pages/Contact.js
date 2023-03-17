import React from 'react'

function Contact() {
  return (
    <div className='container mx-auto'>
      <div className='p-6 lg:p-10 border rounded-md bg-green-500/5 border-green-500/10'>
        <h1 className='text-xl lg:text-4xl font-bold lg:leading-[46px]'>Contact Me 📨</h1>
        <ul className='my-1'>
          <li className='py-1'>
            <span className='font-bold'>Mail:</span> <a className='underline' href="mailto:mutlukasap.dev">mail@mutlukasap.dev</a>
          </li>
          <li className='py-1'>
            <span className='font-bold'>Github:</span> <a className='underline' href="https://github.com/mutluksap">@mutluksap</a>
          </li>
          <li className='py-1'>
            <span className='font-bold'>Linkedin:</span> <a className='underline' href="https://www.linkedin.com/in/mutlukasap/">mutlukasap</a>
          </li>
          <li className='py-1'>
            <span className='font-bold'>Twitter: </span> <a className='underline'target="_blank" rel='noreferrer' href="https://twitter.com/mutluksap">@mutluksap</a>
          </li>
          <li className='py-1'>
            <span className='font-bold'>Instagram: </span> <a className='underline'target="_blank" rel='noreferrer' href="https://instagram.com/mutluksap">@mutluksap</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact