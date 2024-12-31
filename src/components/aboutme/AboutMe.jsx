import App from "../../App"
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import profilepicture from '../../assets/profile_picture.jpeg'


function Aboutme() {
  return (
    <div className="flex flex-col min-h-screen bg-[#161513]">
      <div className="mx-auto">
        <div className="mx-auto mb-[40px] mt-[98px] h-[213px] w-[213px] overflow-hidden rounded-full bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
          <img src={profilepicture} alt="" />
        </div>
        <h1 className="mx-auto max-w-screen-sm text-center text-[55px] font-extrabold text-white max-w-3xl justify-center">
          Hi, I'm Loris <br />
          I work in Tech and <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">love it!</span>
        </h1>
        <p className="mx-auto mt-[40px] mb-[54px] text-[18px] font-light text-[#C5C5C5] text-center max-w-3xl">
        I'm Loris Senneca, a passionate DevOps Engineer with a strong focus on data analytics and automation. With years of experience working on large-scale platforms, I've honed my skills in Kubernetes, Splunk, and various data-processing tools. My journey in tech has been driven by a commitment to delivering value through innovative, scalable solutions. Currently, at Swisscom, I lead initiatives that enhance data visibility and optimize infrastructure for B2B clients. Beyond my technical expertise, I take pride in understanding client needs and aligning them with efficient, automated solutions. Let's connect and explore how technology can continue to transform the way we work!
        </p>
      </div>
      <div id="connect">
        <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF] text-4xl py-10">Let's connect</h1>
        <p className="mx-auto mt-[-10px] mb-[54px] text-[18px] font-light text-[#C5C5C5] text-center max-w-lg">
        Have a question, an idea, or just want to connect? Drop me a message—I’d love to hear from you!"
        </p>

        <div class="flex flex-wrap mt-10 justify-center">
        <div class="m-3">
          <a href="https://linkedin.com/in/loris-senneca" target="_blank" title="Follow me on LinkedIn"
             class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            <span class="mx-auto">LinkedIn</span>
          </a>
        </div>
        <div class="m-3">
          <a href="https://leetcode.com/u/lsenneca/" target="_blank" title="Follow me on LeetCode"
             class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            <span class="mx-auto">LeetCode</span>
          </a>
        </div>
        <div class="m-3">
          <a href="https://github.com/lorissenneca" target="_blank" title="Follow me on GitHub"
             class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            <span class="mx-auto">GitHub</span>
          </a>
        </div>
      </div>
      </div>
    </div>

    
  )
}

export default Aboutme