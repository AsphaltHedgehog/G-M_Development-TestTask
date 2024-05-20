import styled from 'styled-components';

export const CardWrapper = styled.li`
  border: 3px solid #000000;
  border-color: ${props => props.borderColor};
  border-radius: 2px;
  padding: 24px;
  list-style-type: none;
  position: relative;

  overflow: hidden;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.svg`
  width: 94px;
  height: 100px;
  fill: ${({ svgColor }) => svgColor}; 
  stroke: ${({ svgStrokeColor }) => svgStrokeColor};
  margin-left: auto;
  align-self: flex-end
`;

export const Title = styled.h2`
  color: #181833;
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px; 
  align-self: flex-start
`;

export const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  max-width: 100%;
  align-self: flex-start;
  margin-bottom: 60px;

  @media (min-width: 1380px) {
    max-width: 376px;
  }
`;

export const TaskItem = styled.li`
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  overflow-wrap: break-word;

  list-style-type: disc;
  margin-left: 30px;
`;

export const TaskText = styled.p`
  margin: 0px;
`;

export const ViewMoreLink = styled.a`
  margin-left: auto; 
  text-decoration: underline; 
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;

  position: absolute;
  bottom: 18px;
  right: 18px;
`;