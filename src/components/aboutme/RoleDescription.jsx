import App from "../../App"
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import {  motion, useAnimation, useScroll, useTransform } from "motion/react"

const compVariants = {
    hidden: {opacity: 0}, 
    show: { 
        opacity:1, 
        transition: {
            staggerChildren: 0.25
        }
    }
}

function RoleDescription() {
    return(

        
        <div id="work" className="bg-[#161513]">
            <motion.div variants={compVariants} initial="hidden" animate="show" className="flex flex-col items-center">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF] text-4xl py-10">Professional experience</h1>
                <ol>
                    <li class="border-l-2 border-purple-600">
                        <div class="md:flex flex-start">
                        <div class="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                            </svg>
                        </div>
                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{margin: "-100px", once: true}} class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-2xl ml-6 mb-10">
                            <div class="flex justify-between mb-4">
                            <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">Swiscom Schweiz AG <br/>DevOps Engineer - Data Analytics</a>
                            <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">12/2022 - NOW </a>
                            </div>
                            <p class="text-gray-700 mb-6">With expertise in managing and enhancing customer data platforms, I have developed custom solutions, automated deployments with Kubernetes, and implemented GitOps for seamless data analytics. My work includes creating data pipelines for cost-efficient visualization, managing Splunk and Elastic-based platforms, and handling CI/CD pipelines for containerized applications.</p>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true">Linux</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true">K8s</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true" >Docker</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true" >Ansible</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true" >Python</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true" >CI/CD</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true" >GitOps</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true" >Bash</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true" >Splunk</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1 mt-2" data-mdb-ripple="true" >Elastic</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1 mt-2" data-mdb-ripple="true" >Cribl</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true" >Data pipelines</button>
                        </motion.div>
                        </div>
                    </li>
                    <li class="border-l-2 border-purple-600">
                        <div class="md:flex flex-start">
                        <div class="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                            </svg>
                        </div>
                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{margin: "-100px", once: true}} class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-2xl ml-6 mb-10">
                            <div class="flex justify-between mb-4">
                            <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">Swiscom Schweiz AG <br/>DevOps Engineer - Data Insights</a>
                            <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">07/2021 - 11/2022</a>
                            </div>
                            <p class="text-gray-700 mb-6">I deliver comprehensive data insights and forwarding services to customers, overseeing a large multi-site Splunk-based big data platform. My work includes automating data onboarding, enhancing monitoring with Prometheus and Grafana, and managing Kubernetes-based applications for optimal integration and performance.</p>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true">Linux</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true">K8s</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true" >Docker</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true" >Ansible</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true" >Python</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true" >CI/CD</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true" >Bash</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true" >Splunk</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1 mt-2" data-mdb-ripple="true">Cribl</button>

                        </motion.div>
                        </div>
                    </li>
                    <li class="border-l-2 border-purple-600">
                        <div class="md:flex flex-start">
                        <div class="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                            </svg>
                        </div>
                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{margin: "-100px", once: true}} class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-2xl ml-6 mb-10">
                            <div class="flex justify-between mb-4">
                            <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">SABAG Luzern AG <br/>System Engineer</a>
                            <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">08/2016 - 06/2021</a>
                            </div>
                            <p class="text-gray-700 mb-6">I manage and enhance IT infrastructure, focusing on network development with Cisco, Aruba, and Checkpoint, and overseeing container operations on Kubernetes and Rancher. Additionally, I drive automation initiatives and collaborate on networking projects to optimize performance and scalability</p>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true">Linux</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true">K8s</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true">Docker</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true">Networking</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true">Checkpoint</button>
                            <button type="button" class="inline-block px-2 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-1" data-mdb-ripple="true">Switching & Routing</button>
                        </motion.div>
                        </div>
                    </li>
                </ol>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF] text-4xl py-20">Ready for a Production Rollout?</h1>
                <p className="mx-auto mt-[-10px] mb-[54px] text-[18px] font-light text-[#C5C5C5] text-center max-w-lg"> Click to simulate the life of a DevOps engineer—deployments don't always go as planned!"</p>
            </motion.div>
           
        </div>
     
    )

}

export default RoleDescription