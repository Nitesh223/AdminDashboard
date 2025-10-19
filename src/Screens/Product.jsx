import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function Product() {
    return (
        <>
            <div className="h-[100%] w-[100%] flex flex-col justify-center items-center">
                <h1 className='mb-0 text-4xl font-sans font-bold leading-[1.5] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>
                    Products
                </h1>
                <div className="bg-transparent shadow-xl  h-[80%] w-[80%] flex flex-row rounded-lg gap-4 items-center justify-center">
                    <div className="flex flex-col justify-center h-[80%] w-[50%] ">
                        <TextField id="outlined-basic" label="Enter Category" variant="outlined" className='w-[70%]'/>
                        <TextField id="outlined-basic" label="Enter Product ID" variant="outlined" className='w-[70%]'/>
                        <TextField id="outlined-basic" label="Enter Price" variant="outlined" className='w-[70%]'/>
                        <TextField id="outlined-basic" label="Enter Offer Price" variant="outlined" className='w-[70%]'/>
                    </div>
                    <div className="flex flex-col justify-center  h-[80%] w-[50%]">
                        <TextField id="outlined-basic" label="Enter SubCategory" variant="outlined" className='w-[70%]'/>
                        <TextField id="outlined-basic" label="Enter Product Description" variant="outlined" className='w-[70%]'/>
                        <TextField id="outlined-basic" label="Enter Offer Price" variant="outlined" className='w-[70%]' />
                        <TextField id="outlined-basic" label="Enter Offer Price" variant="outlined" className='w-[70%]' />
                    </div>
                     <Button
                    className='w-[70%]'
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload files
                    <VisuallyHiddenInput
                        type="file"
                    />
                </Button>
                </div>
                    
            </div>

        </>
    )
}