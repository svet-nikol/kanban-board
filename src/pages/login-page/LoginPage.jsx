import "./signin.css";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/approutes.js";
import { useState } from "react";
import { loginUserApi } from "../../api.js";
import { useUser } from "../../hooks/useUser.jsx";

export default function LoginPage() {
  const { loginUser } = useUser();

  const loginForm = {
    login: "",
    password: "",
  };
  const [loginFormData, setLoginFormData] = useState(loginForm);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const [loginBtnLoading, setLoginBtnLoading] = useState(false);
  const [loginFormError, setLoginFormError] = useState(null);

  const handleLoggedInUserClick = async (e) => {
    try {
      e.preventDefault();
      setLoginBtnLoading(true);
      const loggedInUser = await loginUserApi({
        login: loginFormData.login,
        password: loginFormData.password,
      });
      loginUser(loggedInUser.user);
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
            {loginFormError ? (
              <p style={{ color: "red" }}>{loginFormError}</p>
            ) : (
              <>
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
                    style={{
                      backgroundColor: loginBtnLoading ? "#94A6BE" : "#565EEF",
                    }}
                    onClick={handleLoggedInUserClick}
                  >
                    Войти
                  </button>
                  <div className="modal__form-group">
                    <p>Нужно зарегистрироваться?</p>
                    <Link to={AppRoutes.REGISTER}>Регистрируйтесь здесь</Link>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
