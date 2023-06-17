import "./information.scss"

export function Information(){
  return(
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
    </div>
  )
}