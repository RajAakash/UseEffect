import React from 'react'
import ImageToggleOnScroll from './ImageToggleOnScroll'

export const ChangeImageOnScroll = (props) => {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6].map((speakerId) => {
        return (
          <div key={speakerId}>
            <ImageToggleOnScroll
              primaryImage={`/imagesBlack/speaker-${speakerId}.jpg`}
              secondaryImage={`/images/speaker-${speakerId}.jpg`}
              alt=''
            />
          </div>
        )
      })}
    </div>
  )
}
