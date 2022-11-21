import { useEffect } from 'react'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { gsap } from 'gsap'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    document.documentElement.style.setProperty('--dvh', `${vh}px`)

    // prevents flashing
    gsap.from("body", { css: { visibility: 'visible' }})
  }, [])
  return <Component {...pageProps} />
}
