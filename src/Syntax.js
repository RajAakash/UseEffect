import React, { useEffect } from 'react'

const Syntax = () => {
  useEffect(() => {
    console.log('in UseEffect')
    return () => {
      console.log('in UseEffect cleanup')
    }
  }, [])
  return <div>Syntax</div>
}
export default Syntax
