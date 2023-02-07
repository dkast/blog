import MdxHead from "@/components/mdx-head"

export default function Head({ params }: { params: { slug: string[] } }) {
  return (
    <MdxHead
      params={params}
      og={{
        type: "Blog"
      }}
    />
  )
}
