import logo from '../assets/logo.png'
import { useNavigate , Link } from 'react-router-dom';
import { Settings, SunMedium, ShoppingBag, ChartNoAxesCombined, MessageCircleQuestionMark, ShoppingCart, ChartColumnStacked, ChartBarStacked, UsersRound, FileText ,LayoutDashboard } from "lucide-react";


export default function SideBar() {
    var navigate = useNavigate()

    return (
        <>
            <div className='w-[15%]  h-[100vh] bg-zinc-900 hidden flex-col gap-2.5  md:flex'>
                <div className='w-full h-16 flex items-center justify-center'>
                    <img className='w-[120px] h-auto object-cover' src={logo} alt="#" />
                </div>
                <div onClick={()=> navigate("/dashboard")} className='w-full h-[40px] hover:bg-zinc-700  cursor-pointer flex items-center pl-2 md:pl-5 gap-3 text-white font-sans font-semibold md:text-2xl'><LayoutDashboard size={25}/>Dashboard</div>
                <div onClick={()=> navigate("/category")} className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-2 md:pl-10 gap-3 text-white font-sans'><ChartBarStacked size={20} />Category</div>
                <div onClick={()=> navigate("/subcategory")} className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-2 md:pl-10 gap-3 text-white font-sans'><ChartColumnStacked size={20} />Subcategory</div>
                <div onClick={()=> navigate("/product")} className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-2 md:pl-10 gap-3 text-white font-sans'><ShoppingCart size={20} />Products</div>
                <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-2 md:pl-10 gap-3 text-white font-sans'><ShoppingBag size={20} />Orders</div>
                <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-2 md:pl-10 gap-3 text-white font-sans'><UsersRound size={20} />Customers</div>
                <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-2 md:pl-10 gap-3 text-white font-sans'><FileText size={20} />Reports</div>
                <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-2 md:pl-10 gap-3 text-white font-sans'><ChartNoAxesCombined size={20} />Analytics</div>
                <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-2 md:pl-10 gap-3 text-white font-sans'><Settings size={20} />Settings</div>
                <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-2 md:pl-10 gap-3 text-white font-sans'><MessageCircleQuestionMark size={20} />Support</div>
                <div className='w-full h-[35px] hover:bg-zinc-700  cursor-pointer flex items-center pl-2 md:pl-10 gap-3 text-white font-sans'><SunMedium size={20} />Theme</div>
            </div>


        </>
    )
}