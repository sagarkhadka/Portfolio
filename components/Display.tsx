import React, { useEffect, useRef } from 'react'
import styles from '../styles/modules/Display.module.scss'
import { gsap } from 'gsap'
import Image from 'next/image'
// imgs
import ui from '../public/pic/ui.png'
import front from '../public/pic/frontend.webp'
import graphic from '../public/pic/graphic.webp'

const Display = () => {
  let box1 = useRef(null)
  let box2 = useRef(null)
  let box3 = useRef(null)
  
  let img = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.to([box1, box2, box3], {
      duration: 2,
      ease: 'power3.inOut',
      delay: 1.5,
      width: 0,
      stagger: {
        amount: 0.5,
      }
    })

    gsap.fromTo(img, {
      duration: 1,
      delay: 4,
      scale: 1.2,
    },{
      duration: 1,
      delay: 4,
      ease: 'power3.inOut',
      scale: 1,
    })
  }, [])
  return (
    <>
      <section className={styles.display_section}>
        <div className={styles.display_card}>
          <div ref={(el: any) => (box1 = el)} className={styles.overlay} />
          <div className={styles.img_wrapper}>
            <Image src={ui} fill alt='' objectFit='cover' />
          </div>
        </div>
        <div className={styles.display_card}>
          <div ref={(el: any) => (box2 = el)} className={styles.overlay} />
          <Image src={front} fill alt='' objectFit='cover' />
        </div>
        <div className={styles.display_card}>
          <div ref={(el: any) => (box3 = el)} className={styles.overlay} />
          <Image src={graphic} fill alt='' objectFit='cover' />
        </div>
      </section>
    </>
  )
}

export default Display
