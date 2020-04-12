import React from 'react'

const Title = ({ text, type }) => {
  const Tag = type

  return (
    <>
      <Tag>{text}</Tag>
    </>
  )
}

export default Title
