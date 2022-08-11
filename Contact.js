import React, { useState } from 'react'
import "../app.css"

import { initializeApp } from 'firebase/app'
import { getFirestore, setDoc, doc, addDoc } from 'firebase/firestore/lite'

var firebaseApp = initializeApp({
  apiKey: "AIzaSyAD2j5GHtEpnk-DBbz-X2o-neQ80ckiTYg",
  authDomain: "react-contact-form-ck.firebaseapp.com",
  projectId: "react-contact-form-ck",
  storageBucket: "react-contact-form-ck.appspot.com",
  messagingSenderId: "327427988977",
  appId: "1:327427988977:web:4ea4d8ab0f6e9c40763850",
  databaseURL: "https://billions-cc085-default-rtdb.firebaseio.com/"
});

var db = getFirestore();


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let current_data = {
      name: name,
      email: email,
      phone: phone,
      city: city,
      subject: subject,
      message: message
    }
    setDoc(doc(db, "Users", "UserModel"), current_data);

    };

  return (
    <form className="form" onSubmit=
    {handleSubmit}>
        <h1>Contact form 📞</h1>

        <label>Name</label>
        <input 
         placeholder='Your Name'
         value={name}
         onChange={(e) => setName(e.target.value)}
        />
      <label>Email</label>
      <input 
        placeholder='Your Email-ID' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

        <label>Phone</label>
      <input 
        placeholder='Your Phone' 
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

        <label>City</label>
      <input 
        placeholder='Your City' 
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
        
        <label>Subject</label>
      <input 
        placeholder='Subject' 
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
        
        <label>Message</label>
        <textarea placeholder='Message' 
          value={message}
          onChange={(e) => setMessage(e.target.value)}> 
        </textarea>

        <button type="submit">Submit</button>
    </form>
  )
}
export default Contact
