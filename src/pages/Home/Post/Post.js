import { faAngleDown, faArrowRightFromBracket, faBriefcase, faCalendarAlt, faEdit, faExclamationCircle, faEye, faLocationDot, faShareNodes, faThumbsUp, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Container, Dropdown, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import "./Post.css";
import postImage1 from "../../../images/Post-Image/daniel-plan-Vw6PwmjrtiE-unsplash.jpg"
import postImage2 from "../../../images/Post-Image/daria-kraplak-NLMo5JXMdHY-unsplash.jpg"
import postImage3 from "../../../images/Post-Image/david-clarke-cVkfaTS2Nog-unsplash.jpg"
import userImage1 from "../../../images/post-user-image/cropped-Profile-Picture-Round-Color.png";
import userImage2 from "../../../images/post-user-image/d6kofdhg5a7jg64p8ytb.jpeg";
import userImage3 from "../../../images/post-user-image/male1.png";
import userImage4 from "../../../images/post-user-image/Profile-Round-Sander-Lorier.jpg";

const Post = () => {

    const [user] = useAuthState(auth);
    const [signupmodalshow, setsignupmodalshow] = useState(false);
    const [signinmodalshow, setsigninmodalshow] = useState(false);

    const handleLogOut = () => {
        signOut(auth);
    }

    return (
        <Container className='post'>
            <div className='row postNavbarDegine'>
                <div className='col-4 col-sm-8 px-0 postNavbar'>
                    <ul>
                        <li className='fw-semibold d-block'>All Posts(32)</li>
                        <li>Article</li>
                        <li>Events</li>
                        <li>Education</li>
                        <li>Jobs</li>
                    </ul>
                </div>
                <div className='col-8 col-sm-4 px-0 text-end'>
                    <button className='writePost'>Write a Post <FontAwesomeIcon className='angleDown' icon={faAngleDown}></FontAwesomeIcon></button>
                    {
                        user
                            ?
                            <button onClick={handleLogOut} className='leaveGroup'><FontAwesomeIcon className="usersIcon" icon={faArrowRightFromBracket}></FontAwesomeIcon>Leave Group</button>
                            :
                            <button onClick={() => setsignupmodalshow(true)} className='joinGroup'><FontAwesomeIcon className="usersIcon" icon={faUsers}></FontAwesomeIcon>Join Group</button>
                    }
                </div>
                <SignUpForm show={signupmodalshow} onHide={() => setsignupmodalshow(false)} signinmodalshow={() => setsigninmodalshow(true)} />
                <SignInForm show={signinmodalshow} onHide={() => setsigninmodalshow(false)} signupmodalshow={() => setsignupmodalshow(true)} />
            </div>
            <div className="mt-4">
                <div className='row g-5'>
                    <div className='col-12 col-sm-8 ps-sm-2'>
                        <div className='postDegine'>
                            <img className='postImage' src={postImage1} alt="" />
                            <div className='postInfo'>
                                <h4>✍️ Article</h4>
                                <div className="row">
                                    <div className="col-10 col-sm-11">
                                        <h3>What if famous brands had regular fonts? Meet RegulaBrands!</h3>
                                    </div>
                                    <div className="col-2 col-sm-1">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="white" id="dropdown-basic">
                                                <h3>···</h3>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item >Edit</Dropdown.Item>
                                                <Dropdown.Item >Report</Dropdown.Item>
                                                <Dropdown.Item >Option 3</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                                <div className='row'>
                                    <div className="col-10 col-sm-8">
                                        <div className='d-flex align-items-center'>
                                            <img className='userPostImage' src={userImage1} alt="" />
                                            <h5>Sarthak Kamra</h5>
                                        </div>
                                    </div>
                                    <div className="col-2 col-sm-4 mt-2">
                                        <div className='d-flex align-items-center justify-content-end'>
                                            <span className='fs-14 fw-semibold d-none d-sm-block'> <FontAwesomeIcon className='me-1' icon={faEye}></FontAwesomeIcon> 1.4k veiws</span>
                                            <FontAwesomeIcon className='share' icon={faShareNodes}></FontAwesomeIcon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='postDegine mt-3'>
                            <img className='postImage' src={postImage2} alt="" />
                            <div className='postInfo'>
                                <h4>🔬️ Education</h4>
                                <div className="row">
                                    <div className="col-10 col-sm-11">
                                        <h3>Tax Benefits for Investment under National Pension Scheme launched by Government</h3>
                                    </div>
                                    <div className="col-2 col-sm-1">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="white" id="dropdown-basic">
                                                <h3>···</h3>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item >Edit</Dropdown.Item>
                                                <Dropdown.Item >Report</Dropdown.Item>
                                                <Dropdown.Item >Option 3</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                                <div className='row'>
                                    <div className="col-10 col-sm-8">
                                        <div className='d-flex align-items-center'>
                                            <img className='userPostImage' src={userImage2} alt="" />
                                            <h5>Sarah West</h5>
                                        </div>
                                    </div>
                                    <div className="col-2 col-sm-4 mt-2">
                                        <div className='d-flex align-items-center justify-content-end'>
                                            <span className='fs-14 fw-semibold d-none d-sm-block'> <FontAwesomeIcon className='me-1' icon={faEye}></FontAwesomeIcon> 4.8k veiws</span>
                                            <FontAwesomeIcon className='share' icon={faShareNodes}></FontAwesomeIcon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='postDegine mt-3'>
                            <img className='postImage' src={postImage3} alt="" />
                            <div className='postInfo'>
                                <h4>🗓️ Meetup</h4>
                                <div className="row">
                                    <div className="col-10 col-sm-11">
                                        <h3>Finance & Investment Elite Social Mixer @Lujiazui</h3>
                                    </div>
                                    <div className="col-2 col-sm-1">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="white" id="dropdown-basic">
                                                <h3 className='mb-0'>···</h3>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item >Edit</Dropdown.Item>
                                                <Dropdown.Item >Report</Dropdown.Item>
                                                <Dropdown.Item >Option 3</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-5 col-sm-4 date"> <FontAwesomeIcon className='me-1' icon={faCalendarAlt}></FontAwesomeIcon> Fri, 12 Oct, 2018</div>
                                    <div className="col-7 col-sm-4 mb-3 location"> <FontAwesomeIcon className='me-2' icon={faLocationDot}></FontAwesomeIcon>Ahmedabad, India</div>
                                </div>
                                <button className='visit-btn'>Visit Website</button>
                                <div className='row'>
                                    <div className="col-8">
                                        <div className='d-flex align-items-center'>
                                            <img className='userPostImage' src={userImage3} alt="" />
                                            <h5>Ronal Jones</h5>
                                        </div>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <div className='d-flex align-items-center justify-content-end'>
                                            <span className='fs-14 fw-semibold d-none d-sm-block'> <FontAwesomeIcon className='me-1' icon={faEye}></FontAwesomeIcon> 1.4k veiws</span>
                                            <FontAwesomeIcon className='share' icon={faShareNodes}></FontAwesomeIcon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='postDegine mt-3 mb-5'>
                            <div className='postInfo'>
                                <h4>💼️ Job</h4>
                                <div className="row">
                                    <div className="col-10 col-sm-11">
                                        <h3>Software Developer</h3>
                                    </div>
                                    <div className="col-2 col-sm-1">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="white" id="dropdown-basic">
                                                <h3 className='mb-0'>···</h3>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item >Edit</Dropdown.Item>
                                                <Dropdown.Item >Report</Dropdown.Item>
                                                <Dropdown.Item >Option 3</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-7 col-sm-6 fw-semibold data"> <FontAwesomeIcon className='me-1' icon={faBriefcase}></FontAwesomeIcon> Innovacer Private Ltd.</div>
                                    <div className="col-5 col-sm-4 fw-semibold mb-3 location"> <FontAwesomeIcon className='me-2' icon={faLocationDot}></FontAwesomeIcon>Noida, India</div>
                                </div>
                                <button className='visit-btn text-success'>Apply on Timesjobs</button>
                                <div className='row'>
                                    <div className="col-8">
                                        <div className='d-flex align-items-center'>
                                            <img className='userPostImage' src={userImage4} alt="" />
                                            <h5>Joseph Gray</h5>
                                        </div>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <div className='d-flex align-items-center justify-content-end'>
                                            <span className='fs-14 fw-semibold d-none d-sm-block'> <FontAwesomeIcon className='me-1' icon={faEye}></FontAwesomeIcon> 1.4k veiws</span>
                                            <FontAwesomeIcon className='share' icon={faShareNodes}></FontAwesomeIcon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4 pe-sm-2 pt-0 pt-sm-5 d-none d-sm-block locationRecommended'>
                        <Form.Group className="mb-4 position-relative" controlId="formBasicPassword">
                            <Form.Control className='locationInput' type="text" value="Noida, India" />
                            <FontAwesomeIcon className='locationIcon' icon={faLocationDot}></FontAwesomeIcon>
                            <FontAwesomeIcon className='editIcon' icon={faEdit}></FontAwesomeIcon>
                        </Form.Group>
                        <div className='d-flex pt-2'>
                            <FontAwesomeIcon className='mt-1' icon={faExclamationCircle}></FontAwesomeIcon>
                            <p className='locationdesc'>Your location will help us serve better and extend a personalised experience.</p>
                        </div>
                        {
                            user
                                ?
                                <>
                                    <div className='d-flex pt-5'>
                                        <FontAwesomeIcon className='mt-1' icon={faThumbsUp}></FontAwesomeIcon>
                                        <p className='locationdesc'>Recommended Groups</p>
                                    </div>
                                    <div className='recommended'>
                                        <div className='row mt-4'>
                                            <div className='col-8'>
                                                <img src={userImage1} alt="" />
                                                <p className='d-inline mb-0 ms-3 fs-14'>Leisure</p>
                                            </div>
                                            <div className='col-4'>
                                                <button className='followBtn'>Follow</button>
                                            </div>
                                        </div>
                                        <div className='row mt-4'>
                                            <div className='col-8'>
                                                <img src={userImage2} alt="" />
                                                <p className='d-inline mb-0 ms-3 fs-14'>Activism</p>
                                            </div>
                                            <div className='col-4'>
                                                <button className='followBtn'>Follow</button>
                                            </div>
                                        </div>
                                        <div className='row mt-4'>
                                            <div className='col-8'>
                                                <img src={userImage3} alt="" />
                                                <p className='d-inline mb-0 ms-3 fs-14'>MBA</p>
                                            </div>
                                            <div className='col-4'>
                                                <button className='followBtn'>Follow</button>
                                            </div>
                                        </div>
                                        <div className='row mt-4'>
                                            <div className='col-8'>
                                                <img src={userImage4} alt="" />
                                                <p className='d-inline mb-0 ms-3 fs-14'>Philosophy</p>
                                            </div>
                                            <div className='col-4'>
                                                <button className='followBtn'>Follow</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                <></>
                        }
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Post;