import { AppRoutes } from "../../../lib/approutes";
import { useUser } from "../../../hooks/useUser";
import { PopExitBlock, PopExitContainer, PopExitFormGroup, PopExitSt, PopExitTtl } from "../PopUp.styled";
import { LinkButtonBgFill_153, LinkButtonTransparent_153 } from "../../Buttons/Buttons.styled";

function PopExit() {
  const { logoutUser } = useUser();
  return (
    <PopExitSt id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>Выйти из аккаунта?</PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <PopExitFormGroup>
              <LinkButtonBgFill_153
                className="_hover01"
                id="exitYes"
                onClick={logoutUser}
              >
                Да, выйти
              </LinkButtonBgFill_153>
              <LinkButtonTransparent_153
                className="_hover03"
                id="exitNo"
                to={AppRoutes.HOME}
              >
                Нет, остаться
              </LinkButtonTransparent_153>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitSt>
  );
}

export default PopExit;
