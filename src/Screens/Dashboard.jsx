


export default function Dashboard() {
    return (
        <>
            <div className="w-full h-[120px]  mt-4 flex items-center justify-around space-x-5">
                <div className="h-[90%] w-[20%] rounded-lg shadow-xl text-white text-2xl font-bold text-center pt-3 bg-blue-600">
                    <h1>Total Category</h1>
                    <p>96</p>
                </div>
                <div className="h-[90%] w-[20%] rounded-lg shadow-xl text-white text-2xl font-bold text-center pt-3 bg-yellow-400">
                    <h1>Total SubCategory</h1>
                    <p>384</p>
                </div>
                <div className="h-[90%] w-[20%] rounded-lg shadow-xl text-white text-2xl font-bold text-center pt-3 bg-purple-500">
                    <h1>Total Products</h1>
                    <p>3790</p>
                </div>
                <div className="h-[90%] w-[20%] rounded-lg shadow-xl text-white text-2xl font-bold text-center pt-3 bg-green-500">
                    <h1>Total Orders</h1>
                    <p>52</p>
                </div>
            </div>
           

        </>
    )
}