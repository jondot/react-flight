import Link from 'next/link'
import dynamic from 'next/dynamic'

const MyAnimation = dynamic(() => import('../src/MyAnimation'), { ssr: false })

function HomePage() {
  return (
    <div>
      <h1>Homepage!</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <br />
      <Link href="about">
        <a>About</a>
      </Link>
      <div>
        <MyAnimation />
      </div>
    </div>
  )
}

export default HomePage