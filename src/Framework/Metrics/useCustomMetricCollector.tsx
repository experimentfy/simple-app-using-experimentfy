export const useCustomMetricCollector = (element, configExperiment) => {
    element.addEventListener("onload", configExperiment.withMetricCollector({
        elementWrapper: element,
        configExperiment: configExperiment
      }), false);
}


