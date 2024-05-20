import Card from './components/Card';
import cards from './data/data.json'

const App = () => {

  const getColorByIndex = (index) => {
    const colors = ["#179D2E", "#0177B8", "#F5AF23", "#F02E2C"];
    const colorIndex = (index - 4) % colors.length;
    return colors[colorIndex >= 0 ? colorIndex : colorIndex + colors.length];
  };
  
	return (
    <main>
      <ul>
        {cards.map((card, i) => {
          const color = getColorByIndex(i)
          return(
            <Card key={card.category} category={card.category} svg={card.svg} tasks={card.tasks} color={color} />
          )
        })}
      </ul>
		</main>
	);
}

export default App;