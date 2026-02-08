import Polaroid from './Polaroid'
import apollon from './images/apollon.jpg'
import party from './images/party.jpg'
import surf from './images/surf.jpg'
import cn from "@/utils/cn";
import localFont from "next/font/local";

const gloria = localFont({
  src: [
    {
      path: '../../../../public/fonts/gloria-hallelujah.woff2',
      style: 'normal',
    },
  ],
  weight: '400',
  display: 'swap',
  declarations: [
    {
      prop: 'unicode-range',
      value:
        'U+00??, U+0131, U+0152-0153, U+02bb-02bc, U+02c6, U+02da, U+02dc, U+2000-206f, U+2074, U+20ac, U+2122, U+2191, U+2193, U+2212, U+2215, U+feff, U+fffd',
    },
  ],
})

const WhoAmI = () => (
  <section className="space-y-5">
    <p>
      <em>Hey there!</em> 👋. I&apos;m Mutlu, a Frontend Developer based in
      Istanbul, that loves to code and build products with a delightful user
      experience.
    </p>

    <p>
        Currently working at{' '}
      <a
        href="https://www.ttboom.com/"
        className="underline underline-offset-2"
        target="_blank"
        rel="noopener noreferrer"
      >
          ticktockboom
      </a>{' '}
      as a Frontend developer, building the social media monitoring product used by many leading companies in Turkey.
        Before that, I worked at Next4biz, where I developed CRM and CSM products.
        My first professional experience was at Petzzshop, an e-commerce startup.
    </p>

    <p>
      I love working in between product, engineering and developer experience.
      Some things that make me excited are JavaScript, Open Source, CI & CD
      systems, simplicity, automating things and building meaningful
      user-centric products.
    </p>

    <p>
        I was born and raised in Balıkesir
        then i moved Istanbul and come from a background
        of studying Frontend Engineer.
    </p>

    <p>
        Outside of work, I&apos;m obsessed with sports, doing open source and listening music.
    </p>

    <div
      className={cn('py-4 flex gap-0 lg:gap-6 lg:flex-wrap', gloria.className)}
    >
        <Polaroid label="Surf 🏄🏻‍♂️️" src={surf} rotation="-2" />
      <Polaroid label="Apollon '23 🏖️" src={apollon} rotation="1" />
      <div className="hidden sm:block">
          <Polaroid label="Party 🪩" src={party} rotation="-3" />
      </div>
    </div>
  </section>
)

export default WhoAmI
