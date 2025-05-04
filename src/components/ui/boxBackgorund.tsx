import { cn } from "@/lib/utils"
import { InfiniteMovingCards } from "./infinite-moving-cards"
import { Compare } from "./compare"
import { TextGenerateEffect } from "./text-generate-effect"
import Image from "next/image"
import { FlipWords } from "./flip-words"


const testimonials = [
  {
    quote:
      "RAMANSH",
  },
  {
    quote:
    "CHAUHAN",
  },
]

const words = ["Web Architect","Web Creator","App Builder" ,"Full-Stack"]

export default function GridBackgroundDemo() {
  return (
    <div className="relative flex h-[50rem] md:h-[45rem] w-full items-center justify-center bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"
        )}
      />
      <div className=" absolute top-0 flex flex-col w-full ">
      <div className=" relative rounded-md antialiased z-10  w-full">
              <InfiniteMovingCards
                items={testimonials}
                speed="fast"
                />
            </div>
            <div className=" z-20 hidden md:flex md:absolute md:top-5 md:h-full md:w-full ">
              <Compare
                firstImage="/designer.png"
                secondImage="/coder.png"
                firstImageClassName=" object-left-top"
                secondImageClassname=" object-left-top"
                className=" w-full md:h-[45rem]"
                slideMode="hover"
              />
            </div>
            <div className="relative w-full z-20 flex flex-col gap-10 md:hidden">
              <div className="flex">
                <div className="flex flex-col justify-start w-50%">
                  <div className="">
                  <TextGenerateEffect words={`Designer`}className="text-center text-4xl font-bold"/>
                  </div>
                  <div className="text-center" >
                    <TextGenerateEffect words={`Product designer specialising in UI design and design systems.`}className="text-2xl font-semibold" />
                  </div>
                </div>
                <div className="w-50%">
                  <Image width={700} height={700} className="" src='/DesignHalf.gif' alt=''></Image>
                </div>
              </div>
            <div className="relative w-full z-20 flex flex-col gap-10 md:hidden">
              <div className="flex h-[300px] w-full">
                <div className="w-[50%]">
                  <Image width={500} height={500} className="h-full w-full" src='/coderHalf.gif' alt=''></Image>
                </div>
                <div className="flex flex-col gap-6 justify-start pt-10 w-[50%] ">
                  <div  className="flex items-center">
                      <FlipWords words={words} />
                  </div>
                  <div className="text-base text-white font-ProjectLine h-full  ">
                    <p className="text-2xl text-center">
                      Hey!<br />
                      I&apos;m a full-stack web<br />
                      developer who creats websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>

      </div>
    </div>
  )
}
