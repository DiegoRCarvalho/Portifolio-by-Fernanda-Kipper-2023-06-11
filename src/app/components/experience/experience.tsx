import Image from 'next/image'
import { SectionTitle } from "../sectionTitle/section-title"
import "./experience.scss"

export function Experience(){
  return(
    <div className="experience">
        <SectionTitle text="Experience" />
        <p>Programming student and consumer of web tutorials.</p>
      <div className="experience-time">
        <div className='experience-language'>
          <Image
            src="/react.svg"
            alt="react icon"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experince-measure measure-2">
              <span>2 years</span>
            </div>
          </div>
        </div>
        <div className='experience-language'>
          <Image
            src="/js.svg"
            alt="js icon"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experince-measure measure-3">
              <span>3 years</span>
            </div>
          </div>
        </div>
        <div className='experience-language'>
          <Image
            src="/ts.svg"
            alt="ts icon"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experince-measure measure-3">
              <span>3 years</span>
            </div>
          </div>
        </div>
        <div className='experience-language'>
          <Image
            src="/java.svg"
            alt="java icon"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experince-measure measure-1">
              <span>3 years</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}