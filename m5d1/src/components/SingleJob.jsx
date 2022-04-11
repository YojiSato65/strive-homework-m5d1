import { Button, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToFavsAction } from '../redux/actions'

// const mapStateToProps = (state) => ({
//   companyList: state.list.favorites,
// })

// const mapDispatchToProps = (dispatch) => ({
//   addToFavs: (company) => {
//     dispatch(addToFavsAction(company))
//   },
// })

const SingleJob = ({ job }) => {
  const companyList = useSelector((state) => state.list.favorites)
  const dispatch = useDispatch()

  return (
    <ListGroup.Item key={job._id}>
      <h4>{job.title}</h4>
      <div className="d-flex justify-content-between">
        <Link to={'/company=' + job.company_name}>{job.company_name}</Link>
        {companyList.includes(job.company_name) ? (
          <Button variant="warning">Added</Button>
        ) : (
          <Button
            variant="success"
            onClick={() => {
              // addToFavs(job.company_name)
              dispatch(addToFavsAction(job.company_name))
            }}
          >
            Add to favorite
          </Button>
        )}
      </div>
      <p className="mb-0">Area - {job.candidate_required_location}</p>
    </ListGroup.Item>
  )
}

export default SingleJob
