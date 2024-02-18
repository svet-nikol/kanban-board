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
} from "../PopUp.styled";
import Calendar from "../../Calendar/Calendar.jsx";
import {
  ButtonAutoWidth,
  ButtonAutoWidthBgFill,
} from "../../Buttons/Buttons.styled.js";
import { useEffect, useState } from "react";
import { useTasks } from "../../../hooks/useTasks.jsx";

function PopBrowse() {
  let { cardId } = useParams();
  const { tasks } = useTasks();
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
                    <div className="status__theme">
                      <p>Без статуса</p>
                    </div>
                    <div className="status__theme">
                      <p className="_gray">{task.status}</p>
                    </div>
                    <div className="status__theme">
                      <p>В работе</p>
                    </div>
                    <div className="status__theme">
                      <p>Тестирование</p>
                    </div>
                    <div className="status__theme">
                      <p>Готово</p>
                    </div>
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
                      // defaultValue={""}
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
                <div className="pop-new-card__calendar calendar">
                  <p className="calendar__ttl subttl">Даты</p>
                  {/* <div className="calendar__block">
                          <div className="calendar__nav">
                            <div className="calendar__month">Сентябрь 2023</div>
                            <div className="nav__actions">
                              <div className="nav__action" data-action="prev">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={6}
                                  height={11}
                                  viewBox="0 0 6 11"
                                >
                                  <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                                </svg>
                              </div>
                              <div className="nav__action" data-action="next">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={6}
                                  height={11}
                                  viewBox="0 0 6 11"
                                >
                                  <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="calendar__content">
                            <div className="calendar__days-names">
                              <div className="calendar__day-name">пн</div>
                              <div className="calendar__day-name">вт</div>
                              <div className="calendar__day-name">ср</div>
                              <div className="calendar__day-name">чт</div>
                              <div className="calendar__day-name">пт</div>
                              <div className="calendar__day-name -weekend-">сб</div>
                              <div className="calendar__day-name -weekend-">вс</div>
                            </div>
                            <div className="calendar__cells">
                              <div className="calendar__cell _other-month">28</div>
                              <div className="calendar__cell _other-month">29</div>
                              <div className="calendar__cell _other-month">30</div>
                              <div className="calendar__cell _cell-day">31</div>
                              <div className="calendar__cell _cell-day">1</div>
                              <div className="calendar__cell _cell-day _weekend">2</div>
                              <div className="calendar__cell _cell-day _weekend">3</div>
                              <div className="calendar__cell _cell-day">4</div>
                              <div className="calendar__cell _cell-day">5</div>
                              <div className="calendar__cell _cell-day ">6</div>
                              <div className="calendar__cell _cell-day">7</div>
                              <div className="calendar__cell _cell-day _current">8</div>
                              <div className="calendar__cell _cell-day _weekend _active-day">
                                9
                              </div>
                              <div className="calendar__cell _cell-day _weekend">
                                10
                              </div>
                              <div className="calendar__cell _cell-day">11</div>
                              <div className="calendar__cell _cell-day">12</div>
                              <div className="calendar__cell _cell-day">13</div>
                              <div className="calendar__cell _cell-day">14</div>
                              <div className="calendar__cell _cell-day">15</div>
                              <div className="calendar__cell _cell-day _weekend">
                                16
                              </div>
                              <div className="calendar__cell _cell-day _weekend">
                                17
                              </div>
                              <div className="calendar__cell _cell-day">18</div>
                              <div className="calendar__cell _cell-day">19</div>
                              <div className="calendar__cell _cell-day">20</div>
                              <div className="calendar__cell _cell-day">21</div>
                              <div className="calendar__cell _cell-day">22</div>
                              <div className="calendar__cell _cell-day _weekend">
                                23
                              </div>
                              <div className="calendar__cell _cell-day _weekend">
                                24
                              </div>
                              <div className="calendar__cell _cell-day">25</div>
                              <div className="calendar__cell _cell-day">26</div>
                              <div className="calendar__cell _cell-day">27</div>
                              <div className="calendar__cell _cell-day">28</div>
                              <div className="calendar__cell _cell-day">29</div>
                              <div className="calendar__cell _cell-day _weekend">
                                30
                              </div>
                              <div className="calendar__cell _other-month _weekend">
                                1
                              </div>
                            </div>
                          </div>
                          <input
                            type="hidden"
                            id="datepick_value"
                            defaultValue="08.09.2023"
                          />
                          <div className="calendar__period">
                            <p className="calendar__p date-end">
                              Срок исполнения:{" "}
                              <span className="date-control">09.09.23</span>
                            </p>
                          </div>
                        </div> */}
                  <Calendar
                    selected={selected}
                    setSelected={setSelected}
                    taskDate={task.date}
                  />
                </div>
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
                    <ButtonAutoWidth>Удалить задачу</ButtonAutoWidth>
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
                    <ButtonAutoWidth onClick={toggleEditMode}>Отменить</ButtonAutoWidth>
                    <ButtonAutoWidth id="btnDelete">
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
