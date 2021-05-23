import Button from "@/components/Button"
import { useInterval } from "react-use"
import React from "react"
import cx from "clsx"

const Hero = () => {
  const [currentSlide, setSlide] = React.useState(0)

  const totalSlides = 3

  useInterval(() => {
    if (totalSlides - 1 === currentSlide) {
      setSlide(0)
    } else {
      setSlide(currentSlide + 1)
    }
  }, 2000)

  return (
    <div className="text-center mt-24">
      {/* TO DO: Abstract this into its own component */}
      <h1 className="font-extrabold md:text-8xl text-6xl leading-tight">
        <span className="relative block">
          <span
            className={cx("absolute text-gray-800 transition duration-1000", {
              "opacity-0": currentSlide === 0,
              "opacity-100": currentSlide !== 0,
            })}
            aria-hidden={true}
          >
            Thirty Day
          </span>
          <span
            className={cx(
              "bg-clip-text text-transparent bg-gradient-to-r  from-green-400 to-blue-500",
            )}
          >
            Thirty Day
          </span>
        </span>
        <span className="relative block">
          <span
            className={cx("absolute text-gray-800 transition duration-1000", {
              "opacity-0": currentSlide === 1,
              "opacity-100": currentSlide !== 1,
            })}
            aria-hidden={true}
          >
            Front-End
          </span>
          <span
            className={cx(
              "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
            )}
          >
            Front-End
          </span>
        </span>

        <span className="relative block">
          <span
            className={cx("absolute text-gray-800 transition duration-1000", {
              "opacity-0": currentSlide === 2,
              "opacity-100": currentSlide !== 2,
            })}
            aria-hidden={true}
          >
            Challenge
          </span>
          <span
            className={cx(
              "bg-clip-text text-transparent bg-gradient-to-l from-yellow-400 via-red-500 to-pink-500",
            )}
          >
            Challenge
          </span>
        </span>
      </h1>

      <div className="text-center">
        <p className="text-gray-600 text-lg mt-10">
          Welcome! 30 days of front-end is a series of daily challenges
          recreating simple yet delightful UI elements using CSS and JavaScript.
        </p>
      </div>
      <div className="mt-10">
        <Button>Source code</Button>
        <Button>Meet the developer</Button>
      </div>
    </div>
  )
}

export default Hero
