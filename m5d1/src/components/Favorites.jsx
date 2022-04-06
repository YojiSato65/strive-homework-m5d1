import { Container, ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => ({
  companies: state.list.favorites,
})

const Favorites = ({ companies }) => {
  return (
    <>
      <h4 className="mt-5 text-center">Your favorite companies</h4>
      <Container className="mt-2">
        <div>
          {companies.map((company) => (
            <ListGroup.Item>
              <Link to={'/company=' + company}>{company}</Link>
            </ListGroup.Item>
          ))}
        </div>
      </Container>
    </>
  )
}

export default connect(mapStateToProps)(Favorites)
