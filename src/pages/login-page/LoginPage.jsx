import "./signin.css";
import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../lib/approutes.js";
import { useState } from "react";
import { loginUser } from "../../api.js";

export default function LoginPage({ setIsLoggedIn }) {
  const [loginFormData, setLoginFormData] = useState({
    login: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  let navigate = useNavigate();

  const [loginBtnLoading, setLoginBtnLoading] = useState(false);
  const [loginFormError, setLoginFormError] = useState(null);

  const handleLoggedInUserClick = async (e) => {
    try {
      e.preventDefault();
      setLoginBtnLoading(true);
      const loggedInUser = await loginUser({
        login: loginFormData.login,
        password: loginFormData.password,
      });
      setIsLoggedIn(loggedInUser.user);
      navigate(AppRoutes.HOME);
    } catch (error) {
      setLoginFormError(error.message);
    } finally {
      setLoginBtnLoading(false);    
    }
  };

  return (
    <div className="wrapper">
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            {loginFormError ? (<p style={{ color: "red" }}>{loginFormError}</p>)
            :
             (<>
             <div className="modal__ttl">
             <h2>Вход</h2>
           </div>
           <form className="modal__form-login" id="formLogIn" action="#">
             <input
               className="modal__input"
               type="text"
               name="login"
               id="formlogin"
               placeholder="Эл. почта"
               value={loginFormData.login}
               onChange={handleInputChange}
             />
             <input
               className="modal__input"
               type="password"
               name="password"
               id="formpassword"
               placeholder="Пароль"
               value={loginFormData.password}
               onChange={handleInputChange}
             />
             <button
               className="modal__btn-enter _hover01"
               id="btnEnter"
               disabled={loginBtnLoading}
               style={{backgroundColor: loginBtnLoading ? "#94A6BE" : "#565EEF"}}
               onClick={handleLoggedInUserClick}
             >
               Войти
             </button>
             <div className="modal__form-group">
               <p>Нужно зарегистрироваться?</p>
               <Link to={AppRoutes.REGISTER}>Регистрируйтесь здесь</Link>
             </div>
           </form>
           </>)}

          </div>
        </div>
      </div>
    </div>
  );
}
