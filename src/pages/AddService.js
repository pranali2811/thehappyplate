import React, { useState } from 'react'
import './AddService.css';
import { createService } from '../actions/index'
import withAuthorization from '../components/hoc/withAuthorization';

const AddService = ({auth}) => {

   const [ serviceForm, setServiceForm ] = useState({
       fp_name: '',
       type: '',
       description:'',
       image:'',
       location:'',
       contact: '',
       pincode: ''
   })
   
    const handleChange = e => {
        const{ name, value } = e.target  
        setServiceForm({...serviceForm, [name]: value})
   }

   const handleSubmit = () => {
      const { user } = auth
      createService(serviceForm, user.uid)
        .then(() => alert('SERVICE CREATED')
        //.catch(() => alert('Some error '))
      )}

 
 
    return (
    <div className="page">
      <div className="container1">
        <div className="form-container">
        <img src="assets/img/hero/hero-img3.jpg" alt="" class="shape" />
          <h1 className="titlee"><u>Add Food Service</u></h1>
          <form>
            <div className="field1">
              <label className="label1">Name of Food Service</label>
              <div className="control">
                <input
                    onChange={handleChange}
                    name="fp_name"
                    className="input"
                    type="text" />
              </div>
            </div>
            <div className="field1">
              <label className="label">Food Type</label>
              <div className="control">
                <input
                    onChange={handleChange}
                    name="type"
                    className="input"
                    type="text"
                    placeholder="Eg. Maharashtrian, Malvani..." />
              </div>
            </div>
            <div className="field1" >
              <label className="label">Description</label>
              <div className="control">
                <textarea
                    onChange={handleChange}
                    name="description"
                    className="textarea"
                    type="textarea"
                    placeholder="Description about dishes provided"></textarea>
              </div>
            </div>
            <div className="field1">
              <label className="label">Image Url</label>
              <div className="control">
                <input
                    onChange={handleChange}
                    name="image"
                    className="input"
                    type="text" />
              </div>
            </div>
            <div className="field1">
              <label className="label">Contact</label>
              <div className="control">
                <input
                    onChange={handleChange}
                    name="contact"
                    className="input"
                    type="number"/>
              </div>
            </div>
            <div className="field1">
              <label className="label">Location</label>
              <div className="control">
                <textarea
                    onChange={handleChange}
                    name="location"
                    className="textarea"
                    placeholder="Address of Food Service"></textarea>
              </div>
            </div>
            <div className="field1">
              <label className="label">Pincode</label>
              <div className="control">
                <input
                    onChange={handleChange}
                    name="pincode"
                    className="input"
                    type="number" />
              </div>
            </div>
            <div className="field1">
              <div className="control">
                <button
                onClick= {handleSubmit}
                  type="button" className="link">Create</button>
              </div>
              <div className="control">
                <button className="text">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withAuthorization(AddService)