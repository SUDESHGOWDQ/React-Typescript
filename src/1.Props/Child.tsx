import React from 'react'

type ChildProps={
    text:string
}

const  Child:React.FC = (props:ChildProps) => {
  return (
    <div>
      <button>{props.text}</button>
    </div>
  )
}

export default Child
