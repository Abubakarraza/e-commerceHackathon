import React, { useState } from 'react';
import validator from 'validator';
import {
  BsEnvelopeFill,
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsKeyFill,
} from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { SpinnerRoundFilled } from 'spinners-react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../../slices/user/UserSlice';
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const state = useSelector((state) => state.user.loading);
  const [cpassword, setCpassword] = useState('');
  const [image, setImage] = useState('');
  const [disable, setDisable] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!imageUrl) {
      return window.alert(
        'image is not uploaded please check internet connection or choose another image'
      );
    }
    if (
      !name ||
      !email ||
      !password ||
      !cpassword ||
      !imageUrl ||
      !phone ||
      !validator.isEmail(email)
    ) {
      return alert('please type all field or valid email');
    }
    // if (!validator.isEmail(email)) {
    //   return window.alert('please Type valide email');
    // }

    if (password !== cpassword) {
      alert('Password must be match with Confirm Password');
    }
    dispatch(signUpUser({ name, email, password, imageUrl, phone })).then(
      (res) => {
        if (res.payload.status === 201) {
          window.alert('User is Successfully Registered');
          navigate('/signin');
        }
      }
    );

    setName('');
    setEmail('');
    setPassword('');
    setCpassword('');
    setPhone('');
  };
  const onUploadImageHandler = (e) => {
    e.preventDefault();
    setDisable(true);
    setImage(e.target.files[0]);
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'ansari53');
    data.append('cloud_name', 'ansari1567');
    fetch('https://api.cloudinary.com/v1_1/ansari1567/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        setImageUrl(res.url);
        setDisable(false);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <section className=" mb-5 " style={{ marginTop: '20px' }}>
        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: '25px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={onSubmitHandler}>
                        <div className="d-flex flex-row align-items-center mb-2">
                          <BsFillPersonFill
                            style={{
                              height: '25px',
                              width: '25px',
                              marginTop: '30px',
                            }}
                            className="fas  fa-lg me-3 fa-fw"
                          />
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <BsEnvelopeFill
                            style={{
                              height: '25px',
                              width: '25px',
                              marginTop: '30px',
                            }}
                            className="fas  fa-lg me-3 fa-fw"
                          />
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              required
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <BsFillTelephoneFill
                            style={{
                              height: '25px',
                              width: '25px',
                              marginBottom: '25px',
                            }}
                            className="fas  fa-lg me-3 fa-fw"
                          />
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Phone
                            </label>
                            <input
                              type="number"
                              id="form3Example4c"
                              className="form-control"
                              value={phone}
                              onChange={(e) => {
                                setPhone(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-2">
                          <BsKeyFill
                            style={{
                              height: '30px',
                              width: '30px',
                              marginTop: '30px',
                            }}
                            className="fas  fa-lg me-3 fa-fw"
                          />
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example5c">
                              Password
                            </label>
                            <input
                              type="password"
                              id="form3Example5c"
                              className="form-control"
                              value={password}
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <BsKeyFill
                            style={{
                              height: '30px',
                              width: '30px',
                              marginTop: '30px',
                            }}
                            className="fas  fa-lg me-3 fa-fw"
                          />
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              value={cpassword}
                              onChange={(e) => {
                                setCpassword(e.target.value);
                              }}
                              required
                            />
                          </div>
                        </div>
                        <label
                          style={{ marginLeft: '43px' }}
                          className="form-label"
                        >
                          Profile image
                        </label>
                        <div className="d-flex flex-row align-items-center ">
                          <CgProfile
                            style={{
                              height: '30px',
                              width: '30px',
                              marginTop: '3px',
                            }}
                            className="fas  fa-lg me-3 fa-fw"
                          />
                          <div className="input-group ">
                            <input
                              accept=".jpg,.png,.gif,.jpeg,"
                              type="file"
                              className="form-control"
                              id="inputGroupFile04"
                              aria-describedby="inputGroupFileAddon04"
                              aria-label="Upload"
                              onChange={(e) => onUploadImageHandler(e)}
                            />
                          </div>
                        </div>

                        {/* {
                                                    check ?
                                                        <div className='d-flex justify-content-center' style={{ color: "red" }}>
                                                            password is not match
                                                        </div>
                                                        :
                                                        <div className='d-flex justify-content-right' style={{ color: "green" }}>

                                                        </div>
                                                } */}

                        {/* {error} */}
                        {state && (
                          <SpinnerRoundFilled
                            style={{ marginLeft: '30px' }}
                            size={50}
                            thickness={100}
                            speed={100}
                            color="rgba(57, 122, 172, 1)"
                          />
                        )}
                        {disable && <div>Image is Uploading please wait</div>}

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg mt-3"
                            onClick={onSubmitHandler}
                            disabled={disable}
                          >
                            Register
                          </button>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-5 mb-lg-4">
                          <span>
                            Already have an account{' '}
                            <NavLink to="/signin">
                              <span>Login</span>
                            </NavLink>
                          </span>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
