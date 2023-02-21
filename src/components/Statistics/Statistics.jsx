import { List, Item } from './Statisctics.styled';
import { Notification } from '../Notification/Notificaton';

const Statisctics = ({ good, neutral, bad, total, persentage }) => {
  if (total) {
    return (
      <List>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
        <Item>Total: {total}</Item>
        <Item>Positive feedback: {persentage}%</Item>
      </List>
    );
  }
  return <Notification message="There is no feedback" />;
};
export default Statisctics;
