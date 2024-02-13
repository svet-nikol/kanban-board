// import React, { useState } from "react";
// import { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ru } from "date-fns/locale";

export default function Calendar({selected, setSelected}) {
  // const [selected, setSelected] = React.useState(null);
  // const [selected, setSelected] = useState(null);

  const customFormatMonthsDays = {
    ...ru,
    // localize: {
    //   month: (index, format) => {
    //     return format(
    //       [
    //         "Январь",
    //         "Февраль",
    //         "Март",
    //         "Апрель",
    //         "Май",
    //         "Июнь",
    //         "Июль",
    //         "Август",
    //         "Сентябрь",
    //         "Октябрь",
    //         "Ноябрь",
    //         "Декабрь",
    //       ][index]
    //     );
    //   },
    //   weekday: (index, format) => {
    //     return format(["пн", "вт", "ср", "чт", "пт", "сб", "вс"][index]);
    //   },
    // },
  };

  let footer = <p>Выберите срок исполнения.</p>;
  if (selected) {
    footer = <p>Срок исполнения: {format(selected, "dd.MM.yyyy")}.</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      locale={customFormatMonthsDays}
    />
  );
}
