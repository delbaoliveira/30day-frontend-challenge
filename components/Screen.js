import { ArrowRightIcon } from "@heroicons/react/solid"
import Link from "next/link"

const Screen = ({ day, description, link, children }) => {
  return (
    <Link href={link ? `/${link}` : "/"}>
      <a>
        <div className="shadow-xl rounded-lg w-full mx-auto transition hover:shadow-2xl transform hover:scale-[1.02]">
          {/* Browser UI*/}
          <div className="bg-gray-100 rounded-t-lg px-4 py-3 flex justify-between items-center">
            <div className="space-x-1 w-12 md:flex hidden">
              <div className="rounded-full bg-gray-300 h-3 w-3"></div>
              <div className="rounded-full bg-gray-300 h-3 w-3"></div>
              <div className="rounded-full bg-gray-300 h-3 w-3 "></div>
            </div>
            <div className="bg-white md:flex-grow min-w-0 md:mx-4 mx-2 rounded-md py-1">
              <p className="px-4 text-gray-500 truncate">
                <span className="text-gray-700">Day {day}:</span> {description}
              </p>
            </div>
            <div className="mr-2">
              <ArrowRightIcon className="transform h-4 w-4 text-gray-500 hover:text-gray-700 hover:translate-x-2 transition" />
            </div>
          </div>
          {/* Browser Screen*/}
          <div className="bg-white mx-auto my-auto rounded-lg h-72">
            {children}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Screen
