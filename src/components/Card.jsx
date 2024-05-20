import sprite from "../svg/sprite.svg"

const Card = ({ svg, tasks, category, color }) => {

  return (
    <li>
      <div >
        {svg === "icon-outdoor" ? <svg width={94} height={100} fill={"white"} stroke={color}>
          <use href={`${sprite}#${svg}`}/>
        </svg> : 
        <svg width={94} height={100} fill={color}>
          <use href={`${sprite}#${svg}`}/>
        </svg>}
        <h2>{category}</h2>
        <ul>
          {tasks.map((task, i) => (
            <li key={`${task}${i}`}>
              <p>{task}</p>
            </li>
          ))}
        </ul>
        <a href="/" className="underline">View more</a>
      </div>
    </li>
  )
};


export default Card