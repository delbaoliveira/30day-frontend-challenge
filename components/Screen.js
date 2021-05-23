import { ArrowRightIcon } from "@heroicons/react/solid"
import Timer from "@/components/Timer"

const Screen = () => {
  return (
    <div className="md:mt-32 mt-20 shadow-2xl rounded-lg w-11/12 mx-auto">
      {/* Browser UI*/}
      <div className="bg-gray-100 rounded-t-lg px-4 py-3 flex justify-between items-center">
        <div className=" justify-between w-12 md:flex hidden">
          <div className="rounded-full bg-gray-300 h-3 w-3"></div>
          <div className="rounded-full bg-gray-300 h-3 w-3"></div>
          <div className="rounded-full bg-gray-300 h-3 w-3 "></div>
        </div>
        <div className="bg-white md:flex-grow min-w-0 md:mx-4 mx-2 rounded-md py-1">
          <p className="px-4 text-gray-500 truncate">
            <span className="text-gray-700">Day 0:</span> Build and deploy "30
            days of front-end"
          </p>
        </div>
        <div className="mr-2">
          <ArrowRightIcon className="transform h-4 w-4 text-gray-500 hover:text-gray-700 cursor-pointer hover:translate-x-2 transition" />
        </div>
      </div>

      {/* Browser Screen*/}
      <div className="bg-white mx-auto my-auto rounded-lg md:h-[500px] h-80">
        <Timer></Timer>
      </div>
    </div>
  )
}

export default Screen
