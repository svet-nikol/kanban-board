import Calendar from "../../Calendar/Calendar.jsx";
import { ButtonAutoWidthBgFill } from "../../Buttons/Buttons.styled.js";
import {
  PopNewCardSt,
  PopUpContainer,
  PopUpBlock,
  PopUpContent,
  PopNewCardTtl,
  PopNewCardBtnClose,
  PopUpWrap,
  PopUpForm,
  PopUpFormBlock,
  PopUpFormTextarea,
  PopUpFormInput,
} from "../PopUp.styled.js";
import { AppRoutes } from "../../../lib/approutes.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addNewTaskApi } from "../../../api.js";
import { useUser } from "../../../hooks/useUser.jsx";
import { useTasks } from "../../../hooks/useTasks.jsx";

function PopNewCard() {
  const { getTasks } = useTasks();

  const [selected, setSelected] = useState(null);
  const { isLoggedInUser } = useUser();

  const newTaskForm = {
    title: "",
    topic: "",
    description: "",
  };
  const [newTask, setNewTask] = useState(newTaskForm);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const [createNewTaskBtnLoading, setCreateNewTaskBtnLoading] = useState(false);
  const [newTaskFormError, setNewTaskFormError] = useState(null);

  const handleNewTaskAdd = async (e) => {
    let newCard = {
      ...newTask,
      data: selected,
    };
    try {
      e.preventDefault();
      setCreateNewTaskBtnLoading(true);
      await addNewTaskApi({
        token: isLoggedInUser.token,
        title: newCard.title,
        topic: newCard.topic,
        status: "Без статуса",
        description: newCard.description,
        date: newCard.data,
      }).then((data) => {
        getTasks(data.tasks);
      });
    } catch (error) {
      setNewTaskFormError(error.message);
    } finally {
      setCreateNewTaskBtnLoading(true);
    }
  };

  const topicsMeanings = ["Web Design", "Research", "Copywriting"];

  return (
    <PopNewCardSt id="popNewCard">
      <PopUpContainer>
        <PopUpBlock>
          {newTaskFormError ? (
            <p style={{ color: "red" }}>{newTaskFormError}</p>
          ) : (
            <PopUpContent>
              <PopNewCardTtl>Создание задачи</PopNewCardTtl>
              <Link to={AppRoutes.HOME}>
                <PopNewCardBtnClose>✖</PopNewCardBtnClose>
              </Link>
              <PopUpWrap>
                <PopUpForm id="formNewCard" action="#">
                  <PopUpFormBlock>
                    <label htmlFor="formTitle" className="subttl">
                      Название задачи
                    </label>
                    <PopUpFormInput
                      value={newTask.title}
                      onChange={handleInputChange}
                      type="text"
                      name="title"
                      id="formTitle"
                      placeholder="Введите название задачи..."
                      autoFocus=""
                    />
                  </PopUpFormBlock>
                  <PopUpFormBlock>
                    <label htmlFor="textArea" className="subttl">
                      Описание задачи
                    </label>
                    <PopUpFormTextarea
                      value={newTask.description}
                      onChange={handleInputChange}
                      name="description"
                      id="textArea"
                      placeholder="Введите описание задачи..."
                      // defaultValue={""}
                    />
                  </PopUpFormBlock>
                </PopUpForm>
                {/* <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <div className="calendar__block">
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
                      <div className="calendar__cell _cell-day _weekend">9</div>
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
                      Выберите срок исполнения <span className="date-control" />
                      .
                    </p>
                  </div>
                </div>
              </div> */}
                <Calendar selected={selected} setSelected={setSelected} />
              </PopUpWrap>
              <div className="pop-new-card__categories categories">
                <p className="categories__p subttl">Категория</p>
                {/* <div className="categories__themes">
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </div> */}

                <div className="prod_checbox">
                  <div className="radio-toolbar">
                    {topicsMeanings.map((item) => (
                      <button key={item}>
                        <input
                          type="radio"
                          id="radio1"
                          name="topic"
                          value={item}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="radio1" >{item}</label>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <ButtonAutoWidthBgFill
                id="btnCreate"
                onClick={handleNewTaskAdd}
                style={{
                  float: "right",
                  backgroundColor: createNewTaskBtnLoading ? "#94A6BE" : "",
                  border: createNewTaskBtnLoading ? "0.7px solid #94A6BE" : "",
                }}
                disabled={createNewTaskBtnLoading}
              >
                {createNewTaskBtnLoading
                  ? "Задача добавляется..."
                  : "Создать задачу"}
              </ButtonAutoWidthBgFill>
            </PopUpContent>
          )}
        </PopUpBlock>
      </PopUpContainer>
    </PopNewCardSt>
  );
}

export default PopNewCard;
