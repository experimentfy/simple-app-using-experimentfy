import { useInternalMetricCollector } from "../Metrics/useInternalMetricCollector";
import { useCustomMetricCollector } from "../Metrics/useCustomMetricCollector";

export const setMetricCollector = (configExperiment) => {
  const targetNode = document.querySelector("body");
  const config = { childList: true };

  const callback = (mutationList, _) => {
    const el = document.querySelector("#" + configExperiment.name);
    if (!el) {
      return console.log(
        "Não foi encontrado um ID no seu html com o nome do seu experimento"
      );
    }

    if (configExperiment.withMetricCollector.name === "handleClick") {
      useInternalMetricCollector(el, configExperiment);
    } else {
      useCustomMetricCollector(el, configExperiment);
    }

    observer.disconnect();
  };

  const observer = new MutationObserver(callback);

  observer.observe(targetNode, config);
};
