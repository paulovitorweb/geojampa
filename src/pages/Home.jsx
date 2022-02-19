import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import ListGroup from 'react-bootstrap/ListGroup'
import Map from '../components/Map'
import layers from '../constants/Layers'


export function Home(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getLayerObject = key => {
    return layers.filter(l => l.key === key)[0]
  }

  const layer = getLayerObject(props.layer)

  return (
    <>
      <Button 
        variant="dark" 
        size="lg"
        onClick={handleShow} 
        className="position-absolute top-0 end-0 opacity-75"
        style={{
          zIndex: 900,
          margin: '10px 10px 0px 0px',
        }}
      >
        Layers
      </Button>

      <Map layer={layer} />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>GeoJampa Layers</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            {layers.map(layer => {
              return <ListGroup.Item action href={'/' + layer.key} key={layer.key}> {layer.name}</ListGroup.Item>
            })}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}