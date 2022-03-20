import { FC } from 'react'
import Link from 'next/link'
import { Card, Grid } from '@nextui-org/react'

interface Props{
    pokemonId: number
}

export const InFavCardPokemon: FC<Props> = ({pokemonId}) => {
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId}>
    <Link href={`/pokemon/${pokemonId}`}>
      <Card hoverable css={{padding:'40px'}}>
          <Card.Body>
              <Card.Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg` || '/no-image.png'}
              width='100%'
              height={100}/>
          </Card.Body>
      </Card>
    </Link>
</Grid>
  )
}
