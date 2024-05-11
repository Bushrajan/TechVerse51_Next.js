import Link from "next/link"
const Sindh = () => {
  return (
    <div className="background_sindh mt-0" >
      <div className='main flex items-center justify-center  px-20'>

        <div className="logo justify-start mt-3">
          <Link href="/page.tsx"></Link>
        </div>

        <ul className="flex mx-10 gap-8 mt-1" >
          <Link href="/Home"><b><u>Home</u></b></Link>
          <Link href="/Sindh"><b><u>Sindh</u></b></Link>
          <Link href="/Punjab"><b><u>Punjab</u></b></Link>
          <Link href="/Balochistan"><b><u>Balochistan</u></b></Link>
          <Link href="/KPK"><b><u>KPK</u></b></Link>
        </ul>
      </div>

      <div className="herosection max-w-screen-md mt-48">
        <h1 className="h1 text-4xl pl-12"><b>"Sindh" : Arive of Islam</b></h1>
        <p className="p1 text-l pl-6 mt-8 mb-12 "> Sindh has an agriculture-based economy and produces fruits, consumer goods, and vegetables. Sindh is known for its culture, contemporary with the civilizations of ancient Egypt and Mesopotamia, is home to two UNESCO World Heritage Sites - the Historical Monument at Makli, and the Archaeological Ruins at Mohenjodaro. The word Sindh is a Persian derivative of the Sanskrit term Sindhu, meaning "river" - a reference to Indus River. Southworth suggests that the name Sindhu is in turn derived from Cintu, a Dravidian word for date palm, a tree commonly found in Sindh.</p>
      </div>


      <Link href="/Sindh/Karachi">
        <button className="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 focus:outline-none hover:bg-indigo-600 rounded px-24" > Information about Sindh </button></Link>









    </div>
  )
}

export default Sindh
