import { Button, Card, Container, Grid, Text } from '@nextui-org/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { pokeAPi } from '../../api'
import { ListPokemon, Pokemon } from '../../interfaces'
import { Layout } from '../../layouts'
import { getPokemonInf, localFav } from '../../utils'


interface Props {
    pokemon: Pokemon
}

const PokemonByNamePage: NextPage<Props> = ({pokemon}) => {
 let tittle = pokemon.name + ' | PokeApi'

 const [isInFav,setIsInFav] = useState(localFav.existPokeInFav(pokemon.id))


 const onToggleFavorite = () => {
    localFav.toggleFavorite(pokemon.id)
    setIsInFav(!isInFav)
 }

  return (
    <Layout title={tittle}>
        <Grid.Container css={{marginTop: '5px'}} gap={2}>
            <Grid xs={12} sm={4}>
                <Card hoverable css={{padding:'30px'}}>
                    <Card.Body>
                        <Card.Image
                        src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                        alt={pokemon.name}
                        width='100%'
                        height={200}/>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid xs={12} sm={8}>
                <Card>
                        <Card.Header css={{display:'flex',justifyContent:'space-between'}}>
                            <Text size='2.5rem'> {pokemon.name} </Text>
                            <Button auto color='gradient' ghost={!isInFav} onClick={onToggleFavorite}css={{textTransform: 'full-width'}}> {isInFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}</Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={25}>Sprites:</Text>
                            <Container direction='row' display='flex' gap={0}>
                                <Image src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                                />
                                <Image src={pokemon.sprites.back_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                                />
                                <Image src={pokemon.sprites.front_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                                />
                                <Image src={pokemon.sprites.back_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                                />
                            </Container>
                        </Card.Body>
                </Card>
            </Grid>
        </Grid.Container>
    </Layout>
  )
}



export const getStaticPaths: GetStaticPaths = async (cont) =>{
    const { data } = await pokeAPi.get<ListPokemon>('/pokemon?limit=200')
    const pokemonNames: string [] = data.results.map(pokemon => pokemon.name)

    return {
        paths: pokemonNames.map(name =>({
            params:{name}
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) =>{
    
    const { name } = params as {name: string}

    return {
      props:{
        pokemon : await getPokemonInf(name)
      },
      revalidate: 86400
    }
  }

export default PokemonByNamePage