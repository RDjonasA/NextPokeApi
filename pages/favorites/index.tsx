import React, { useEffect, useState } from 'react'
import { NoFav } from '../../components/ui'
import { InFav } from '../../components/ui/pokemon/inFav'
import { Layout } from '../../layouts'
import { localFav } from '../../utils'

const FavoritesPage = () => {
  const [favPoke,setFavPoke] =useState<number[]>([])

  useEffect(()=>{
    setFavPoke(localFav.pokemons())
  },[])
  return (
    <Layout title='Favorites'>
      {
        favPoke.length === 0
        ? <NoFav/>
        :<InFav pokemons={favPoke}/>
      }
      
    </Layout>
  )
}

export default FavoritesPage