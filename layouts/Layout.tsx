import { FC } from "react"
import Head from "next/head"
import { Navbar } from '../components/ui'

interface Props {
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({children, title}) => {
 
  return (
   <>
    <Head>
        <title>{ title || 'App Pokemon'}</title>
        <meta name='author' content='Jonatan Ruiz Diaz'/>
        <meta name='description' content={`Informacion sobre el pokemon ${title} en PokeApi`}/>
        <meta name='keywords' content={`${title}, pokeApi,pokemon,pokedex,poke,shaini`}/>    
        <meta property='og:tittle' content={`Información sobre ${title}`}/>
        <meta property='og:description' content={`Esta página es sobre ${title}`}/>
        <meta property='og:image' content={`${origin}/img/poke.jpeg`}/>
    </Head>   
    <Navbar/> 
    <main>
        {children}
    </main>
   </>
  )
}
