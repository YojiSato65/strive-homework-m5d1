import { useState } from 'react'
import { Form, Button, Container, Row, ListGroup } from 'react-bootstrap'
import SingleJob from './SingleJob'

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
        `https://strive-jobs-api.herokuapp.com/jobs?search=${searchQuery}&limit=20`,
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
            <SingleJob job={job} />
          ))}
        </ListGroup>
      </Row>
    </Container>
  )
}

export default Home
