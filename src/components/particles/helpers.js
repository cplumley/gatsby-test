export function isEmptyObject(obj) {
  return Object.entries(obj).length === 0 && obj.constructor === Object
}

export function isInternal(url) {
  if (!url) return false
  if (url.startsWith("mailto:")) return false
  if (url.startsWith("tel:")) return false
  if (url.startsWith("http")) return false
  return true
}

export function randomID() {
  return Math.random()
    .toString(36)
    .substring(7)
}
