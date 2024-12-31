import App from "../../App"
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

function NavBar() {
    return(
        <div>
            <nav class="relative select-none bg-[#161513] w-full">
                <div class="">
                    <div class="flex justify-center items-center content-center p-5">
                    <a href="#top" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-[#C5C5C5] no-underline flex items-center hover:text-purple-600">About me</a>
                    <a href="#work" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-[#C5C5C5] no-underline flex items-center  hover:text-purple-600">Experience</a>
                    <a href="#connect" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-[#C5C5C5] no-underline flex items-center  hover:text-purple-600">Let's Connect</a>
                    
                    </div>
                </div>
            </nav>
        </div>


    )

}
   

export default NavBar