import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/outline'
function NavBar({city, setCity, onSearch}){
    return<nav className='flex justify-around p-4'>
            <p>Weather Update</p>
            <div className='flex bg-gray-300 rounded-2xl gap-1 p-2'>
                <input 
                    value={city}
                    onChange={(e)=>{setCity(e.target.value)}}
                    className='outline-0 w-xl' 
                    type="text" 
                    placeholder="Search for a city"/>
                <button onClick={onSearch} className='cursor-pointer'>
                    <MagnifyingGlassIcon className='w-5 text-gray-400'/>
                </button>
                
            </div>
            <MapPinIcon className="w-6 cursor-pointer" />
        </nav>
}


export default NavBar