import logo from "./logo.svg";
import "./App.css";

function Card() {
  return (
    <div className="cards">
      <div className="card">
        <img src="" alt="myPic" className="card_img" />
        <div className="card_info">
          <span className="card_category"></span>
          <h3 className="card_title"></h3>
          <a href="" target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return Card;
}

export default App;
