import { Link } from "react-router-dom";
import { AppRoutes } from "../../../lib/approutes";

function PopExit({ toggleIsLoggedIn }) {
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <Link
                className="pop-exit__exit-yes _hover01"
                id="exitYes"
                to={AppRoutes.LOGIN}
                onClick={toggleIsLoggedIn}
              >
                Да, выйти
              </Link>
              <Link
                className="pop-exit__exit-no _hover03"
                id="exitNo"
                to={AppRoutes.HOME}
              >
                Нет, остаться
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopExit;
