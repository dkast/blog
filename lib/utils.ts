export function formatDate(input: string | number): string {
  const date = new Date(input)

  return date.toLocaleDateString("es-MX", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })
}
