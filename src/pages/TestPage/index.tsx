import React from 'react'

const TestPage = () => {
  const handleClick = () => {
    console.log('click')
  }

  return <button onClick={handleClick}>TestPage</button>
}

export default TestPage
