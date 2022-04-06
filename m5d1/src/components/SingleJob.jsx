import { Button, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToFavsAction } from '../redux/actions'
import { useState } from 'react'
import { useEffect } from 'react'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  addToFav: (company) => {
    dispatch(addToFavsAction(company))
  },
})

const SingleJob = ({ job, addToFav }) => {
  const [company, setCompany] = useState(null)
  const [companySelected, setCompanySelected] = useState(null)

  useEffect(() => {
    setCompany(companySelected)
  }, [companySelected])

  return (
    <ListGroup.Item key={job._id}>
      <h4>{job.title}</h4>
      <div className="d-flex justify-content-between">
        <Link to={'/company=' + job.company_name}>{job.company_name}</Link>
        <Button variant="success" onClick={addToFav(company)}>
          Add to favorite
        </Button>
      </div>
      <p className="mb-0">Area - {job.candidate_required_location}</p>
    </ListGroup.Item>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleJob)
