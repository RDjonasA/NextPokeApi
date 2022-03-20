import { Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import { InFavCardPokemon } from './inFavCardPokemon'

interface Props{
    pokemons:number[]

}

export const InFav: FC<Props> = ({pokemons}) => {
  return (
    <Grid.Container gap={2} justify='flex-start'>
    {
    pokemons.map( id => (
      <InFavCardPokemon key={id} pokemonId={id}/>
    ))
  }
  </Grid.Container>
  )
}
