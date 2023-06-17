/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import "./header.scss"

export function Header(){
  return(
    <div className="header">
      <div>
        <h1>Hi, I'm Diego! 👋</h1>
        <h2>Programming Student</h2>
      </div>
    
      <Image
        src="/avatar.svg"
        alt="avatar"
        width={325}
        height={310}
        priority
      />
    </div>
  )
}