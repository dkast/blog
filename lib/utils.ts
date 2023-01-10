export function formatDate(input: string | number): string {
  const date = new Date(input)

  return date.toLocaleDateString("es-MX", {
    month: "long",
    day: "numeric",
    year: "numeric"
  })
}
