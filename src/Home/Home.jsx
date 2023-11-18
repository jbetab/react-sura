import './Home.css'
import { Menu } from '../menu/Menu'
import { Usuario } from '../Usuario/Usuario'

export function Home(){
    return(
        <>
        <header>
            <Menu>

            </Menu>
        </header>
        <section className='banner'>
            <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sapiente
                 odit voluptatum,
                 impedit porro quis
                 quidem neque officiis
                 dicta temporibus error ipsa architecto eligendi sed fugiat accusamus
                  placeat commodi eveniet!
            </p>
        </section>
        <section className='my-5'>
            <Usuario></Usuario>

        </section>
        </>
    )
}