
import { Link } from 'react-router-dom'


export default function Photography(props){
    const {photos} = props
    return(<div className='photo-container'>
    {photos.map( (photo, i) =>{
        return <div key={i} className='photos'>
            <Link  to={`/photography/${i}`}>
                <img src={photo} alt='photos'/>
            </Link>
            
        </div>
    })}
</div>)
}