declare module "md-attr-parser" {
  type ParsedAttributes = {
    prop: Record<string, string | string[] | undefined>
    eaten: string
  }

  type ParseAttr = (
    input: string,
    offset?: number,
    config?: {
      defaultValue?: boolean | ((key: string) => string)
    }
  ) => ParsedAttributes

  const parseAttr: ParseAttr

  export default parseAttr
}
