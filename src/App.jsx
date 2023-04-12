import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [userData, setUserdata] = useState([]);

  const handleClick = () => {
    setSearch(input);
  };

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://api.github.com/users/${search}`)
        .then((data) => {
          setUserdata(data.data);
          console.log(data.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchData();
  }, [search]);

  return (
    <div className="App">
      <div className="search-head-cont">
        <h1 className="app-header">GitHub Public Information</h1>
        <div>
          <input
            className="search-inp"
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="search-btn" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>

      <div className="user-card">
        
        <div className="img-cont">
        <div></div>
          <img className="user-img" src={userData.avatar_url} alt="" />
        </div>
        <div className="user-details">
        <div>
          <h2>{userData.name ? userData.name : userData.login}</h2>
        </div>
        <div>
          <p>@{userData.login}</p>
        </div>
        <div className="designation">
          <p>{userData.bio ? userData.bio : "FullStack Developer"}</p>
        </div>
        </div>
        <div className="details">
          <div>
            <h2>
              {userData.public_repos
                ? userData.public_repos
                : Math.floor(Math.random() * 20)}
            </h2>
            <p>Public_Repos</p>
          </div>
          <div>
            <h2>
              {userData.public_gists
                ? userData.public_gists
                : Math.floor(Math.random() * 20)}
            </h2>
            <p>Public_Gists</p>
          </div>
          <div>
            <h2>{userData.created_at.split("T")[0]}</h2>
            <p>Created At</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
