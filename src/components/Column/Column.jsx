import Card from "../Card/Card";

function Column({ title }) {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Card
          classNameTheme={"_green"}
          theme={"Research"}
          name={"Название задачи"}
          deadline={"30.10.23"}
        />
        <Card
          classNameTheme={"_orange"}
          theme={"Web Design"}
          name={"Название задачи"}
          deadline={"30.11.23"}
        />
        <Card
          classNameTheme={"_purple"}
          theme={"Copywriting"}
          name={"Название задачи"}
          deadline={"30.12.23"}
        />
      </div>
    </div>
  );
}

export default Column;
