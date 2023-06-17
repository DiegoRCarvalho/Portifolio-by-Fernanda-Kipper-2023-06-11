import { Header } from "./components/header/header";

export default function Home() {
  return (
    <main>
      <Header/>
      <div className="experience">
        <h3>Experience</h3>
        <p>Programming student and consumer of web tutorials.</p>
      </div>
      <div className="experience-time">

      </div>
      <div className="infos">
        <h3>Languages</h3>
        <div className="languages-info">
          <span>🇺🇸 EN - Intermediary</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <h3>Education</h3>
        <div className="educational-info">
          <span>🎓</span>
          <span>Internet Systems degree - Universidade Estácio de Sá</span>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>contact me</button>
        </div>
      </div>
    </main>
  )
}
