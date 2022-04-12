import React from 'react'
import Header from '../../Components/Header'

const ContactUsScreen = (props) => {
  return (
    <div className="ctn-jumbotron">
      <div className="Screen">
        <div className="contact-title-color">
          <Header title="Contact Us" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 btn-holder">
              <div className="col-sm-12 ">
                <h4 className="contact-title-color">WhatsApp US</h4>
                <p className="contact-us-details-color">
                  Haniraj Jaiswal :7049615568
                  <br />
                  Pranjali Ghodake :7218159059
                  <br />
                  Sagar Date :9762557988
                  <br />
                  Mandar Hulaji :8605966833
                  <br />
                  <hr />
                </p>
                <h4 className="contact-title-color">Email US</h4>
                <p className="contact-us-details-color">
                  hanirajj@gmail.com
                  <br />
                  pranjalighodake@gmail.com
                  <br />
                  sagardate1234@gmail.com
                  <br />
                  mi44120@gmail.com
                  <br />
                  <hr />
                </p>
                <h4 className="contact-title-color">Contact US</h4>
                <p className="contact-us-details-color">
                  1800 100 2022 <br />
                  9:00 AM to 6:00 PM, 24 x 7
                  <hr />
                </p>
                <h4 className="contact-title-color">Concerns Not Address</h4>
                <p className="contact-us-details-color">
                  It is our priority to positively respond and address any concerns you may have at the earliest.To ensure this,
                  our team is continuously working to provide you the best of support,though a few concern/issues that are complex in nature 
                  may require additional time to resolve.In unlikely event that your concerns are not addressed satisfactorily,you could communicate directly to higher authority
                  to facilate and better manage this we have aligned a structure to aid communication. 
                  <hr />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsScreen
