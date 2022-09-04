import React from 'react'
import ImageToggleOnHover from './ImageToggleOnHover'

export const ChangeImageOnHover = (props) => {
  return (
    <div>
      <ImageToggleOnHover
        primaryImage='/imagesBlack/Toyota-m.jpg'
        secondaryImage='/images/Toyota.jpg'
      />
      &nbsp; &nbsp;
      <ImageToggleOnHover
        primaryImage='/imagesBlack/Bugati-m.jpg'
        secondaryImage='/images/Bugati.jpg'
      />
    </div>
  )
}
