import { useMDXComponent } from "next-contentlayer/hooks"

interface MdxProps {
  code: string
}

const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code)

  return (
    <div className="prose mx-3 max-w-none prose-pre:-mx-3 prose-pre:rounded-none sm:px-0 md:prose-pre:mx-0 md:prose-pre:rounded-lg lg:prose-lg">
      <Component />
    </div>
  )
}

export default Mdx
