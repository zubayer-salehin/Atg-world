import { faAngleDown, faFutbol, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Form, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import "./Header.css";
import userImage from "../../../images/post-user-image/photo-1567784177951-6fa58317e16b.jpeg";

const Header = () => {

    const [user] = useAuthState(auth);
    const [signupmodalshow, setsignupmodalshow] = useState(false);
    const [signinmodalshow, setsigninmodalshow] = useState(false);

    return (
        <Navbar sticky="top" className='header navbarMargin' bg="white" expand="lg">
            <div className='col'>
                <h3 className='logo fw-normal mb-0'><span className='logo-word'>ATG
                </span> W<span className='logo-word'><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon></span>RLD</h3>
            </div>
            <div className='col'>
                <Form className='position-relative'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control className='searchInput' type="email" placeholder="Search For Your Favorite Group in ATG" />
                    </Form.Group>
                    <FontAwesomeIcon className='search-icon' icon={faSearch}></FontAwesomeIcon>
                </Form>
            </div>
            <div className='col text-end'>
                <div>
                    {
                        user
                            ?
                            <div className='d-inline'>
                                <img className='userImage' src={userImage} alt="" />
                                <span className='fs-14'>{user?.displayName}</span>
                            </div>
                            :
                            <p className='d-inline mb-0' onClick={() => setsignupmodalshow(true)}>Create account. <span className='text-primary fw-semibold'>It's free!</span></p>
                    }
                    <FontAwesomeIcon className='angleDown' icon={faAngleDown}></FontAwesomeIcon>
                </div>
            </div>
            <SignUpForm show={signupmodalshow} onHide={() => setsignupmodalshow(false)} signinmodalshow={() => setsigninmodalshow(true)} />
            <SignInForm show={signinmodalshow} onHide={() => setsigninmodalshow(false)} signupmodalshow={() => setsignupmodalshow(true)} />
        </Navbar>
    );
};


export default Header;