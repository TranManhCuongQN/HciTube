import React from 'react'
import Avatar from 'react-avatar'

interface AvatarProps {
  name: string
  size: string
  className?: string
}

const AvatarLetter = (props: AvatarProps) => {
  const { name, size, className } = props

  return (
    <>
      <Avatar name={name} round size={size} color={'#7a1fa2'} className={`${className}`} />
    </>
  )
}
export default AvatarLetter
