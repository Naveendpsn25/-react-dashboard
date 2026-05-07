import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

const data = [
  { subject: "Coding", value: 80 },
  { subject: "Design", value: 60 },
  { subject: "Communication", value: 70 },
  { subject: "Problem Solving", value: 90 },
  {subject:"Os",value:12}
];

export default function Practice() {
  return (
    <RadarChart width={400} height={400} data={data}>
      <Radar dataKey="value" />
      <PolarGrid/>
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar dataKey="value" stroke="blue" fill="blue" fillOpacity={0.6} />
    </RadarChart>
  );
}