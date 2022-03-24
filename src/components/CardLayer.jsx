

export default function CardLayer(props) {
  const { layer } = props

  return (
    <a href={'?l=' + layer.key}>
        <div className='card-layer'>
            <i className={layer.icon}></i>
            <span>{layer.name}</span>
        </div>
    </a>
  )
}
