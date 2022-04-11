import { useState } from 'react'
import {
  Form,
  Button,
  Container,
  Row,
  ListGroup,
  Spinner,
  Alert,
} from 'react-bootstrap'
import SingleJob from './SingleJob'
import { useDispatch, useSelector } from 'react-redux'
import { getJobsAction } from '../redux/actions'

// const mapStateToProps = (state) => ({
//   jobList: state.job.offers,
//   isError: state.job.isError,
//   isLoading: state.job.isLoading,
// })

// const mapDispatchToProps = (dispatch) => ({
//   searchJobs: (searchQuery) => {
//     dispatch(getJobsAction(searchQuery))
//   },
//   // if you want to dispatch inside fetchJobs(fetch) in Home.jsx..
//   // getJobs: (data) => { dispatch({ type: GET_JOBS, payload: data })}
//   toggleSpinner: () => {
//     dispatch(getJobsLoadingAction())
//   },
// })

const Home = () => {
  // const [jobList, setJobList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const jobList = useSelector((state) => state.job.offers)
  const isError = useSelector((state) => state.job.isError)
  const isLoading = useSelector((state) => state.job.isLoading)

  const dispatch = useDispatch()

  const updateSearchQuery = (e) => {
    e.preventDefault()
    // searchJobs(searchQuery)
    // toggleSpinner()
    dispatch(getJobsAction(searchQuery))
    //dispatch(getJobsLoadingAction())
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Form className="d-flex" onSubmit={updateSearchQuery}>
          <Form.Group className="mb-0 mr-2">
            <Form.Control
              type="text"
              placeholder="type job/area here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </Row>
      <br />
      <Row className="justify-content-center">
        {isLoading ? (
          <Spinner variant="primary" animation="border" />
        ) : isError ? (
          <Alert variant={'danger'}>An error occured during fetch</Alert>
        ) : (
          <ListGroup>
            {jobList.map((job) => (
              <SingleJob job={job} key={job._id} />
            ))}
          </ListGroup>
        )}
      </Row>
    </Container>
  )
}

export default Home
