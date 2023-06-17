/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

export function Header(){
  return(
    <div className="header">
      <Image
        src="/avatar.svg"
        alt="avatar"
        width={100}
        height={24}
        priority
      />
      <div>
        <h1>Hi, I'm Diego! 👋</h1>
        <h2>Programming Student</h2>
      </div>
    </div>
  )
}