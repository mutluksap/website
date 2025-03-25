'use client'

import { useState, useEffect } from 'react'

const Metadata = () => {
  const [date, setDate] = useState<string>()
  new Date().toLocaleTimeString('tr-TR', { timeZone: 'Europe/Istanbul' })

  useEffect(() => {
    const timer = setInterval(() => {
      return setDate(
        new Date().toLocaleTimeString('tr-TR', { timeZone: 'Europe/Istanbul' }),
      )
    }, 500)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex text-sm lowercase opacity-60">
      <span className="block w-[62px] whitespace-nowrap">{date}</span>
      <div className="flex gap-1.5">
        <span>·</span>
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://maps.apple.com/place?auid=6474127984016047793&lsp=9902"
        >
          istanbul, Turkey
        </a>
      </div>
    </div>
  )
}

export default Metadata
