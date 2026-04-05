import { contactButtons } from "../models/contactButtons";

const useContactController = () => {
  const getButtons = () => contactButtons;

  return { getButtons };
};

export default useContactController;