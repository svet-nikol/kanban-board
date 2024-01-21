import PopNewCard from "../components/pop-up/PopNewCard/PopNewCard";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../lib/approutes";

export default function NewCardPage({ addCard }) {
  const navigate = useNavigate();
  const handleAddCard = () => {
    addCard();
    navigate(AppRoutes.HOME);
  };
    return <PopNewCard addCard={handleAddCard}/>;
  }