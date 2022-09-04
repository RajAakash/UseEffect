import React, { useRef } from 'react'

const ImageToggleOnHover = ({ primaryImage, secondaryImage }) => {
  const imageRef = useRef(null)
  return (
    <div>
      <img
        onMouseOver={() => {
          imageRef.current.src = secondaryImage
        }}
        onMouseOut={() => {
          imageRef.current.src = primaryImage
        }}
        src={primaryImage}
        ref={imageRef}
        alt=''
        height='320px'
        width='auto'
      ></img>
    </div>
  )
}

export default ImageToggleOnHover
