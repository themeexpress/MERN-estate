import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Search = () => {
    const navigate = useNavigate();
    const [searchCondition, setSearchCondition] = useState({
        searchTerm: '',
        type: 'all',
        parking: false,
        offer: false,
        furnished: false,
        sort: 'created_at',
        order: 'desc'
    });
    const [loading, setLoading] = useState(false);
    const [listings, setListings] = useState([]);
    console.log(listings);
    useEffect(()=>{
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        const typeFromUrl = urlParams.get('type');
        const parkingFromUrl = urlParams.get('parking');
        const furnishedFromUrl = urlParams.get('furnished');
        const offerFromUrl = urlParams.get('offer');
        const sortFromUrl = urlParams.get('sort');
        const orderFromUrl = urlParams.get('order');
        if(
            searchTermFromUrl || 
            typeFromUrl || 
            parkingFromUrl || 
            furnishedFromUrl || 
            offerFromUrl || 
            sortFromUrl ||
            orderFromUrl
        ){
            setSearchCondition({
                searchTerm: searchTermFromUrl || '',
                type: typeFromUrl || 'all',
                parking: parkingFromUrl === 'true' ? true : false,
                furnished: furnishedFromUrl === 'true' ? true : false,
                offer: offerFromUrl === 'true' ? true : false,
                sort: sortFromUrl || 'created_at',
                order: orderFromUrl || 'desc'
            });
        }

        //Fetching data
        const fetchListings = async () => {
            setLoading(true);
            const searchQuery = urlParams.toString();
            const res = await fetch(`/api/listing/get?${searchQuery}`);
            const data = await res.json();
            setListings(data);
            setLoading(false);
        }
        fetchListings();

    },[location.search]);
    const handleChange = (e) => {
        if(e.target.id === 'all' || e.target.id === 'rent' || e.target.id === 'sale'){
            setSearchCondition({...searchCondition, type: e.target.id})
        }
        if(e.target.id === 'searchTerm'){
            setSearchCondition({...searchCondition, searchTerm: e.target.value});
        }
        if(e.target.id === 'parking' || e.target.id === 'furnished' || e.target.id === 'offer'){
            setSearchCondition({...searchCondition, [e.target.id]: 
                e.target.checked || e.target.checked === 'true' ? true : false,
            })
        }
        if(e.target.id === 'sort_order'){
            const sort = e.target.value.split('_')[0] || 'created_at';
            const order = e.target.value.split('_')[1] || 'desc';
            setSearchCondition({...searchCondition, sort, order});
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParam = new URLSearchParams();
        urlParam.set('searchTerm', searchCondition.searchTerm)
        urlParam.set('type', searchCondition.type)
        urlParam.set('parking', searchCondition.parking)
        urlParam.set('furnished', searchCondition.furnished)
        urlParam.set('offer', searchCondition.offer)
        urlParam.set('sort', searchCondition.sort)
        urlParam.set('order', searchCondition.order)
        const searchQuery = urlParam.toString();
        navigate(`/search?${searchQuery}`);
    }
    return (
        <div className='flex flex-col md:flex-row'>
            <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
                <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
                    <div className="flex items-center gap-2">
                        <label className='whitespace-nowrap font-semibold'> Search Term: </label>
                        <input 
                            type='text' 
                            placeholder='search....'
                            id='searchTerm'
                            className='border rounded-lg p-3 w-full'
                            value={searchCondition.searchTerm}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex gap-2 flex-wrap items-center">
                        <label className='font-semibold'>Type : </label>
                        <div className="flex gap-2">
                            <input 
                                type='checkbox' 
                                id='all'
                                className='w-5'
                                onChange={handleChange}
                                checked={searchCondition.type === 'all'}
                            />
                            <span>Rent and Sale</span>
                        </div>
                        <div className="flex gap-2">
                            <input 
                                type='checkbox' 
                                id='rent'
                                className='w-5'
                                onChange={handleChange}
                                checked={searchCondition.type === 'rent'}
                            />
                            <span>Rent</span>
                        </div>
                        <div className="flex gap-2">
                            <input 
                                type='checkbox' 
                                id='sale'
                                className='w-5'
                                onChange={handleChange}
                                checked={searchCondition.type === 'sale'}
                            />
                            <span>Sale</span>
                        </div>
                        <div className="flex gap-2">
                            <input 
                                type='checkbox' 
                                id='offer'
                                className='w-5'
                                onChange={handleChange}
                                checked={searchCondition.offer}
                            />
                            <span>Offer</span>
                        </div>
                    </div>
                    <div className="flex gap-2 flex-wrap items-center">
                        <label className='font-semibold'>Amenities : </label>
                        <div className="flex gap-2">
                            <input 
                                type='checkbox' 
                                id='parking'
                                className='w-5'
                                onChange={handleChange}
                                checked={searchCondition.parking}
                            />
                            <span>Parking</span>
                        </div>
                        <div className="flex gap-2">
                            <input 
                                type='checkbox' 
                                id='furnished'
                                className='w-5'
                                onChange={handleChange}
                                checked={searchCondition.furnished}
                            />
                            <span>Furnished</span>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <label className='font-semibold'>Sort : </label>
                        <select id='sort_order'
                        onChange={handleChange}
                        defaultValue={'created_at_desc'}
                        className='p-3'>
                            <option value='regularPrice_desc'>Price high to low</option>
                            <option value='regularPrice_asc'>Price low to high</option>
                            <option value='createdAt_desc'>Latest</option>
                            <option value='createdAt_asc'>Oldest</option>
                        </select>
                    </div>
                    <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>Search</button>
                </form>
            </div>
            <div className="">
                <h1 className='text-3xl font-semibold border-b p-3 text-slate-700 mt-5'>Listing Result</h1>
            </div>
        </div>
    )
}

export default Search