import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

export const Listing = () => {
    SwiperCore.use([Navigation]);
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const params = useParams();
    useEffect(()=>{
        const listingId = params.listingId;
        const fetchListing = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/listing/get/${listingId}`);
                const data = await res.json();
                if(data.success == false){
                    setError(true);
                    setLoading(false);
                    console.log(error.message);
                    return;
                } 
                setListing(data);
                setLoading(false);
                setError(false);
            } catch (error) {
                setError(true)
            } 
        }
        fetchListing();
    },[])
    console.log(loading)
    return <main>
        {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
        {error && <p className='text-center my-7 text-2xl text-red-700'>Something went wrong</p>}
        {listing && !loading && !error && <div>
            <Swiper navigation>
                {listing.imageUrls.map((url) =>(
                <SwiperSlide key={url}>
                    <div 
                        className='h-[550px]' 
                        style={{ background: `url(${url}) center no-repeat`, backgroundSize: 'cover'}}>

                    </div>
                </SwiperSlide>))}
            </Swiper>
        </div>
        }
        </main>
}
