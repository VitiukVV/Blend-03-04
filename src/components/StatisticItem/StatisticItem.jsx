import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';
import { IconContext } from "react-icons";
import PropTypes from 'prop-types';

export const StatisticItem = ({title, total, icon}) => {
  return <div>
    <StatisticBox>
      <IconContext.Provider value={{ size:"2em", color: "blue"}}>
        {icon}
        </IconContext.Provider>
      <StatisticCounter>{ total}</StatisticCounter>
      <StatisticText>{title }</StatisticText>
  </StatisticBox>
  </div>;
};
StatisticItem.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  icon: PropTypes.node.isRequired
};