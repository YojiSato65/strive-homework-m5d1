import { Button, Container, ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromFavsAction } from '../redux/actions'

const mapStateToProps = (state) => ({
  companies: state.list.favorites,
})

const mapDispatchToProps = (dispatch) => ({
  removeFromFavs: (company) => {
    dispatch(removeFromFavsAction(company))
  },
})

const Favorites = ({ companies, removeFromFavs }) => {
  return (
    <>
      <h4 className="mt-5 text-center">Your favorite companies</h4>
      <Container className="mt-2">
        {companies.map((company) => (
          <ListGroup.Item className="d-flex justify-content-between">
            <Link to={'/company=' + company}>
              <h4>{company}</h4>
            </Link>
            <Button
              variant="danger"
              onClick={() => {
                removeFromFavs(company)
              }}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </Container>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
