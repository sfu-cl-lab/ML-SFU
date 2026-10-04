// Same as Object.groupBy, which is too new for older browsers
// (e.g. iPhones before iOS 17.4) and is not polyfilled by our build.
export default function groupBy(items, keyFn) {
  const grouped = Object.create(null)
  items.forEach((item, index) => {
    const key = keyFn(item, index)
    if (!(key in grouped)) {
      grouped[key] = []
    }
    grouped[key].push(item)
  })
  return grouped
}
