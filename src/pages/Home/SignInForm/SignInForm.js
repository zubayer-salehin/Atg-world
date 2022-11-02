import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Form, Modal, Row, Spinner } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import facebook from "../../../images/LoginRegisterImage/Facebook_Logo_(2019).png"
import google from "../../../images/LoginRegisterImage/google.png"
import loginRegisterImage from "../../../images/mobile-login-concept-illustration_114360-83.jpg"


const SignInForm = (props) => {

    const [user] = useAuthState(auth);
    const [signInWithEmailAndPassword, epuser, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [signInWithFacebook, fuser, floading, ferror] = useSignInWithFacebook(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    let errorElement;

    const handleClose = () => {
        props.onHide();
        props.signupmodalshow();
    }

    const handleSignInSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        await signInWithEmailAndPassword(email, password);
        e.target.reset();
    }

    const handleFacebookLogin = async () => {
        await signInWithFacebook()
    }

    const handleGoogleLogin = async () => {
        await signInWithGoogle();
    }

    if (user) {
        props.onHide();
    }

    if (loading || googleLoading || floading) {
        return <Spinner animation="border" />
    }

    if (error || googleError || ferror) {
        errorElement = <p className='text-danger'>{error?.message || googleError?.message || ferror?.message}</p>
    }

    return (
        <Modal size="lg" {...props} aria-labelledby="contained-modal-title-vcenter" centered>
            <p className='rounded singUpHeaderText mb-3 d-none d-sm-block'>Let's learn, share & inspire each other with our passion for computer engineering. Sign In now 🤘🏼</p>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <h4 className='mb-4'>Sign In</h4>
                            <Form onSubmit={handleSignInSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control className='inputDesign' type="email" name="email" placeholder="Email" required />
                                    <div className='position-relative'>
                                        <Form.Control className='inputDesign border border-top-0' type="password" name="password" placeholder="Password" required />
                                        <FontAwesomeIcon className='password-icon' icon={faEye}></FontAwesomeIcon>
                                    </div>
                                </Form.Group>
                                {errorElement}
                                <input className='submit-btn' type="submit" value="Sign In" />
                                <button onClick={handleFacebookLogin} className='quickLoginRegisterButton mt-4'> <img className='loginRegisterImage' src={facebook} alt="" /> Sign in with Facebook</button>
                                <button onClick={handleGoogleLogin} className='quickLoginRegisterButton mt-2'> <img className='loginRegisterImage' src={google} alt="" /> Sign in with Google</button>
                                <p className='text-center mt-4 fs-14 fw-semibold'>Forget Password?</p>
                                <p className='text-center mt-3 d-block d-sm-none'>
                                Don’t have an account yet? <span onClick={handleClose} className='text-primary fw-semibold'>Create new for free!</span>
                            </p>
                            </Form>
                        </Col>
                        <Col className='d-none d-sm-block' xs={12} md={6}>
                            <p className='text-end'>
                                Don’t have an account yet? <span onClick={handleClose} className='text-primary fw-semibold'>Create new for free!</span>
                            </p>
                            <img className='img-fluid' src={loginRegisterImage} alt="" />
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
}


export default SignInForm;