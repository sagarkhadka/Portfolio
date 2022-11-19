import { useEffect, useRef } from 'react'
import styles from '../styles/modules/Home.module.scss'
import { gsap } from 'gsap'

const Hero = () => {
  let line1 = useRef(null)
  let line2 = useRef(null)
  let overlay = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo([line1, line2], {
      delay: .5,
      duration: 1,
      y: 75,
    }, {
      delay: .5,
      y: 0,
      ease: 'power3.easeInOut',
      stagger: {
        amount: 0.5,
      }
    }).to(overlay, {
      duration: 1,
      height: 0,
      ease: 'power3',
    })
  }, [line1, line2, overlay]);
  return (
    <>
      <section className={`${styles.hero_section}`}>
        <div className={`${styles.hero_top}`}>
          <div ref={(el: any) => (overlay = el)} className={styles.overlay} />
          <h1 className={`${styles.hero_title}`}>
            <div className={styles.line_wrap}>
              <div ref={(el: any) => (line1 = el)} className={styles.line}>I&apos;m Sagar Khadka</div>
            </div>
            <div className={styles.line_wrap}>
              <div ref={(el: any) => (line2 = el)} className={styles.line}>Frontend Developer</div>
            </div>
          </h1>
        </div>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laborum a? Sunt cupiditate aliquid error. Vero necessitatibus eos vel, aspernatur quibusdam totam delectus! Voluptatum deleniti distinctio, ex adipisci magni pariatur!</p> */}

      </section>
    </>
  )
}

export default Hero
