import { Grid} from '@nextui-org/react'
import type { GetStaticProps, NextPage } from 'next'
import { pokeAPi } from '../api'
import { ListPokemon, OtherPokemon } from '../interfaces'
import { Layout } from '../layouts'
import { CardPokemon } from '../components/ui/pokemon' 

interface Props{
  pokemons: OtherPokemon[]
}
const HomePage: NextPage<Props> = ({pokemons}) => {

  return (
   <>
   <Layout title='Lista de Pokemones'>
   <Grid.Container gap={2} justify='flex-start'>
   {
        pokemons.map( (pokemons) => (
          <CardPokemon key={pokemons.id} pokemon={pokemons}/>
        ))
   }
		</Grid.Container>
  </Layout>
   </>
  )
}

export const getStaticProps: GetStaticProps = async (cont) =>{

  const {data} = await pokeAPi.get<ListPokemon>('/pokemon?limit=200')
	const pokemons: OtherPokemon[] = data.results.map ((poke,i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
  }))

  return {
    props:{
      pokemons
    }
  }
}

export default HomePage
