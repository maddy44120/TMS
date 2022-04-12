import React from 'react'
import { Row, Col } from 'react-bootstrap'
import companyLogo from '../../Images/nexon.jpg'
import companyLogo2 from '../../Images/nexon2.jpg'
const h3Style = {
  fontFamily: 'Montserrat',
  fontSize: '20px',
  textAlign: 'center'
}

const pStyle = {
  fontFamily: 'Montserrat',
  fontSize: '17px',
  textAlign: 'center'
}

const image = {
  width: '500px',
  marginTop: '30px',
  position: 'relative'
}

const image2 = {
  width: '500px',
  height: '310px',
  marginTop: '30px',
  position: 'relative',
}

const divStyle = {
  marginLeft: '50px',
  marginRight: '50px',
}
const About = (props) => {
  return (
    <Row
      className="show-grid text-center"
      style={{ marginLeft: '10px', marginRight: '10px' }}>
      <Col className="image-wrapper">
        <img src={companyLogo} alt="" style={image} />
        <div style={divStyle}>
          <h3 style={h3Style}>Our Vision</h3>
          <p style={pStyle}>
            "We will lead our industry by defining service excellence and
            building unmatched customer loyalty."
          </p>
        </div>
      </Col>
      <Col className="image-wrapper">
        <img src={companyLogo2} alt="" style={image2} />
        <div style={divStyle}>
          <h3 style={h3Style}>Our Mission </h3>
          <p style={pStyle}>
            "We will ensure a stress-free car booking experience by providing
            superior services that cater to our customers' individual
            needs...always conveying the 'We Try Harder' spirit with
            knowledge, caring and a passion for excellence."
          </p>
        </div>
      </Col>
    </Row>
  )
}

export default About
