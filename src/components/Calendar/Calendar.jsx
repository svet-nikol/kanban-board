import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./day-picker.css";
import { ru } from "date-fns/locale";
import { useEffect, useState } from "react";

export default function Calendar({ selected, setSelected, taskDate }) {
  const [initialMonth, setInitialMonth] = useState(new Date());
  const [modifiers, setModifiers] = useState({});

  useEffect(() => {
    if (taskDate) {
      const newModifiers = {
        selected: new Date(taskDate),
      };
      setModifiers(newModifiers);
      setInitialMonth(new Date(taskDate));
    }
  }, [taskDate]);

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

  const customStyles = {
    color: "#94A6BE",
    fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontSize: "10px",
    width: "167px",
    height: "228px",
    selected: {
      color: "#000000",
    },
  };

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      locale={ru}
      style={customStyles}
      month={initialMonth}
      modifiers={modifiers}
      onDayClick={setSelected}
    />
  );
}
