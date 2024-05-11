

import Link from "next/link"
const KPK = () => {
    return (
<div className="background_KPK KPK mt-0" >
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
    
    
      <div className="herosection max-w-screen-md mt-48">
                <h1 className="h1 text-4xl pl-12"><b>"KPK" : Khebar Pakhton Khaw</b> </h1>
                <p className="p1 text-l pl-6 mt-8 mb-12 "> Khyber Pakhtunkhwa, formerly known as North West Frontier Province, is a province of Pakistan. Located in the northwestern region of the country, Khyber Pakhtunkhwa is the fourth largest province of Pakistan by land area and the third-largest province by population</p>
            </div>
    
    
<Link href="/KPK/KPKculture">
<button className="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 focus:outline-none hover:bg-indigo-600 rounded px-24" > Information about KPK</button></Link>



    
    
    </div>
    )
}

export default KPK
