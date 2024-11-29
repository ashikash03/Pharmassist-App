import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Auth.css';

function Auth() {
  const location = useLocation();
  const isRegister = location.pathname.includes('register');

  return (
    <MDBContainer fluid className="p-4 background-radial-gradient overflow-hidden">
      <MDBRow>
        {/* Left Side */}
        <MDBCol md="6" className="text-center text-md-start d-flex flex-column justify-content-center">
          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
            {isRegister ? 'Join Us Today' : 'Welcome Back'}
          </h1>
          <p className="px-3" style={{ color: 'hsl(218, 81%, 85%)' }}>
            {isRegister
              ? 'Create an account and enjoy exclusive benefits tailored for your business growth.'
              : 'Sign in to access your personalized dashboard and stay connected with your goals.'}
          </p>
        </MDBCol>

        {/* Right Side */}
        <MDBCol md="6" className="position-relative">
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className="my-5 bg-glass">
            <MDBCardBody className="p-5">
              <h2 className="text-center mb-4">{isRegister ? 'Create an Account' : 'Login to Your Account'}</h2>
              <form>
                {isRegister && (
                  <MDBInput wrapperClass="mb-4" label="Username" id="form1" type="text" />
                )}
                <MDBInput wrapperClass="mb-4" label="Email Address" id="form2" type="email" />
                <MDBInput wrapperClass="mb-4" label="Password" id="form3" type="password" />
                <MDBBtn className="w-100 mb-4" size="md">
                  {isRegister ? 'Sign Up' : 'Login'}
                </MDBBtn>
              </form>
              <div className="text-center">
                {isRegister ? (
                  <p>
                    Already have an account? <Link to="/login">Login here</Link>
                  </p>
                ) : (
                  <p>
                    Don’t have an account? <Link to="/register">Sign up now</Link>
                  </p>
                )}
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Auth;
