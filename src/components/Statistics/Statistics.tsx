import  './Statistics.css';
import { colorPicker } from '../../utils/colorPicker';

type  Stats = {
  id:string;
  label: string;
  percentage: number;
};

interface Props {
  stats: Stats[];
  title?: string;
}


export const Statistics = ({ title="", stats }:Props) => {
  return (
    <section className="Statistics">
      {title && <h2 className="Title">{title}</h2>}
      <ul className="StatList">
        {stats.map(stat => (
          <li
            className="Item"
            key={stat.id}
            style={{ backgroundColor: colorPicker() }}
          >
            <span className="Label">{stat.label}</span>
            <span className="Percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

