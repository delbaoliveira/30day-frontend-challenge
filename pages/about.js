import Timer from "@/components/Timer"
import Link from "next/link"
import { ArrowLeftIcon } from "@heroicons/react/solid"

const About = () => {
  return (
    <div className="polka-bg bg-black font-mono h-screen">
      <div className="max-w-3xl mx-auto text-gray-100 pt-10">
        <h1 className="text-3xl py-4">Day 0: About this challenge</h1>
        <p className="my-4">
          The 30 day front-end challenge is inspired by{" "}
          <a
            href="https://www.hackerrank.com/domains/tutorials/30-days-of-code"
            className="text-gray-500"
          >
            HackerRank's 30 days of Code
          </a>{" "}
          and{" "}
          <a href="https://100dayscss.com/" className="text-gray-500">
            100 days of CSS.
          </a>{" "}
          I decided to put a twist on both these challenges by recreating real
          UI elements from around the web for the next 30 days.
        </p>
        <p className="my-4">
          For day 0, I drew inspiration from{" "}
          <a href="http://vercel.com/" className="text-gray-500">
            Vercel's website
          </a>{" "}
          to create the landing and about pages. Some components that might look
          familiar are the gradient transitions of the hero text, the minimalist
          black & white buttons and the black dotted grid background used in the{" "}
          <a href="https://nextjs.org/conf" className="text-gray-500">
            Next.js Conf Website
          </a>
          .
        </p>
        <p className="my-4">
          I also created a countdown timer for accountability. 👇
        </p>
        <div>
          <Timer></Timer>
        </div>
        <div className="flex justify-between">
          <Link href="/">
            <a className=" text-gray-500 group">
              <ArrowLeftIcon className="transform h-4 w-4 text-gray-500 hover:text-gray-700 cursor-pointer transition inline group-hover:-translate-x-1" />{" "}
              Go Back
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
