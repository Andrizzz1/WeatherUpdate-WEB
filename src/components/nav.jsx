import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/outline'
function NavBar({city, setCity, onSearch}){
    return<nav className='flex justify-around p-4 max-md:justify-between max-sm:justify-center gap-10 '>
            <p className='font-semibold uppercase max-sm:text-sm'>Weather <br className='sm:hidden' /> Update</p>
            <div className='flex justify-between bg-gray-300 rounded-2xl gap-1 p-2 w-5/12 max-md:p-1 '>
                <input 
                    value={city}
                    onChange={(e)=>{setCity(e.target.value)}}
                    className='outline-0 w-full min-w-0' 
                    type="text" 
                    placeholder="Search for a city"/>
                <button onClick={onSearch} className='cursor-pointer'>
                    <MagnifyingGlassIcon className='w-5 text-gray-400'/>
                </button>
                
            </div>
            <div className='flex items-center shrink-0'>
                <MapPinIcon className="w-6 cursor-pointer" />
            </div>
        </nav>
}


export default NavBar