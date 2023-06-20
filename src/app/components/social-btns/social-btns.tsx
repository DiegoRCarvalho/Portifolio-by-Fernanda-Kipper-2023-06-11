import { GithubIcon } from "../icons/github-icon"
import { InstagranIcon } from "../icons/instagram-icon"
import { LinkedinIcon } from "../icons/linkedin-icon"
import { TwitterIcon } from "../icons/twitter-icon"
import "./social-btns.scss"

export function SocialBtns() {
  return(
    <div className="social">
      <a href="#">
        <InstagranIcon/>
      </a>
      <a href="#">
        <LinkedinIcon/>
      </a>
      <a href="#">
        <GithubIcon/>
      </a>
      <a href="#">
        <TwitterIcon/>
      </a>
    </div>
  )
}