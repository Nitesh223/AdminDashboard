
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button'; 

const Category = [
    {
        value: 'Electronics',
        label: 'Electronics',
    },
    {
        value: 'Grocery & Essentials',
        label: 'Grocery & Essentials',
    },
    {
        value: 'Fashion',
        label: 'Fashion',
    },
    {
        value: 'Home & Kitchen',
        label: 'Home & Kitchen',
    },
    {
        value: '',
        label: 'Laptop',
    },
    {
        value: 'Books & Stationery',
        label: 'Books & Stationery',
    },
];

export default function SubCategory() {
    return (
        <>
            <div className="h-[100%] w-[100%] flex flex-col justify-center items-center">
                <h1 className='mb-6 text-4xl font-bold leading-[1.5] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>
                    SubCategories
                </h1>
                <div className="bg-transparent shadow-xl  h-[70%] w-[50%] flex flex-col rounded-lg gap-2 items-center justify-center">


                    <TextField
                        id="outlined-select-category"
                        select
                        label="Parent Category"
                        defaultValue="Electronics"
                        // helperText="Please select Category"
                        className='w-[70%]'
                        InputProps={{
                            style: { padding: '-4px 0px' }
                        }}>
                        {Category.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField id="outlined-basic" label="Enter SubCategory" variant="outlined" className='w-[70%] ' />
                    <TextField id="outlined-basic" label="Enter Description" variant="outlined" className='w-[70%]' />
                    
                    <Button variant="contained">Add SubCategory</Button>



                </div>
            </div>
        </>
    )
}