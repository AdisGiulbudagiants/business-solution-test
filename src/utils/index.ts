export const formatName = (fullName: string): string => {
  const nameParts = fullName.split(" ")
  if (nameParts.length < 2) return fullName
  const lastName = nameParts[0]
  const initial = nameParts[1].charAt(0)
  return `${lastName} ${initial}.`
}
