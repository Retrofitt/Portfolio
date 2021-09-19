import { Link } from "react-router-dom"
 import Contact from "./Contact"

export default function Home(props){
    const {logo, socials} = props

    console.log(socials)

    return(<div className='component'>
        <Link to='/about'>
            <img src={logo} alt='no'/>
        </Link>
        <Contact socials={socials} />
    </div>)
}