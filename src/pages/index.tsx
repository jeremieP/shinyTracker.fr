import Head from 'next/head'
import Image from 'next/image'
import LogoLight from '@/assets/logo-light.png'
import Link from 'next/link'
import Twitch from '@/assets/twitch.png'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })
const inter = () => ({ className: '' })

export default function Home() {
  const today = new Date()
  const year = today.getFullYear()

  return (
    <>
      <Head>
        <title>ShinyTracker.fr - Gotta catch them all !</title>
        <meta name="description" content="Track your shinydex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen mx-52 text-black">
        <section className="border-b flex justify-center py-12">
          <Image
            className="w-72 h-72"
            src={LogoLight}
            width={72}
            height={72}
            alt="logo shinytracker"
          />
        </section>
        <section className="border-b flex flex-col justify-center align-center text-center py-12">
          <h2 className="text-4xl leading-10 font-bold mb-6">Bientôt disponible</h2>
          <p className="text-lg leading-7 font-normal">
            Shinytracker, la plateforme qui vous permet de suivre vos pokémons shiny par génération
            ! Partez à la chasse aux shiny, et notez vos prises sur Shinytracker !
          </p>
        </section>
        <section className="border-b p-12 flex flex-col justify-center items-center">
          <div className="flex justify-between mb-16">
            <div>
              <h3 className="text-xl leading-7 font-medium mb-6">
                Suivez l’évolution du projet en live
              </h3>
              <p className="mb-6">
                Regardez l’équipe travailler sur le projet, toutes les semaines sur Twitch ! Les
                streams seront diffusés sur la chaine{' '}
                <Link className="text-red-500" href="https://www.twitch.tv/jeremiep_">
                  JeremieP_
                </Link>
                .
              </p>
              <p>
                On vous fait découvrir Next.js en codant le projet. Venez poser vos questions,
                découvrir une nouvelle techno, ou discuter avec nous en stream !
              </p>
            </div>
            <Image
              src={Twitch}
              alt="logo twitch"
              className="w-52 h-52 ml-12"
              width={52}
              height={52}
            />
          </div>
          <Link
            className="bg-red-500 text-zinc-50 py-4 px-16 rounded-full max-w-fit text-center"
            href="https://github.com/jeremieP/shinyTracker.fr"
          >
            Suivez le projet
          </Link>
        </section>
        <footer className="p-12 flex justify-center">
          <p className="text-base leading-6 font-light">
            Made with love by{' '}
            <Link className="text-red-500" href="https://github.com/jeremieP">
              JeremieP_
            </Link>{' '}
            &{' '}
            <Link className="text-red-500" href="https://github.com/krauzeure">
              Krauzeure
            </Link>{' '}
            - © {year}
          </p>
        </footer>
      </main>
    </>
  )
}
