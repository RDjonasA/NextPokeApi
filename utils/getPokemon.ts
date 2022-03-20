import { pokeAPi } from "../api"
import { Pokemon } from "../interfaces"

export const getPokemonInf = async (nameOrId: string ) =>{

    try {
        const {data} = await pokeAPi.get<Pokemon>(`/pokemon/${nameOrId}`)
        return{
            id: data.id,
            name: data.name,
            sprites: data.sprites,
        }
    } catch (error) {
        return null
    }


}
