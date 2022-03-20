import { Spacer, Text, theme, useTheme } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
    const {theme} = useTheme()
  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        padding:'2px 20px',
        backgroundColor: theme?.colors.gray900.value
        
    }}>
        <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png'
        alt='Icon PokeApp'
        width={70}
        height={70}/>
    <Link href='/' passHref>
      <Text>
        <Text color='white'>PokeApi</Text>
      </Text>
    </Link>
    <Spacer css={{flex:1}}/>
    <Link href='/favorites'>
    <Text color='white'>Favoritos</Text>
    </Link>
    </div>
  )
}
