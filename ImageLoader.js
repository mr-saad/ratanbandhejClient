export default function loader({ src, width, quality }) {
  return `https://cdn.sanity.io/${src}?w=${width}&fm=webp&q=${quality ? quality : 75}`
}
