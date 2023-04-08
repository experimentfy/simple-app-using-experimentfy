import { getSelector } from "../Factory/getSelector";
import metrics from "../Metrics";
const Experiment = ({ config }: any) => {
  let implementation = null;
  if (!config) {
    console.error("Você não tem o objeto config no seu component <Experiment>");
    return (
      <div>
        Você não tem o objeto config no seu component 'Experiment' para iniciar
        um experimento
      </div>
    );
  }

  implementation = getSelector(config);
  if (!implementation) {
    return null;
  }

  metrics({
    ...config,
    implementationSelected: implementation.type.name
  });

  return <div id={config.name}>{implementation}</div>;
};

export default Experiment;
