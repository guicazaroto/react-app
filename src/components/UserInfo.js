function UserInfo () {
  return(
    <div className="user">
      <img
        className="user__img"
        src="https://users.githubusercontent.com/u/9921030?v=4"
        alt="user"
      />
      <div className="user__info">
        <h2 className="user__name">
          <a href="https://api.github.com/users/guicazaroto">Guilherme Cazaroto</a>
        </h2>
        <ul className="user__relations">
          <li><strong>followers:</strong> 100</li>
          <li><strong>following:</strong> 3</li>
        </ul>
      </div>
    </div>
  )
}

export default UserInfo