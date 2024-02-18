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
  PopNewCardTopicsBlock,
  PopNewCardTopicsTtl,
  PopUpFormLabel,
  PopNewCardTopicsBar,
  PopNewCardTopicLabel,
} from "../PopUp.styled.js";
import { AppRoutes } from "../../../lib/approutes.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addNewTaskApi } from "../../../api.js";
import { useUser } from "../../../hooks/useUser.jsx";
import { useTasks } from "../../../hooks/useTasks.jsx";
import { topicsWithColors } from "../../../lib/topics.js";
import { CalendarTtl, CalendarWrap } from "../../Calendar/Calendar.style.js";

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
    console.log({ [name]: value });
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
                    <PopUpFormLabel htmlFor="formTitle">
                      Название задачи
                    </PopUpFormLabel>
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
                    <PopUpFormLabel htmlFor="textArea">
                      Описание задачи
                    </PopUpFormLabel>
                    <PopUpFormTextarea
                      value={newTask.description}
                      onChange={handleInputChange}
                      name="description"
                      id="textArea"
                      placeholder="Введите описание задачи..."
                    />
                  </PopUpFormBlock>
                </PopUpForm>
                <CalendarWrap>
                  <CalendarTtl>Даты</CalendarTtl>
                  <Calendar selected={selected} setSelected={setSelected} />
                </CalendarWrap>
              </PopUpWrap>
              <PopNewCardTopicsBlock>
                <PopNewCardTopicsTtl>Категория</PopNewCardTopicsTtl>
                <PopNewCardTopicsBar>
                  {topicsWithColors.map((item, index) => (
                    <div key={item.topic}>
                      <input
                        type="radio"
                        id={`radio${index}`}
                        name="topic"
                        value={item.topic}
                        onChange={handleInputChange}
                        style={{ display: "none" }}
                      />
                      <PopNewCardTopicLabel
                        $themeColor={item.color}
                        htmlFor={`radio${index}`}
                      >
                        {item.topic}
                      </PopNewCardTopicLabel>
                    </div>
                  ))}
                </PopNewCardTopicsBar>
              </PopNewCardTopicsBlock>
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
