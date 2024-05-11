
import Link from 'next/link'
const Navbar = () => {
  return (

    <div className="background mt-0" >
      <div className='main flex items-center justify-center  px-20'>

        <div className="logo justify-start mt-3">
          <Link href="/page.tsx"></Link>
        </div>
        
        <ul className="Sin flex mx-10 gap-8 mt-1" >
          <Link href="/Home"><b><u>Home</u></b></Link>
          <Link href="/Sindh"><b><u>Sindh</u></b></Link>
          <Link href="/Punjab"><b><u>Punjab</u></b></Link>
          <Link href="/Balochistan"><b><u>Balochistan</u></b></Link>
          <Link href="/KPK"><b><u>KPK</u></b></Link>
        </ul>
      </div>
    </div>







  )
}

export default Navbar

