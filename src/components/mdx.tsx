import { DetailedHTMLProps, ImgHTMLAttributes } from "react"
import { MDXContent } from "@content-collections/mdx/react"
import Image from "next/image"

interface MdxProps {
  code: string
}

function MdxCode({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLElement>) {
  // Code blocks (inside <pre>) receive a data-language attribute from rehype-pretty-code
  if ("data-language" in rest) {
    return (
      <code className={className} {...rest}>
        {children}
      </code>
    )
  }

  return (
    <code
      className={[
        "text-primary rounded-sm bg-white px-1.5 py-1 font-mono text-[0.85em] font-normal inset-ring inset-ring-black/10 before:content-none after:content-none dark:bg-gray-800",
        className
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </code>
  )
}

function MdxImage(
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  const { src, alt, width, height, ...rest } = props
  const imageClassName = [
    "mx-auto my-12 rounded-xl shadow-lg sm:max-w-[600px]",
    rest.className
  ]
    .filter(Boolean)
    .join(" ")

  if (!src || typeof src !== "string") return null

  if (!width || !height) {
    return (
      <img src={src} alt={alt || ""} className={imageClassName} {...rest} />
    )
  }

  return (
    <Image
      src={src}
      alt={alt || ""}
      width={parseInt(width as string, 10)}
      height={parseInt(height as string, 10)}
      className={imageClassName}
      {...rest}
    />
  )
}

const Mdx = ({ code }: MdxProps) => {
  return (
    <div className="prose prose-neutral prose-headings:font-display prose-headings:font-normal prose-headings:text-secondary-foreground prose-h2:text-xl prose-a:decoration-primary prose-pre:-mx-6 prose-pre:overflow-x-auto prose-pre:rounded-none prose-pre:bg-gray-800 md:prose-pre:mx-0 md:prose-pre:rounded-lg max-w-none sm:px-0">
      <MDXContent code={code} components={{ img: MdxImage, code: MdxCode }} />
    </div>
  )
}

export default Mdx
