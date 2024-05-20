import Card from './components/card/Card'
import cards from './data/data.json'
import { Main, CardGrid } from "./App.styled";

const App = () => {

  const getColorByIndex = (index) => {
    const colors = ["#179D2E", "#0177B8", "#F5AF23", "#F02E2C"];
    const colorIndex = (index - 4) % colors.length;
    return colors[colorIndex >= 0 ? colorIndex : colorIndex + colors.length];
  };
  
	return (
    <Main>
      <CardGrid>
        {cards.map((card, i) => {
          const color = getColorByIndex(i)
          return(
            <Card key={card.category} category={card.category} svg={card.svg} tasks={card.tasks} color={color} />
          )
        })}
      </CardGrid>
		</Main>
	);
}

export default App;