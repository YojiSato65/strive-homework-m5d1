import { useEffect } from 'react'
import { useState } from 'react'
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

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const response = await fetch('https://strive-jobs-api.herokuapp.com/jobs')
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setJobList(data)
      }
    } catch (error) {}
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Job search engine</Navbar.Brand>
      </Navbar>
      <br />
      <Container>
        <Row className="justify-content-center">
          <Form className="d-flex">
            <Form.Group className="mb-0 mr-2">
              <Form.Control type="text" placeholder="type job/area here" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Row>
        <br />
        <Row>
          <ListGroup>
            {jobList
              .map((job) => (
                <ListGroup.Item>
                  {job.title}・{job.company_name}
                </ListGroup.Item>
              ))
              .slice(0, 9)}
          </ListGroup>
        </Row>
      </Container>
    </>
  )
}

export default Home
