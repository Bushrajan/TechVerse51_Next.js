import Link from "next/link"
const Home = () => {
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

            <div className="herosection max-w-screen-md mt-48">
                <h1 className="h1 text-4xl pl-14"><b>"Pakistan" : Islamic Republic of Pakistan</b></h1>
                <p className="p1 text-l pl-10 mt-8 ">Pakistan came into existence as a result of the Pakistan Movement, which aimed for the creation of an independent Muslim state in the north-western regions of British India via partition. The movement was led by the All-India Muslim League under the leadership of Muhammad Ali Jinnah. Pakisan has 4 Provencess

                    <Link href="/Sindh"> <u><i><b> <br /> Sindh , </b></i> </u> </Link>
                    <Link href="/Punjab"> <u><i><b> Punjab , </b></i> </u> </Link>
                    <Link href="/Balochistan"> <u><i><b> Balochistan ,</b></i> </u> </Link>
                    <Link href="/KPK"> <u><i><b> KPK .</b></i> </u> </Link>
                    <br />Each Provence has its unique culture and values ....
                </p>
            </div>

        </div>
    )
}

export default Home
