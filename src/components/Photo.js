import '../styles/styles.css'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';

export default function Photo(props){

    const { photos }= props;
        
    const [photo, setPhoto] = useState();

    const { id } = useParams();
    

    useEffect(()=>{
        setPhoto(photos[id].image)
    }, [id])

    return(<div className='single-photo'>
        <img src={photo} alt='cat' />
    </div>)
}

