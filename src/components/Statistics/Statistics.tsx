import { colorPicker } from '../../utils/colorPicker';
import  css  from './Statistics.module.css'

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
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            className={css.item}
            key={stat.id}
            style={{ backgroundColor: colorPicker() }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

