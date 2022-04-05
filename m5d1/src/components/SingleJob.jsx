import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SingleJob = ({ job }) => {
  return (
    <ListGroup.Item key={job._id}>
      <h4>{job.title}</h4>
      <Link to={'/company=' + job.company_name}>{job.company_name}</Link>
      <p className="mb-0">Area - {job.candidate_required_location}</p>
    </ListGroup.Item>
  )
}

export default SingleJob
