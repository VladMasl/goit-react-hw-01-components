import StatisticsListItem from '../StatisticsListItem/StatisticsListItem';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';
const Statistics = props => {
  const { title, stats } = props;
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(el => (
          <StatisticsListItem key={el.id} {...el} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
export default Statistics;
