import { setMetricCollector } from "../Factory/setMetricCollector";

const metrics = (config) => {
  if (!config.withMetricCollector) {
    return console.log(
      "Você precisa usar a função handleClick ou criar uma custom function para capturar os eventos manualmente no seu experimento"
    );
  }

  config.withMetricCollector(
    setMetricCollector({
      ...config
    })
  );
};

export default metrics;
