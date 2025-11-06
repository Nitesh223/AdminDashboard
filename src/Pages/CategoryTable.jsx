import axios from 'axios'
import { useState, useEffect } from 'react'

const CategoryTable = () => {

    const [categories, setcategories] = useState([])

    const fetchCategories = async () => {
        const response = await axios.get("https://api.escuelajs.co/api/v1/categories")
        const limitdata = response.data.slice(0,6);
        setcategories(limitdata)
    }

    useEffect(() => {
        fetchCategories()
    }, [])
    console.log(categories.data)
    return (
        <>
            <div className='flex m-10 mx-auto'>
                <table className='w-[900px] border border-gray-300 h-[80vh] overflow-auto'>

                    <tr className='bg-gray-100'>
                        <th className='px-4 py-2 border '>Id</th>
                        <th className='px-4 py-2 border '>Category Name</th>
                        <th className='px-4 py-2 border '>Description</th>
                        <th className='px-4 py-2 border '>image</th>
                        <th className='px-4 py-2 border '>Created At</th>
                        <th className='px-4 py-2 border '>Updated At</th>
                    </tr>


                    {categories.map((item, index) =>

                        <tr>
                            <td className='px-4 py-2 border '>{index+1}</td>
                            <td className='px-4 py-2 border '>{item.name}</td>
                            <td className='px-4 py-2 border '>{item.slug}</td>
                            <td className='px-4 py-2 border '><img src={item.image} width={50} height={50} /></td>
                            <td className='px-4 py-2 border '>{item.updatedAt}</td>
                            <td className='px-4 py-2 border '>{item.updatedAt}</td>
                        </tr>

                    )}

                </table>
            </div>



        </>
    )
}

export default CategoryTable
