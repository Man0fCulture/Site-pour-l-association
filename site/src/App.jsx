const title = "Festivités Garennoises Solidaires"
const style = {color: "red", backgroundColor: "black"}
const presentation = [
  "Agenda",
  "Membres",
  "contacter"
]

function App() {

  const handleClick = () => {
    alert("j'ai cliqué sur le titre")
  }

  return <>
      <Titre color = "blue"> Mon composant </Titre>
      <h1 onClick={handleClick} id = "title" className = "title" style = {style}>{title}</h1>
      <input type="text"></input>
      <p>
        Enzo President
      </p>
      <ul>
        {presentation.map(presentation => (<li key={presentation}>{presentation}</li>))}
      </ul>
    </>

    function Titre ({color}) {

      return <h1 style = {{color : color}}>{title}</h1>
    }
}

export default App
