import React, { useState } from 'react'

const Increment = () => {
  const [inputText, setInputText] = useState('')
  const [historyList, setHistoryList] = useState([])
  return (
    <div>
      <input
        type='text'
        placeholder='Enter some text'
        onChange={(e) => {
          setInputText(e.target.value)
          setHistoryList([...historyList, e.target.value])
        }}
      ></input>
      {inputText}
      <ul>
        <li>
          {historyList.map((rec) => {
            return <div>{rec}</div>
          })}
        </li>
      </ul>
    </div>
  )
}
export default Increment
