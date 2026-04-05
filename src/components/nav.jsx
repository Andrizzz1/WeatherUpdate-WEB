import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/outline'
function NavBar(){
    return<nav className='flex justify-around p-4'>
            <p>Weather Update</p>
            <div className='flex bg-gray-300 rounded-2xl gap-1 p-2'>
                <MagnifyingGlassIcon className='w-5 text-gray-400'/>
                <input className='outline-0 w-xl' type="text" placeholder="Search for a city or airport"/>
            </div>
            <MapPinIcon className="w-6 cursor-pointer" />
        </nav>
}


export default NavBar