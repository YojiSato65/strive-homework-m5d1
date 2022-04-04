import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import {
  Navbar,
  Form,
  Button,
  Container,
  Row,
  ListGroup,
} from 'react-bootstrap'

const Home = () => {
  const [jobList, setJobList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const updateSearchQuery = (e) => {
    e.preventDefault()
    fetchJobs()
  }

  const fetchJobs = async () => {
    console.log(searchQuery)
    try {
      const response = await fetch(
        'https://strive-jobs-api.herokuapp.com/jobs?search=' + searchQuery,
      )
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setJobList(data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Job search engine</Navbar.Brand>
      </Navbar>
      <br />
      <Container>
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
            {jobList
              .map((job) => (
                <ListGroup.Item key={job._id}>
                  <h4>{job.title}</h4>
                  <a href="/">{job.company_name}</a>
                  <p className="mb-0">{job.candidate_required_location}</p>
                </ListGroup.Item>
              ))
              .slice(0, 20)}
          </ListGroup>
        </Row>
      </Container>
    </>
  )
}

export default Home
