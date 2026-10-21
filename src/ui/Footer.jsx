import {FaMapLocation} from "react-icons/fa6";
import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaPhone,
    FaTelegram,
    FaWhatsapp, FaYoutube
} from "react-icons/fa";
import {Link} from "react-router-dom";
import LineSeparator from "./LineSeparator.jsx";

function Footer() {
    return (
        <footer className='flex justify-center relative '>
            <img className='h-full w-full absolute bottom-0 -z-1' src="/img/bg/bg4.png" alt=""/>
            <div className='w-full flex flex-col bg-slate-800/90 pt-2 px-4'>
                <div className="mx-auto max-w-7xl ">

                    <section className="flex items-center px-5 gap-4 my-2">
                        <img className='w-25' src="/img/logo/paypal.png" alt=""/>
                        <img className='w-25' src="/img/logo/skrill.png" alt=""/>
                        <h3 className='font-bold text-xl'>
                            As one of the oldest online As one of the oldest online
                            As one of the oldest online As one of the oldest online
                            As one of the oldest online As one of the oldest online
                            As one of the oldest online As one of the oldest online
                        </h3>
                    </section>

                    <LineSeparator/>

                    <section className="flex justify-between items-center">
                        <Link to="#"><img src="/img/logo/activision.png" alt=""/></Link>
                        <Link to="#"><img src="/img/logo/EA.png" alt=""/></Link>
                        <Link to="#"><img src="/img/logo/epic games.png" alt=""/></Link>
                        <Link to="#"><img src="/img/logo/rockstar.png" alt=""/></Link>
                        <Link to="#"><img src="/img/logo/ubisoft.png" alt=""/></Link>
                    </section>

                    <LineSeparator/>

                    <section className="flex items-center px-5">
                        <div className="w-2/5 px-5">
                            <p className='flex gap-2 my-2'>
                                <FaMapLocation/>
                                Florida - Fort Myres - 2952 Wilinson Court
                            </p>
                            <p className='flex gap-2 my-2'>
                                <FaPhone/>
                                239-717-4985
                            </p>
                            <p className='flex gap-2 my-2'>
                                <FaEnvelope/>
                                info@SiteGame.com
                            </p>

                        </div>

                        <div className="w-3/5 flex items-center px-5">
                            <ul className='w-full'>
                                <li className='py-1'><Link to="#"> Support </Link></li>
                                <li className='py-1'><Link to="#"> Contact Us </Link></li>
                                <li className='py-1'><Link to="#"> About </Link></li>
                                <li className='py-1'><Link to="#"> Law </Link></li>
                            </ul>

                            <ul className='w-full'>
                                <li className='py-1'><Link to="#"> News </Link></li>
                                <li className='py-1'><Link to="#"> Stories </Link></li>
                                <li className='py-1'><Link to="#"> Blog </Link></li>
                                <li className='py-1'><Link to="#"> Date </Link></li>
                            </ul>

                            <ul className='w-full'>
                                <li className='py-1'><Link to="#"> Windows </Link></li>
                                <li className='py-1'><Link to="#"> Mac Os </Link></li>
                                <li className='py-1'><Link to="#"> XBOX </Link></li>
                                <li className='py-1'><Link to="#"> Sony </Link></li>
                            </ul>

                            <ul className='w-full'>
                                <li className='py-1'><Link to="#"> Games </Link></li>
                                <li className='py-1'><Link to="#"> Gift Cards </Link></li>
                                <li className='py-1'><Link to="#"> Offers </Link></li>
                                <li className='py-1'><Link to="#"> New Games </Link></li>
                            </ul>
                        </div>
                    </section>

                    <LineSeparator/>

                    <section className="flex items-center justify-between px-5">
                        <h3 className='bg-brand-4 rounded-tr-xl rounded-tl-xl px-5 py-2.5 text-center font-bold text-xl'>All
                            Rights Reserved To Hossein Copy Right 2026</h3>
                        <div className="flex items-center gap-4">
                            <Link to="#" className="text-4xl">
                                <FaTelegram className='fill-blue-500'/>
                            </Link>
                            <Link to="#" className="text-4xl">
                                <FaFacebook className='fill-sky-500'/>
                            </Link>
                            <Link to="#" className="text-4xl">
                                <FaInstagram className='fill-pink-700 '/>
                            </Link>
                            <Link to="#" className="text-4xl">
                                <FaWhatsapp className='fill-green-500'/>
                            </Link>
                            <Link to="#" className="text-4xl">
                                <FaYoutube className='fill-red-500'/>
                            </Link>
                        </div>

                    </section>
                </div>
            </div>
        </footer>
    );
}

export default Footer;