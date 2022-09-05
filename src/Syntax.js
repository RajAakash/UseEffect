import React, { useEffect, useState } from 'react'

const Syntax = () => {
  const [checkBox, setCheckBox] = useState(false)

  useEffect(() => {
    console.log('in UseEffect')
    return () => {
      console.log('in UseEffect cleanup')
    }
  }, [checkBox])
  return <div>Syntax</div>
}
export default Syntax
