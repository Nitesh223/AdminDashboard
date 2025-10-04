import image from '../assets/image.png';
import logo from '../assets/logo.png'
import { Menu, Search, Settings, Bell, User, Pointer, SunMedium, ShoppingBag, ChartNoAxesCombined, MessageCircleQuestionMark, ShoppingCart, ChartColumnStacked, ChartBarStacked, UsersRound, FileText } from "lucide-react";



function Header() {
    return (
        <>
            <div className="flex">
                {/* Sidebar */}


                <div className='w-[15%]  h-[100vh] bg-zinc-900 flex flex-col gap-2.5'>
                    <div className='w-full h-16 flex items-center justify-center'>
                        <img className='w-[120px] h-auto object-cover' src={logo} alt="#" />
                    </div>
                    <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-10 gap-3 text-white font-mono'><ChartColumnStacked size={20} />Subcategory</div>
                    <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-10 gap-3 text-white font-mono'><ChartBarStacked size={20} />Category</div>
                    <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-10 gap-3 text-white font-mono'><ShoppingCart size={20} />Products</div>
                    <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-10 gap-3 text-white font-mono'><ShoppingBag size={20} />Orders</div>
                    <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-10 gap-3 text-white font-mono'><UsersRound size={20} />Customers</div>
                    <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-10 gap-3 text-white font-mono'><FileText size={20} />Reports</div>
                    <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-10 gap-3 text-white font-mono'><ChartNoAxesCombined size={20} />Analytics</div>
                    <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-10 gap-3 text-white font-mono'><Settings size={20} />Settings</div>
                    <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-10 gap-3 text-white font-mono'><MessageCircleQuestionMark size={20} />Support</div>
                    <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-10 gap-3 text-white font-mono'><SunMedium size={20} />Theme</div>
                </div>

                {/* Navbar */}
                <div className="w-[85%]  h-16 bg-linear-to-t from-sky-400 to-indigo-500 flex flex-row items-center justify-between">

                    <div className='flex items-center gap-6 ml-2 md:ml-20'>
                        <h1 className='font-bold text-white text-3xl hidden md:block'>Nitesh</h1>
                        <div class="w-[42px] h-[42px] bg-center bg-cover rounded-[50%] cursor-pointer transition-all duration-200 ease-out hover:scale-110 md:hidden">

                            <img className='rounded-[50%]' src={image} alt="" />
                        </div>
                        <div className='flex gap-4 items-center ml-3'>
                            <Menu size={20} className='cursor-pointer hidden md:block' />
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
            </div>




        </>
    )
}

export default Header