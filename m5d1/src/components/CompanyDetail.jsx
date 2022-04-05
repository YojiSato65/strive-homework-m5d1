import { useState, useEffect } from 'react'
import { Container, Row, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import SingleJob from './SingleJob'

const CompanyDetail = () => {
  const { companyName } = useParams()
  console.log(companyName)

  const [companyOffers, setCompanyOffers] = useState([])

  useEffect(() => {
    fetchCompany()
  }, [])

  const fetchCompany = async () => {
    try {
      const response = await fetch(
        'https://strive-jobs-api.herokuapp.com/jobs?' + companyName,
      )
      if (response.ok) {
        const { data } = await response.json()
        setCompanyOffers(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className="mt-5">
      <div>
        <Row className="justify-content-center">
          <ListGroup>
            {companyOffers.map((job) => (
              <SingleJob job={job} key={job._id} />
            ))}
          </ListGroup>
        </Row>
      </div>
    </Container>
  )
}

export default CompanyDetail
