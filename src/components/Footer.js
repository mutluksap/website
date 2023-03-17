import React, { useState } from 'react'

function Footer() {

  const [link, setLink]  = useState("#");

  const linkData = (value) => {
    console.log(value);
    if(value !== " "){
        setLink("https://api.whatsapp.com/send?phone=+90 (536) 836 54 98&text=" +value);
    }
    else {
        setLink("#");
    }
    
  }

  return (
    <div className="bg-green-300/5 mt-auto py-8 border-t border-green-500/30 mt-4 lg:mt-6">
        <footer className="container mx-auto">
            <h3 className="text-lg lg:text-xl mb-2 font-semibold text-gray-300">Share music 🎧</h3>
            <p className="text-sm lg:text-base mb-6 text-gray-500">I love listening to music. If you have favorite playlists or tracks, you can share them with me.</p>
            <form className="flex flex-col lg:flex-row items-center gap-2.5">
                <input onChange={(e) => linkData(e.target.value)} className="w-full lg:w-[400px] h-10 rounded-[8px] px-4 bg-white/10 text-sm lg:text-base" type="text" placeholder="Add spotify link..." />
                <a href={link} className="h-10 flex items-center rounded-[8px] transition-colors whitespace-nowrap text-sm lg:text-base bg-[#1db954] px-8 hover:bg-green-600 w-full lg:w-auto">Send</a>
            </form>
        </footer>
</div>
  )
}

export default Footer