import "./App.css";
import Netflix from "./Components/Netflix";
import Amazon from "./Components/Amazon";

const favSeries = "netflix";

// const FavSeries = () => {
//   if (favSeries === "netflix") {
//     return <Netflix />;
//   } else {
//     return <Amazon />;
//   }
// };

function App() {
  return (
    <>
      <h1 className="heading_style"> List of top Netflix series</h1>
      {favSeries === "netflix" ? <Netflix /> : <Amazon />}
    </>
  );
}

export default App;
