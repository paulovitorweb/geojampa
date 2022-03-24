import Config from '../constants/Config'


export default function MoreInfo(props) {
  const { links } = Config

  return (
    <div className='more-info'>
      <div>
        <a href={links.contribute} target='_blank'>Contribua</a>
      </div>
      <div>
        <a href={links.repository} target='_blank'>Repositório</a>
      </div>
      <div>
        <a href={links.sourceCode} target='_blank'>Código-fonte</a>
      </div>
    </div>
  )
}
