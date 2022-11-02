import React from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Form, Modal, Row, Spinner } from 'react-bootstrap';
import facebook from "../../../images/LoginRegisterImage/Facebook_Logo_(2019).png"
import google from "../../../images/LoginRegisterImage/google.png"
import loginRegisterImage from "../../../images/mobile-login-concept-illustration_114360-83.jpg"
import auth from "../../../firebase.init"
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';


const SignUpForm = (props) => {

    const [user] = useAuthState(auth);
    const [createUserWithEmailAndPassword, epuser, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithFacebook, fuser, floading, ferror] = useSignInWithFacebook(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    let errorElement;

    const handleClose = () => {
        props.onHide();
        props.signinmodalshow();
    }

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const fullName = firstName + " " + lastName;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: fullName })
            e.target.reset();
        }
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

    if (loading || updating || googleLoading || floading) {
        return <Spinner animation="border" />
    }

    if (error || updateError || googleError || ferror) {
        errorElement = <p className='text-danger'>{error?.message || updateError?.message || googleError?.error || ferror?.error}</p>
    }

    return (
        <Modal size="lg" {...props} aria-labelledby="contained-modal-title-vcenter" centered>
            <p className='rounded singUpHeaderText mb-3 d-none d-sm-block'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col xs={12} sm={6}>
                            <h4 className='mb-4'>Create Account</h4>
                            <Form onSubmit={handleSignUpSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Row>
                                        <Col className="pe-0">
                                            <Form.Control className='inputDesign border border-end-0' type="text" name="firstName" placeholder="First Name" required />
                                        </Col>
                                        <Col className='ps-0'>
                                            <Form.Control className='inputDesign' name="lastName" type="text" placeholder="Last Name" required />
                                        </Col>
                                    </Row>
                                    <Form.Control className='inputDesign border border-top-0' type="email" name="email" placeholder="Email" required />
                                    <div className='position-relative'>
                                        <Form.Control className='inputDesign border border-top-0' name="password" type="password" placeholder="Password" required />
                                        <FontAwesomeIcon className='password-icon' icon={faEye}></FontAwesomeIcon>
                                    </div>
                                    <Form.Control className='inputDesign border border-top-0' type="password" name="confirmPassword" placeholder="Confirm Password" required />
                                </Form.Group>
                                {errorElement}
                                <input className='submit-btn' type="submit" value="Create Account" />
                            </Form>
                            <button onClick={handleFacebookLogin} className='quickLoginRegisterButton mt-4'> <img className='loginRegisterImage' src={facebook} alt="" /> Sign Up with Facebook</button>
                            <button onClick={handleGoogleLogin} className='quickLoginRegisterButton mt-2'> <img className='loginRegisterImage' src={google} alt="" /> Sign Up with Google</button>
                            <p className='text-center mt-3 d-block d-sm-none'>
                                Already have an Account? <span className='text-primary fw-semibold' onClick={handleClose}>Sign In</span>
                            </p>
                        </Col>
                        <Col className='d-none d-sm-block' xs={12} sm={6}>
                            <p className='text-end'>
                                Already have an Account? <span className='text-primary fw-semibold' onClick={handleClose}>Sign In</span>
                            </p>
                            <img className='img-fluid' src={loginRegisterImage} alt="" />
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal >
    );
}


export default SignUpForm;