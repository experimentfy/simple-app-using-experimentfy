import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import chartExperimentInterface from "../chartExperimentInterface";

const AreaComponent = ({ chartData }: chartExperimentInterface) => {
  return (
    <>
      <h2>Area chart component</h2>
      <AreaChart
        className={"wagner"}
        width={500}
        height={400}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </>
  );
};

export default AreaComponent;
