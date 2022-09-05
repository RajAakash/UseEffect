import React, { useEffect, useRef, useState } from 'react'

const ImageToggleOnScroll = ({ primaryImage, secondaryImage }) => {
  const imageRef = useRef(null)

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect()
    return rect.top >= 0 && rect.bottom <= window.innerHeight
  }

  const [isLoading, setIsLoading] = useState(true)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    setIsLoading(false)
    setInView(isInView())
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = () => {
    setInView(isInView())
  }

  return (
    <img
      src={inView ? secondaryImage : primaryImage}
      alt=''
      ref={imageRef}
      height='400px'
      width='auto'
    />
  )
}

export default ImageToggleOnScroll
