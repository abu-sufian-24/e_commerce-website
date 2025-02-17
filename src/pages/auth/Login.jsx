
import { useContext } from "react";
import { Link, useNavigate } from "react-router"

import { toast } from "react-toastify";
import { AuthContext } from "../../context";
import { FaGooglePlusSquare } from "react-icons/fa";


function Login() {

  const { singin, signinWithGoogle } = useContext(AuthContext)
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    singin(email, password)
      .then((result) => {
        console.log(result)
        toast.success("Login success")


      })
      .catch((error) => {
        toast.error(error.message);
      });
    navigate('/')

  };

  const handleLoginWithGoogle = () => {
    signinWithGoogle().then((result) => {
      console.log(result)
      toast.success("Login success")


    })
      .catch((error) => {
        toast.error(error.message);
      });
    navigate('/')
  };

  return (
    <section className="login-wrapper my-5">
      <div className="container-2xl px-4">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="text-center">LOGIN</h2>
                <p className="text-center mb-4">Welcome Back!!</p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label mb-3">
                      Enter Your Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="enter email here ..."
                      name="email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label mb-3">
                      Enter Your password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="enter password here..."
                      name="password"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <Link to="" className="form-link">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className='m-0'>Dont have an account?</p>
                    <Link to="/register" className="form-link">
                      Sign up
                    </Link>
                  </div>
                  <div className="d-grid gap-2">
                    <button className=" btn btn-primary" type="submit">Login</button>
                  </div>
                </form>
                <div className="d-grid gap-2 mt-2">
                  <button
                    onClick={handleLoginWithGoogle}
                    className="btn btn-light  border"
                    type="submit"
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      borderColor: "#4285F4",
                      fontWeight: "bold",
                    }}
                  >

                    Login With Google <FaGooglePlusSquare className="ms-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login