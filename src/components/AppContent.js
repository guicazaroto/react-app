import '../App.css'
import Search from './Search'
import UserInfo from './UserInfo'
import Actions from './Actions'
import InfoCard from './InfoCard'

function AppContent() {
  return (
    <div className="App">
      <Search />
      <UserInfo />
      <Actions />
      <InfoCard
        className="user__relations"
        cardTitle="Repositórios"
        cardItems={[{name: 'java', link: '#'}]}
      />
      <InfoCard
        className="user__relations"
        cardTitle="Favoritos"
        cardItems={[{name: 'java', link: '#'}]}
      />
    </div>
  )
}

export default AppContent