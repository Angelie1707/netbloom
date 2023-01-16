import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div className="default-sec ctaform-section">
      <div className="default-sec-overlay">
        <div className="default-sec-content">
          <div className="default-sec-wrap">
            <div className='cta-wrap'>
              <h3>Start Ranking Now!</h3>
              <p>Fill in your details & we'll give you a call</p>
              <form onSubmit={handleSubmit(onSubmit)} id="cta-form">
                <div className='row'>
                  <div className='col col-50'><TextField type="text" {...register("Full Name")} label="Full Name" variant="standard" /></div>
                  <div className='col col-50'><TextField type="email" {...register("Email Address", {required: true})} label="Email Address" variant="standard" /></div>
                </div>
                <div className='row'>
                  <div className='col col-50'><TextField type="text" {...register("Company")} label="Company" variant="standard" /></div>
                  <div className='col col-50'><TextField type="tel" {...register("Phone Number")} label="Phone Number" variant="standard" /></div>
                </div>
                <div className='row'>
                  <div className='col col-100'>
                    <TextField
                      select
                      label="Services Your Are Interested In"
                      {...register("Services Your Are Interested In", {required: true})}
                      variant="standard"
                    >
                      <option value="webdesign">Website Design & Development</option>
                      <option value="seo">Search Engine Optimisation</option>
                      <option value="ppc">Pay Per Click Marketing</option>
                      <option value="cro">Conversion Rate Optimisation</option>
                      <option value="other">Other</option>
                    </TextField>
                  </div>
                </div>
                <div className='row'>
                  <div className='col col-100'>
                    <TextField
                      label="How can we help you?"
                      multiline
                      rows={4}
                      variant="standard"
                      {...register("How can we help you?")}
                    />
                    </div>
                  </div>
                <input type="submit" value="Get a Quote" className="greenButton btn"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}