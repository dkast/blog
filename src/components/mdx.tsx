import { useMDXComponent } from "next-contentlayer2/hooks"

interface MdxProps {
  code: string
}

const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code)

  return (
    <div className="prose max-w-none lg:prose prose-headings:font-display prose-headings:font-normal prose-headings:text-gray-600 prose-h2:text-xl prose-pre:-mx-6 prose-pre:overflow-x-auto prose-pre:rounded-none prose-pre:bg-gray-800 sm:px-0 md:prose-pre:mx-0 md:prose-pre:rounded-lg">
      <Component />
    </div>
  )
}

export default Mdx
