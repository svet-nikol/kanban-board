import Column from "../Column/Column";

function MainContent() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column title={"без статуса"} />
            <Column title={"нужно сделать"} />
            <Column title={"в работе"} />
            <Column title={"тестирование"} />
            <Column title={"готово"} />
          </div>
        </div>
      </div>
    </main>
  );
}
export default MainContent;
