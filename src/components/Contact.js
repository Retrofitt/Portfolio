

export default function Contact(props){

    const {socials} = props

    return(<div className='social-container'>
        <a href='https://www.instagram.com/lowkeyretrofit/'>
            <img src={socials[0]} alt='ig'/>
        </a>
        <a href='https://www.linkedin.com/in/rafael-mendoza-29a142215/'>
            <img src={socials[1]} alt='linkedin'/>
        </a>
        <a href='https://twitter.com/Lowkeyretrofit'>
            <img src={socials[2]} alt='twitter'/>
        </a>
        <a href='https://github.com/Retrofitt'>
            <img src={socials[3]} alt='github'/>
        </a>
    </div>)
}