import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/hero/Hero'
import { styles } from '@/styles/styles'

export default function Home() {
  return (
    <main className={`${styles.paddingx} w-full overflow-hidden`}>
    <Navbar />
    <Hero />
    </main>
  )
}
