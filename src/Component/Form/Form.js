import React, { useState } from 'react';
import { db } from '../../Api/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import './Form.css';

const Form = () => {
  const [weight, setWeight] = useState('');
  const [value, setValue] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [street, setStreet] = useState('');
  const [postalcode, setPostalcode] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [city, setCity] = useState('');
  const [department, setDepartment] = useState('');
  const [message, setMessage] = useState('');


  const categorizeParcel = (weight, value) => {
    let dept = '';
    if (weight <= 1) {
      dept = 'Mail';
    } else if (weight <= 10) {
      dept = 'Regular';
    } else {
      dept = 'Heavy';
    }
    if (value > 1000) {
      dept = `Insurance Required-> ${dept}`;
    }
    return dept;
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dept = categorizeParcel(parseFloat(weight), parseFloat(value));
    setDepartment(dept);
    try {
      await addDoc(collection(db, 'parcels'), {
        weight: parseFloat(weight),
        value: parseFloat(value),
        receiverName,
        street,
        postalcode,
        houseNumber,
        city,
        department: dept,
        createdAt: Timestamp.now(),
      });
      setMessage('Parcel added successfully!');
      setWeight('');
      setValue('');
      setReceiverName('');
      setStreet('');
      setPostalcode('');
      setHouseNumber('');
      setCity('');
    } catch (error) {
      console.error('Error adding parcel: ', error);
      setMessage('Failed to add parcel. Try again.');
    }
  };

  return (
    <div className="parcel-form">
      <h2>Parcel Form</h2>
      <form onSubmit={handleSubmit} method="POST">
   
        <div className="form-group">
          <label>Receiver's Name:</label>
          <input
            type="text"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Street:</label>
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
        </div>

       
        <div className="form-group">
          <label>PostalCode:</label>
          <input
            type="text"
            value={postalcode}
            onChange={(e) => setPostalcode(e.target.value)}
            required
          />
        </div>

        
        <div className="form-group">
          <label>House Number:</label>
          <input
            type="tel"
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
            required
          />
        </div>

       
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        
        <div className="form-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>

      
        <div className="form-group">
          <label>Value (€):</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
          
        </div>

        <button type="submit">Submit</button>
      </form>

      {department && (
        <div className="result">
          <p>Assigned Department: {department}</p>
        </div>
      )}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Form;
