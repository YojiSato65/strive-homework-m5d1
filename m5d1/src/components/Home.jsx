import { useState } from 'react'
import { Form, Button, Container, Row, ListGroup } from 'react-bootstrap'
import SingleJob from './SingleJob'
import { connect } from 'react-redux'
import { getJobsAction } from '../redux/actions'

const mapStateToProps = (state) => ({
  jobList: state.job.offers,
})

const mapDispatchToProps = (dispatch) => ({
  searchJobs: (searchQuery) => {
    dispatch(getJobsAction(searchQuery))
  },
  // if you want to dispatch inside fetchJobs(fetch) in Home.jsx..
  // getJobs: (data) => { dispatch({ type: GET_JOBS, payload: data })}
})

const Home = ({ searchJobs, getJobs, jobList }) => {
  // const [jobList, setJobList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const updateSearchQuery = (e) => {
    e.preventDefault()
    searchJobs(searchQuery)
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
        <ListGroup>
          {jobList.map((job) => (
            <SingleJob job={job} key={job._id} />
          ))}
        </ListGroup>
      </Row>
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
