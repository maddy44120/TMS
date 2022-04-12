import React from 'react'
import { Row, Col } from 'react-bootstrap'
import companyLogo from '../../Images/logo2.avif'
import Footer from '../../Components/Footer'
const h3Style = {
  fontFamily: 'Montserrat',
  fontSize: '20px',
  textAlign: 'center',
}

const pStyle = {
  fontFamily: 'Montserrat',
  fontSize: '17px',
  textAlign: 'center',
}

const image = {
  top: '0',
  right: '350px',
  transform: 'none',
  position: 'relative',
  width: '1750px',
  height: '800px',
}

const divStyle = {
  marginLeft: '50px',
  marginRight: '50px',
}
const Home = (props) => {
  return (
    <Row
      className="show-grid text-center"
      style={{ marginLeft: '10px', marginRight: '10px' }}>
      <Col className="image-wrapper">
        <img src={companyLogo} alt="" style={image} />
        <Footer />
      </Col>
    </Row>
  )
}

export default Home
