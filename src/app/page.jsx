import Image from 'next/image'
import Link from 'next/link'

//main page
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/profile-gallery/profile">Short-cut</Link>
    </div>
  )
}
