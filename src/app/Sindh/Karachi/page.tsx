import React from 'react'
import Link from 'next/link'

const Karachi = () => {
    return (
        <div className="background_karachi mt-0" >
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
                <h1 className="h1 text-4xl pl-12"><b>"Karachi" : City of Lights </b></h1>
                <p className="p1 text-l pl-6 mt-8 mb-12 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore est, amet iste eos nihil? Adipisci, reiciendis eveniet consequatur nulla nobis libero accusantium deleniti repellendus. Accusantium totam dignissimos corrupti fugiat.
                </p>
            </div>

            <div className="Karachi w-full  justify-center items-center space-between  p-14">

                <br /><br />
                <h1 className="text-4xl justify-start text-white mb-10">Sindh Culture</h1>
                <div className="flex grid-rows-4">
                    <div className="m-4" id="karachi_img1"></div>
                    <div className="m-4" id="karachi_imgs3"></div>
                    <div className="m-4" id="karachi_img2"></div>
                    <div className="m-4" id="karachi_imgs4"></div>
                </div>
            </div>


            <Link href="/Sindh/Karachi">
                <button className="flex mx-auto mt-6 text-black bg-green-500 border-0 py-1 focus:outline-none hover:bg-indigo-600 rounded px-24" > Back to Top </button>
            </Link>

            <Link href="/Home">
                <button className="flex mx-auto mt-6 text-black bg-green-500 border-0 py-1 focus:outline-none hover:bg-indigo-600 rounded px-24" > Back to Home </button>
            </Link>






        </div>
    )
}

export default Karachi
