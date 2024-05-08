import React from 'react'

const CreateListing = () => {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
        <h1 className='text-3xl font-semibold text-center my-7'>CreateListing</h1>
        <form className='flex flex-col sm:flex-row gap-4'>
            <div className='flex flex-col gap-4 flex-1'>
                <input type='text' placeholder='Name' className='border p-3 rounded-lg' id='name' maxLength="62" minLength="10" required />
                <textarea type='text' placeholder='Description' className='border p-3 rounded-lg' id='description' required />
                <input type='text' placeholder='Address' className='border p-3 rounded-lg' id='address' required />
                <input type='text' placeholder='Name' className='border p-3 rounded-lg' id='name' maxLength="62" minLength="10" required />
                <div className='flex gap-6 flex-wrap'>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='sale' className='w-5'></input> <span>Sell</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='rent' className='w-5'></input> <span>Rent</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='parking' className='w-5'></input> <span>Parking</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='furnished' className='w-5'></input> <span>Furnished?</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='offer' className='w-5'></input> <span>Offer</span>
                    </div>
                </div>
                {/* bedrooms and others div */}
                <div className='flex gap-6 flex-wrap'>
                    <div className='flex items-center gap-2'>
                        <input 
                            className='p-3 boder border-gray-300 rounded-lg' 
                            type='number' 
                            id='bedrooms' 
                            min='1' 
                            max='10' 
                            required 
                        />
                        <p>Bedrooms</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input 
                            className='p-3 boder border-gray-300 rounded-lg' 
                            type='number' 
                            id='bathrooms' 
                            min='1' 
                            max='10' 
                            required 
                        />
                        <p>Bathrooms</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input 
                            className='p-3 boder border-gray-300 rounded-lg' 
                            type='number' 
                            id='regularPrice' 
                            min='0' 
                            max='10000000' 
                            required 
                        />
                        <div className='flex flex-col items-center'>
                            <p>Regular Price</p>
                            <span className='text-xs'>(00$/Month)</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input 
                            className='p-3 boder border-gray-300 rounded-lg' 
                            type='number' 
                            id='discountPrice' 
                            min='0' 
                            max='10000000' required 
                        />
                        <div className='flex flex-col items-center'>
                            <p>Discounted Price</p>
                            <span className='text-xs'>(00$/Month)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col flex-1 gap-4'>
                <p className='font-semibold'>
                    Images:
                    <span className='font-normal text-gray-600 ml-2'>
                        The first image will be cover (max 6)
                    </span>
                </p>
                <div className='flex gap-4'>
                    <input className='p-3 border border-gray-300 rounded w-full' type='file' id='images' accept='image/*' multiple />
                    <button className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>Upload</button>
                </div>
                <bottom className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
                    Create Listing
                </bottom>
            </div>
        </form> 
    </main>
  )
}

export default CreateListing