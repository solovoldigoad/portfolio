import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconTableColumn,
} from "@tabler/icons-react"
import Image from "next/image"


export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-full px-4  md:px-32">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          link={item.link}
          className={i === 3 || i === 6 ? "md:col-span-2 bg-transparent " : "bg-transparent"}
        />
      ))}
    </BentoGrid>
  )
}
const Skeleton = (props: { src: string; alt: string }) => (
<Image
  width={500}
  height={500} 
  src={props.src} 
  alt={props.alt}
  className="w-full h-full min-h-[6rem] rounded-xl object-cover"
/>
)
const items = [
  {
    title: "UpDate",
    description: "Job Platform" ,
    header: <Skeleton src="/upDate.png" alt="UpDate" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-white" />,
    link: "https://www.updats.in/",
  },
  {
    title: "NGO",
    description: "Charity and Support",
    header: <Skeleton src="/ngo.png" alt="Digital" />,
    icon: <IconFileBroken className="h-4 w-4 text-white" />,
    link: "https://demo-ngo-seven.vercel.app/",
  },
  {
    title: "MusicLickLY",
    description: "Music Platform To Learn and Grow",
    header: <Skeleton src="/music.png" alt="Design" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-white" />,
    link: "https://ui-ux-music-web.vercel.app/",
  },
  {
    title: "Ai Task Manager ",
    description: "Understand the impact of effective communication in our lives.",
    header: <Skeleton src="/aiTaskManager.png" alt="Communication" />,
    icon: <IconTableColumn className="h-4 w-4 text-white" />,
    link: "sageaimentor.com",
  },
  {
    title: "Doctor's Portal",
    description: "Connect with doctors, book appointments, and stay informed.",
    header: <Skeleton src="/docApp.png" alt="Knowledge" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-white" />,
    link: "https://www.afternic.com/forsale/docter.com?traffic_type=TDFS_DASLNC&traffic_id=daslnc&",
  },

]
