import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Information } from "./components/information/information";
import "./styles/home.scss"
import { EmailIcon } from './components/icons/email-icon';
import { SocialBtns } from "./components/social-btns/social-btns";

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>
      <Information/>
      <div className="buttons">
        <SocialBtns/>
        <button className="btn-primary">
          contact me
          <EmailIcon /> 
        </button>
      </div>
    </main>
  )
}
