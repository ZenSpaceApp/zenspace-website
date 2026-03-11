'use client';
import React, { FormEvent } from 'react';
import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { auto } from '@popperjs/core';

// const small = '/images/left-banner-sm-330w.jpg';
// const medium = '/images/left-banner-md-768w.jpg';
const large = '/images/right-banner.png';
import ZenSpaceLogo from '@/components/ZenspaceLogo';

const ResponsiveImage = () => (
  <div className="responsive-image">
    <Image
      alt="login"
      src={large}
      // srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`}
      height={0}
      width={500}
      style={{
        height: "auto",
        maxWidth: "80%",
      }}
    />
  </div>
);


export default function Login() {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState<string>('');
  const [successMessage, setSuccess] = useState<string>('');

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    
    if (name === "email") {
      setEmail(value)
    } else {
      setPassword(value)
    } 
  }

  const handleSubmit = () => (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // resets any previous errors that might be visible
    setError('');

    // create post options
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ emailAddress: email, password: password })
    }

    fetch('/auth/forgotPassword', requestOptions)
    .then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      }
      setSuccess(data.data.message);
      setEmail(''); // clears the textfield
      setPassword('');

    }).catch((error : string)  => {
      // setError({ errorMessage: error.toString() });
      console.error('Encountered error: ', error);
    })
  }
  
  return (
    <div id="sign-in" className="show fade">
      <div className="logo">
        <ZenSpaceLogo />
      </div>
      <div className="main" style={{overflow: 'hidden'}}>
        <div className="login-form">
          <div className='form-fields'>
              <h2 className="u-textcenter" style={{ letterSpacing: '0', marginBottom: "2rem" }}>
                Sign in
              </h2>
                {/* {error !== '' ? <p className="errorMessage">{error.errorMessage}</p> :
                    <div style={{display: 'none'}}></div>
                  }   
                {successMessage !== '' ? <p className="successMessage">{successMessage}</p> : ""}
                 */}
              <div className='input-group'>
                <div>
                  <div className='label'>
                    Email Address
                  </div>
                  <input
                      type="email"
                      name="email"
                      onInput={onChange}
                      value={email}
                      className="form-control"
                      autoCapitalize="off"
                      autoCorrect="off"
                      required
                      />
                </div> 
              <div>
                <div className='label'>
                  Password  
                </div>
                <input
                    type="password"
                    name="password"
                    onInput={onChange}
                    value={password}
                    className="form-control"
                    autoCapitalize="off"
                    autoCorrect="off"
                    required
                    />
                </div> 
              </div>
            <div
              className="acct-mgmt">
                <div>Forgot your password?</div>
              <Link
                href="/pricing">
                Need an Account?
              </Link>
              </div>
              <button
                className="btn btn-outline-dark"
                onClick={handleSubmit()}>
                Sign In
              </button>
            </div>    
        </div>
        {ResponsiveImage()}  
      </div>
    </div>
  );
}