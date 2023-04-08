import { randomSelector, timeSelector } from "../Selectors";

export const getSelector = (config) => {
  if (!config.withSelector) {
    return "Você não tem um seletor default ou um custom no início do seu experimento";
  }

  if (config.withSelector === "randomSelector") {
    return randomSelector(config.components);
  }

  if (config.withSelector === "timeSelector") {
    return timeSelector(config.components);
  }

  return config.withSelector(config.components);
};
