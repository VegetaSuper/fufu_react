import React, { useState } from 'react'

export default function Month() {
  const [value, setValue] = useState('')
  return (
    <>
      <input
        className="2"
        type="text"
        placeholder="请输入"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  )
}
