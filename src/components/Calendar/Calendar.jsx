import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./day-picker.css";
import { ru } from "date-fns/locale";


export default function Calendar({ selected, setSelected, initialMonth, setInitialMonth, modifiers, setModifiers }) {

  let footer = <p>Выберите срок исполнения.</p>;
  if (selected) {
    footer = (
      <p>
        Срок исполнения:{" "}
        <span style={{ color: "#000000" }}>
          {format(selected, "dd.MM.yyyy")}
        </span>
        .
      </p>
    );
  }

  const handleMonthChange = (date) => {
    setInitialMonth(date);
  };

  const handleDayChange = (selectedDate) => {
    setModifiers(selectedDate);
  };

  const customStyles = {
    fontFamily: "Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    selected: {
      color: "#000000",
    }
  };

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      onMonthChange={handleMonthChange}
      footer={footer}
      locale={ru}
      style={customStyles}
      month={initialMonth}
      modifiers={modifiers}
      onDayClick={handleDayChange}
    />
  );
}
