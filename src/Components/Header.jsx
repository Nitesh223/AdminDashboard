import image from '../assets/image.png';

import { Menu, Search, Settings, Bell, User, Pointer, SunMedium, ShoppingBag, ChartNoAxesCombined, MessageCircleQuestionMark, ShoppingCart, ChartColumnStacked, ChartBarStacked, UsersRound, FileText } from "lucide-react";



function Header() {
    return (
        <>

            <div className="w-[100%] md:w-[85%]  h-16 shadow-xl bg-sky-400 flex flex-row items-center justify-between fixed top-0 right-0">

                <div className='flex items-center gap-6 ml-2 md:ml-20'>
                    <h1 className='font-bold text-black text-3xl hidden md:block'>Nitesh</h1>
                    <div class="w-[42px] h-[42px] bg-center bg-cover rounded-[50%] cursor-pointer transition-all duration-200 ease-out hover:scale-110 md:hidden">

                        <img className='rounded-[50%]' src={image} alt="" />
                    </div>
                    <div className='flex gap-4 items-center ml-3'>
                        <Menu size={20} className='cursor-pointer block md:hidden' />
                        <div className="relative">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-black">
                                <Search size={14} className='cursor-pointer' />
                            </span>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="border border-slate-800 rounded-3xl py-1 bg-white/20  pl-8 pr-3 w-full outline-none"
                            />
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-6 mr-2 md:mr-20'>
                    <div className='flex gap-4'>
                        {/* <Settings size={20} className='cursor-pointer hidden md:block' /> */}
                        <Bell size={20} className='cursor-pointer hidden md:block' />
                        <User size={20} className='cursor-pointer hidden md:block' />
                    </div>
                    <button className="py-2 px-2 mr-2 h-10 transition-all font-semibold rounded-lg text-white cursor-pointer bg-green-600 border-blue-600 hover:brightness-110 hover:-translate-y-[1px]">Login/Signup</button>
                </div>
            </div>





        </>
    )
}

export default Header