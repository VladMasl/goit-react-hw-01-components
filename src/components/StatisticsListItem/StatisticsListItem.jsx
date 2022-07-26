import PropTypes from 'prop-types';
import s from './StatisticsListItem.module.css';
const StatisticsListItem = ({ label, percentage }) => {
  return(
  <li className={s.item}>
    <span className={s.label}>{label}</span>
    <span className={s.percentage}>{percentage}%</span>
  </li>);
};

StatisticsListItem.propTypes = {
  label: PropTypes.string,
  npercentage: PropTypes.number,
};
export default StatisticsListItem;
