import Config from '../constants/Config'

export default function AppIdentity(props) {
  const { appName, appDescription } = Config

  return (
    <div className='app-identity'>
      <h1>{ appName }</h1>
        <p>{ appDescription }</p>
    </div>
  )
}
