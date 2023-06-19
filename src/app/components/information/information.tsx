import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Information(){
  return(
    <div className="information">
      <SectionTitle text="Languages"/>
      <div className="languages-info">
        <span>🇺🇸 EN - Intermediary</span>
        <span>🇧🇷 PT-BR - Native Speaker</span>
      </div>
      <SectionTitle text="Education"/>
      <div className="educational-info">
        <span>🎓</span>
        <span>Internet Systems degree - Universidade Estácio de Sá</span>
      </div>
    </div>
  )
}