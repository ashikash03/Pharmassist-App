import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <>
      <MDBNavbar light bgColor='light' expand='lg'>
        <MDBContainer>
          {/* Navbar Brand */}
          <MDBNavbarBrand href='#'>
            <img
              src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
              height='30'
              alt='MDB Logo'
              loading='lazy'
            />
          </MDBNavbarBrand>

          {/* Right-aligned Icons */}
          <MDBCollapse navbar className='d-flex justify-content-end'>
            <MDBNavbarNav className='d-flex flex-row'>
              <MDBNavbarItem className='me-3'>
                <MDBNavbarLink href='#'>
                  <MDBIcon fas icon='shopping-cart' />
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='me-3'>
                <MDBNavbarLink href='#'>
                  <MDBIcon fas icon='bell' />
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>
                  <MDBIcon fas icon='user' />
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Header;
