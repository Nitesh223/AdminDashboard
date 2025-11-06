
import Chart from "../Components/Chart"
import LineChart1 from "../Components/LineChart1"
import PieChart1 from "../Components/PieChart1"
import PieChart2 from "../Components/PieChart2"

export default function Dashboard() {
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="w-full h-[120px]  mt-4 mb-4 flex items-center justify-around space-x-5">
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


                <div className="flex flex-row ">
                    <div className="h-[450px] w-[60%]  pt-2 mt-5 ml-0.5 m">
                        <h1 className="text-center text-2xl font-semibold">
                            Sales Report (INR)
                        </h1>
                        <Chart/>
                    </div>
                    <div className="h-[450px] w-[40%]  flex flex-col">
                        <div className="h-[50%] flex flex-row">
                            <div className="h-full w-[50%]"><PieChart1/></div>
                            <div className="h-full w-[50%] "><PieChart2/></div>
                            
                        </div>
                        <div className="h-[50%] ">
                          <LineChart1/>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}