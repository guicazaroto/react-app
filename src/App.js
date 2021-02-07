import './App.css'

function App() {
  return (
    <div className="App">
      <div className="avatar">
        <img
          className="avatar__img"
          src="https://avatars.githubusercontent.com/u/9921030?v=4"
          alt="avatar"
        />
        <div className="avatar__info">
          <h2 className="avatar__name">
            <a href="https://api.github.com/users/guicazaroto">Guilherme Cazaroto</a>
          </h2>
          <ul className="avatar__relations">
            <li><strong>followers:</strong> 100</li>
            <li><strong>following:</strong> 3</li>
          </ul>
        </div>
      </div>

      <div className="actions">
        <button className="actions__button">Ver repositórios</button>
        <button className="actions__button">Ver favoritos</button>
      </div>

      <div className="repositories">
        <h3>Repositórios</h3>
      </div>

      <div className="starred">
        <h3>Favoritos</h3>
      </div>
    </div>
  );
}

export default App;
