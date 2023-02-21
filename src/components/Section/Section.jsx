import { Title } from './Section.styled';
const Section = ({ title, children }) => {
  return (
    <Title>
      <h2>{title}</h2>
      {children}
    </Title>
  );
};

export default Section;
