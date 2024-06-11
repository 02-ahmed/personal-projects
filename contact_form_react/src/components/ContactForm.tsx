/* import React from 'react' */

const ContactForm = () => {
  return (
    <>
      <form action="" className="container-fluid">
        <h2>Contact Us</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-12">
            <label htmlFor="mail">E-mail</label>
            <input type="text" className="form-control" />
          </div>

          <label htmlFor="query">Query Type</label>
          <div className="col-md-6 query" >
            <input type="radio" className="btn-check col-md-6" name="options" id="option1"/>
            <label className="btn btn-secondary" htmlFor="option1">General Enquiry</label>
          </div>
          <div className="col-md-6 query">
          <input type="radio" className="btn-check form-control" name="options" id="option2"/>
          <label className="btn btn-secondary" htmlFor="option2">Support Request</label>
          </div>
          

            

            <div className="col-12">
              <label htmlFor="message">Message</label>
              <textarea name="" id="" className="form-control"></textarea>
            </div>    

            <div className="col-12">
              <input type="checkbox" /> <p>I consent to being contacted by the team</p>
            </div>

            <div className="col-12">
              <button className="btn btn-success col-12">Submit</button>
            </div>
        </div>
      </form>
    </>
  )
}

export default ContactForm