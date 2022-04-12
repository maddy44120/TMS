import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header'
import companyLogo from '../../Images/admin.jpg'

const pStyle = {
  fontFamily: 'Montserrat',
  fontSize: '17px',
  textAlign: 'center',
}

const image = {
  top: '0',
  left: '0px',
  transform: 'none',
  position: 'relative',
  width: '500px',
  height: '300px',
}

const divStyle = {
  marginLeft: '50px',
  marginRight: '50px',
}

const AdminHomeScreen = (props) => {
  const userSignin = useSelector((store) => store.userSignin)
  console.log(JSON.stringify(userSignin) + 'userSignin in admin')
  return (
    <div className="Screen2">
      {!userSignin.response && <Header title="You are not logged in" />}
      {userSignin.response && (
        <Header title={'Welcome admin ' + userSignin.response.data.name} />
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

export default AdminHomeScreen
