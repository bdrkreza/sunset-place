import { faKey, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div>
            <div class="form">
                <form class="form-horizontal signIn">
                    <div class="form-wrap" >
                        <h2>Login</h2>
                        <div class="form-group">
                            <label for="email">Username:</label>
                            <div class="relative">
                                <input class="form-control form-input" id="name" type="text" required="" autofocus="" title="" autocomplete="" placeholder="Username" />
                                <i class="icon">
                                    <FontAwesomeIcon icon={faUser} />
                                </i>

                            </div>
                        </div>

                        <div class="form-group">
                            <label for="email">Password:</label>
                            <div class="relative">
                                <input class="form-control form-input" type="password" required="" placeholder="Password" />
                                <i class="icon">
                                    <FontAwesomeIcon icon={faKey} />
                                </i>
                            </div>
                            <span class="pull-right"><small><a className="forgot" href="#">Forgot Password?</a></small></span>
                        </div>

                        <div class="login-btn">
                            <a href="#">
                                <button class="movebtn movebtnsu" type="Submit">
                                    Login
                                     <i class="ms-3">
                                        <FontAwesomeIcon icon={faLock} />
                                    </i>
                                </button>
                            </a>
                            <div class="relative">
                                <hr />
                                <span class="login-text">or login with</span>
                            </div>
                            <div class="clearfix"></div>
                            <div class="social-btn clearfix">
                                <a href="#">
                                    <button class="movebtn google" type="Submit">
                                        Google
                                     <i class="fa fa-fw fa-google"></i>
                                    </button>
                                </a>
                                <a href="#">
                                    <button class="movebtn facebook" type="Submit">
                                        Facebook
                                        <i class="fa fa-fw fa-facebook"></i>
                                    </button>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div class="sign-up">
                        <Link to='/signup' class="signbtn"><small>Not a member? Sign Up <i>(Click me)</i></small></Link>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;