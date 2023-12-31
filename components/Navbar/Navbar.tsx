import { Navlinks } from "@/constants"
import { styles } from "@/styles/styles"
import Image from 'next/image'
import Humbergarmenu from "./Humbergarmenu"
import Link from "next/link"


const Navbar = () => {

  return (
    <nav className={`h-[120px] flex items-center justify-between`}>
    <section className={`${styles.flexBetween}`}>
    <h2 className={`text-[40px] not-italic font-semibold leading-[normal] text-main mr-[50px] xl:mr-[107px]`}>Emprise</h2>
    <ul className={`${styles.flexitems} hidden lg:flex gap-[28px] xl:gap-[48px]`}>
    {Navlinks.map((Navlink) => (
    <Link href="#" className={`${styles.navlink} text-main hover:text-secondary`}
     key={Navlink.id}>
      {Navlink.link}
      </Link >
    ))}
    <Image
      src="/shearchIcon.svg"
      width={30}
      height={30}
      alt="shearchIcon"
    />
        </ul>
        </section>
    <section className={`${styles.flexitems} hidden lg:flex  gap-[41px]`}>
    <button className={`${styles.navlink} text-main`}>Login</button>
    <button className={`${styles.navlink} text-xl not-italic font-normal leading-5 py-[14px] px-[12px] rounded-[28px] bg-secondary text-white`}>Sign up</button>
    </section>
    <Humbergarmenu  />
    </nav>
  )
}

export default Navbar