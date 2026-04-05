import { aboutModel } from "../models/aboutModel";

const useAboutController = () => {
  const getAbout = () => aboutModel;

  return { getAbout };
};

export default useAboutController;