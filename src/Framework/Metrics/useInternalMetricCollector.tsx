export const useInternalMetricCollector = (element, configExperiment) => {
    element.addEventListener(
        "click",
        (e) => {
          return configExperiment.withMetricCollector({
            event: e,
            configExperiment: configExperiment,
          });
        },
        false
      );
}


