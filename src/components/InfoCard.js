import PropTypes from 'prop-types'

function InfoCard ({className, cardTitle, cardItems}) {
  return(
    <div>
      <h3>{cardTitle}</h3>
      <ul className={className}>
        {cardItems.map((item, index) => {
          return(
            <li key={index}>
              <a href={item.link}>{item.name}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

InfoCard.defaultProps = {
  className: ''
}

InfoCard.propTypes = {
  className: PropTypes.string,
  cardTitle: PropTypes.string.isRequired,
  cardItems: PropTypes.array.isRequired
}

export default InfoCard