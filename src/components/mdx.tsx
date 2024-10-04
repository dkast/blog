import { DetailedHTMLProps, ImgHTMLAttributes } from "react"
import { useMDXComponent } from "next-contentlayer2/hooks"
import Image from "next/image"

interface MdxProps {
  code: string
}

function MdxImage(
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  const { src, alt, width, height, ...rest } = props
  if (!src) return null // Ensure src is defined

  return (
    <Image
      src={src}
      alt={alt || ""}
      width={width ? parseInt(width as string, 10) : undefined}
      height={height ? parseInt(height as string, 10) : undefined}
      className="mx-auto my-12 rounded-xl shadow-lg sm:max-w-[600px]"
      {...rest}
    />
  )
}

const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code)

  return (
    <div className="prose prose-neutral max-w-none lg:prose lg:prose-neutral prose-headings:font-display prose-headings:font-normal prose-headings:text-gray-600 prose-h2:text-xl prose-a:decoration-orange-600 prose-pre:-mx-6 prose-pre:overflow-x-auto prose-pre:rounded-none prose-pre:bg-gray-800 sm:px-0 md:prose-pre:mx-0 md:prose-pre:rounded-lg">
      <Component components={{ img: MdxImage }} />
    </div>
  )
}

export default Mdx
