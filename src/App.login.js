import logo from './logo.svg';
import './App.css';
function MyInput(props){
  const {type,label}=props;
  return (
    <div className="form-floating mb-3">
      <input className="form-control" id="inputEmail" type={type} placeholder="name@example.com" />
      <label for="inputEmail">{label}</label>
    </div>
  )
}
function MyCard(props){
  const {children}=props;
  return(
    <div className="card shadow-lg border-0 rounded-lg mt-5">
      <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
      <div className="card-body">
        {children}
      </div>
      <div className="card-footer text-center py-3">
        <div className="small"><a href="register.html">Need an account? Sign up!</a></div>
      </div>
    </div>
  )
}
function App() {
  return (
    <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                              <MyCard>
                                <form>
                                  <MyInput type="email" label="Adresse E-mail"/>
                                  <MyInput type="password" label="Mot De Passe"/>
                                  <div className="form-check mb-3">
                                    <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                    <label className="form-check-label" for="inputRememberPassword">Remember Password</label>
                                  </div>
                                  <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                    <a className="small" href="password.html">Forgot Password?</a>
                                    <a className="btn btn-primary" href="index.html">Login</a>
                                  </div>
                                </form>
                              </MyCard>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2022</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
  );
}

export default App;
