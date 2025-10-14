import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 

export default function Category() {
    return (
        <>
            <div className="h-[100%] w-[100%] flex flex-col justify-center items-center">
                <h1 className='mb-6 text-4xl font-bold leading-[1.5] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>
                    Categories
                </h1>
                <div className="bg-transparent shadow-xl/20 h-[65%] w-[50%] flex flex-col rounded-lg gap-4 items-center justify-center">
                    <TextField id="outlined-basic" label="Enter Category" variant="outlined" className='w-[70%]' />
                    <TextField id="outlined-basic" label="Enter Description" variant="outlined" className='w-[70%]' />
                    <Button variant="contained">Add Category</Button>
                </div>
            </div>
        </>
    )
}