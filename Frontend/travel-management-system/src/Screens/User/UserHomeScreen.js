import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Header from '../../Components/Header'
import companyLogo from '../../Images/img.jpg'
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
  left: '-100px',
  transform: 'none',
  position: 'relative',
  width: 'auto',
  height: 'auto',
}

const divStyle = {
  marginLeft: '50px',
  marginRight: '50px',
}
const UserHomeScreen = (props) => {
  const userSignin = useSelector((store) => store.userSignin)
  console.log(JSON.stringify(userSignin) + 'userSignin in admin')
  return (
    <div className="Screen1">
      {!userSignin.response && <Header title="You are not logged in" />}
      {userSignin.response && (
        <Header title={'Welcome User ' + userSignin.response.data.name} />
      )}
      <Row
        className="show-grid text-center"
        style={{ marginLeft: '10px', marginRight: '10px' }}>
        <Col className="image-wrapper">
          <img src={companyLogo} alt="" style={image} />
          <div style={divStyle}>
            <p style={pStyle}></p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default UserHomeScreen
