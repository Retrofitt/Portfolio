import { Link } from "react-router-dom"


export default function Home(props){
    const {logo} = props
    return(<div className='component'>
        <Link to='/about'>
            <img src={logo} alt='no'/>
        </Link>
    </div>)
}