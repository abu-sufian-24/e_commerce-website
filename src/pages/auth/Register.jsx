



import { useContext } from "react";
import { Link, useNavigate } from "react-router"

import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { AuthContext } from "../../context";



function Register() {
  const { creatUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // Validate if password and confirmPassword match
    if (password !== confirmPassword) {
      console.log("Passwords do not match!");
      alert("Passwords do not match! Please try again.");
      return; // Stop further execution if validation fails
    }

    creatUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        updateProfile(user, {
          displayName: name,
        });
        toast.success("user created successfully")
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message)
      });
    navigate('/login');
  };
  return (
    <section className="login-wrapper my-5">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="text-center">Sign Up</h2>
                <p className="text-center mb-4">Join us in shopping!!</p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="name"
                      className="form-control"
                      id="name"
                      placeholder="Enter Your Name here ..."
                      name="name"
                      required
                    />
                    {Error.name && (
                      <span className="text-red">
                        {Error.name?.message}
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter Your Email here ..."
                      name="email"
                      required
                    />
                  </div>
                  <div className="mb-3">

                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter Your Password here..."
                      name="password"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm Your password here..."
                      name="confirmPassword"
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className='m-0'>Have an account?</p>
                    <Link to="/login" className="form-link">
                      Login
                    </Link>
                  </div>
                  <div className="d-grid gap-2">
                    <button className=" btn btn-primary" type="submit">Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register