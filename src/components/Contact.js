

export default function Contact(props){

    const {socials} = props
    console.log(socials)
    return(<div className='social-container'>
        <a href='https://www.instagram.com/lowkeyretrofit/'>
            <img src={socials.ig} alt='ig'/>
        </a>
        <a href='https://www.linkedin.com/in/rafael-mendoza-29a142215/'>
            <img src={socials.linkedin} alt='linkedin'/>
        </a>
        <a href='https://twitter.com/Lowkeyretrofit'>
            <img src={socials.twitter} alt='twitter'/>
        </a>
        <a href='https://github.com/Retrofitt'>
            <img src={socials.github} alt='github'/>
        </a>
    </div>)
}