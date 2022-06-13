import React, { useState } from 'react';

const Footer = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const [name, value] = e.target;
    setContact((person) => {
      return {
        ...person,
        [name]: value,
      };
    });
  };
  return (
    <form
      id='contact-form'
      onSubmit={this.handleSubmit.bind(this)}
      method='POST'
    >
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          className='form-control'
          name='name'
          value={contact.name}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='exampleInputEmail1'>Email address</label>
        <input
          type='email'
          className='form-control'
          aria-describedby='emailHelp'
          name='email'
          value={contact.email}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='message'>Message</label>
        <textarea
          className='form-control'
          rows={5}
          name='message'
          value={contact.message}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default Footer;
