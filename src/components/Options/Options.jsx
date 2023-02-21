import { Buttons, Button } from './Options.styled';

export const FedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Buttons count={options.length}>
      {options.map(options => (
        <Button
          key={options}
          name={options}
          type="button"
          onClick={onLeaveFeedback}
        >
          {options}
        </Button>
      ))}
    </Buttons>
  );
};
export default FedbackOptions;
