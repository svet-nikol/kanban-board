import { Link, useParams } from "react-router-dom";
import { AppRoutes } from "../../../lib/approutes";
import {
  PopBrowseSt,
  PopUpContainer,
  PopUpBlock,
  PopUpContent,
  PopUpTtl,
  PopUpWrap,
  PopUpForm,
  PopUpFormBlock,
  PopUpFormTextarea,
  PopUpThemeUp,
  PopUpThemeTextUp,
  PopUpTopBlock,
  PopUpStatusBlock,
  PopUpStatusTtl,
  PopUpStatusThemes,
  PopUpStatusThemeWrap,
  PopUpStatusThemeText,
  PopUpFormLabel,
  PopUpStatusLabel,
} from "../PopUp.styled";
import Calendar from "../../Calendar/Calendar.jsx";
import {
  ButtonAutoWidth,
  ButtonAutoWidthBgFill,
} from "../../Buttons/Buttons.styled.js";
import { useEffect, useState } from "react";
import { useTasks } from "../../../hooks/useTasks.jsx";
import { CalendarTtl, CalendarWrap } from "../../Calendar/Calendar.style.js";
import { deleteTaskApi } from "../../../api.js";
import { useUser } from "../../../hooks/useUser.jsx";
import { statusList } from "../../../lib/statusList.js";

function PopBrowse() {
  let { cardId } = useParams();
  const { tasks, getTasks } = useTasks();
  const { isLoggedInUser } = useUser();
  const [task, setTask] = useState(null);
  const [themeColor, setThemeColor] = useState(null);
  const [isEditMode, setEditMode] = useState(false);
  const [selected, setSelected] = useState(null); // для календаря

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  useEffect(() => {
    const foundTask = tasks.find((t) => t._id === cardId);
    if (foundTask) {
      setTask(foundTask);
      setSelected(foundTask.date);
      let color;
      switch (foundTask.topic) {
        case "Web Design":
          color = "_orange";
          setThemeColor(color);
          break;
        case "Copywriting":
          color = "_purple";
          setThemeColor(color);
          break;
        case "Research":
          color = "_green";
          setThemeColor(color);
          break;
        default:
          color = "_gray";
          setThemeColor(color);
          break;
      }
    }
  }, [cardId, tasks]);

  if (task) {
    const handleTaskDelete = async (e) => {
      try {
        e.preventDefault();
        await deleteTaskApi({
          token: isLoggedInUser.token,
          idTask: task._id,
        }).then((data) => {
          getTasks(data.tasks);
        });
      } catch (error) {
        console.log(error.message);
      }
    };

    return (
      <PopBrowseSt id="popBrowse">
        <PopUpContainer>
          <PopUpBlock>
            <PopUpContent>
              <PopUpTopBlock>
                <PopUpTtl>{task.title}</PopUpTtl>
                <PopUpThemeUp $themeColor={themeColor}>
                  <PopUpThemeTextUp>{task.topic}</PopUpThemeTextUp>
                </PopUpThemeUp>
              </PopUpTopBlock>
              <PopUpStatusBlock>
                <PopUpStatusTtl>Статус</PopUpStatusTtl>
                {isEditMode ? (
                  <PopUpStatusThemes>
                    {statusList.map((item, index) => (
                      <div key={item}>
                        <input
                          type="radio"
                          id={`radio${index}`}
                          name="topic"
                          value={item}
                          checked={item === task.status}
                          // onChange={handleInputChange}
                          style={{ display: "none" }}
                        />
                        <PopUpStatusLabel
                          htmlFor={`radio${index}`}
                        >
                          {item}
                        </PopUpStatusLabel>
                      </div>
                    ))}
                  </PopUpStatusThemes>
                ) : (
                  <PopUpStatusThemes>
                    <PopUpStatusThemeWrap>
                      <PopUpStatusThemeText>{task.status}</PopUpStatusThemeText>
                    </PopUpStatusThemeWrap>
                  </PopUpStatusThemes>
                )}
              </PopUpStatusBlock>
              <PopUpWrap>
                <PopUpForm id="formBrowseCard" action="#">
                  <PopUpFormBlock>
                    <PopUpFormLabel htmlFor="textArea01">
                      Описание задачи
                    </PopUpFormLabel>
                    <PopUpFormTextarea
                      name="text"
                      id="textArea01"
                      readOnly=""
                      placeholder="Введите описание задачи..."
                      value={task.description}
                      disabled={!isEditMode}
                      style={{
                        color: !isEditMode ? "rgb(148, 166, 190)" : "",
                        backgroundColor: !isEditMode
                          ? "rgb(234, 238, 246)"
                          : "",
                      }}
                    />
                  </PopUpFormBlock>
                </PopUpForm>
                <CalendarWrap>
                  <CalendarTtl>Даты</CalendarTtl>
                  <Calendar
                    selected={selected}
                    setSelected={setSelected}
                    taskDate={task.date}
                  />
                </CalendarWrap>
              </PopUpWrap>
              <div
                className="theme-down__categories theme-down"
                style={{ display: "none" }}
              >
                <p className="categories__p subttl">Категория</p>
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
              </div>
              {!isEditMode ? (
                <div className="pop-browse__btn-browse ">
                  <div className="btn-group">
                    <ButtonAutoWidth onClick={toggleEditMode}>
                      Редактировать задачу
                    </ButtonAutoWidth>
                    <ButtonAutoWidth onClick={handleTaskDelete}>
                      Удалить задачу
                    </ButtonAutoWidth>
                  </div>
                  <Link to={AppRoutes.HOME}>
                    <ButtonAutoWidthBgFill className="_hover03">
                      Закрыть
                    </ButtonAutoWidthBgFill>
                  </Link>
                </div>
              ) : (
                <div className="pop-browse__btn-edit">
                  <div className="btn-group">
                    <ButtonAutoWidthBgFill>Сохранить</ButtonAutoWidthBgFill>
                    <ButtonAutoWidth onClick={toggleEditMode}>
                      Отменить
                    </ButtonAutoWidth>
                    <ButtonAutoWidth id="btnDelete" onClick={handleTaskDelete}>
                      Удалить задачу
                    </ButtonAutoWidth>
                  </div>
                  <Link to={AppRoutes.HOME}>
                    <ButtonAutoWidthBgFill>Закрыть</ButtonAutoWidthBgFill>
                  </Link>
                </div>
              )}
            </PopUpContent>
          </PopUpBlock>
        </PopUpContainer>
      </PopBrowseSt>
    );
  }
}

export default PopBrowse;
