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
  
  let img1 = useRef(null)
  let img2 = useRef(null)
  let img3 = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    let ctx = gsap.context(() => {
      tl.to([box1, box2, box3], {
        duration: .8,
        ease: 'power1.out',
        delay: 2.6,
        width: 0,
        stagger: {
          amount: 0.20,
        }
      })
      
      gsap.from([img1, img2, img3], {
        delay: 2.7,
        duration: .8,
        ease: 'power4.in',
        scale: 1.2,
        stagger: {
          amount: 0.2
        }
      })
    })

    return () => ctx.revert()
  }, [])
  return (
    <>
      <section className={styles.display_section}>
        <div className={styles.display_card}>
          <div ref={(el: any) => (box1 = el)} className={styles.overlay} />
          <div ref={(el: any) => (img1 = el)} className={styles.img_wrapper}>
            <Image src={ui} fill alt='' style={{ objectFit: 'cover' }} />
          </div>
        </div>
        <div className={styles.display_card}>
          <div ref={(el: any) => (box2 = el)} className={styles.overlay} />
          <div ref={(el: any) => (img2 = el)} className={styles.img_wrapper}>
            <Image src={front} fill alt='' style={{ objectFit: 'cover' }} />
          </div>
        </div>
        <div className={styles.display_card}>
          <div ref={(el: any) => (box3 = el)} className={styles.overlay} />
          <div ref={(el: any) => (img3 = el)} className={styles.img_wrapper}>
            <Image src={graphic} fill alt='' style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Display
