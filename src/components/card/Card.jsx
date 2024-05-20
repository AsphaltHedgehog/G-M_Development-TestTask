import PropTypes from 'prop-types';
import sprite from "../../svg/sprite.svg"
import { CardWrapper, CardContainer, Icon, Title, TaskList, TaskItem, ViewMoreLink, TaskText} from "./Card.styled";


const Card = ({ svg, tasks, category, color }) => {

  return (
    <CardWrapper borderColor={color}>
      <CardContainer>
        {svg === "icon-outdoor" ? 
          <Icon svgColor="white" svgStrokeColor={color}>
            <use href={`${sprite}#${svg}`} />
          </Icon>
          :
          <Icon svgColor={color}>
            <use href={`${sprite}#${svg}`} />
          </Icon>
        }
        <Title>{category}</Title>
        <TaskList>
          {tasks.map((task, i) => (
            <TaskItem key={`${task}${i}`}><TaskText>{task}</TaskText></TaskItem>
          ))}
        </TaskList>
        <ViewMoreLink href="/">View more</ViewMoreLink>
      </CardContainer>
    </CardWrapper>
  )
};

Card.propTypes = {
  svg: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  category: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Card