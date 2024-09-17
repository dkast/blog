import { useMDXComponent } from "next-contentlayer2/hooks"

interface MdxProps {
  code: string
}

const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code)

  return (
    <div
      className="prose max-w-none prose-pre:-mx-6 prose-pre:rounded-none prose-pre:overflow-x-auto
      prose-h2:text-xl prose-headings:font-medium
    prose-pre:bg-gray-800 sm:px-0 md:prose-pre:mx-0 md:prose-pre:rounded-lg lg:prose"
    >
      <Component />
    </div>
  )
}

export default Mdx
