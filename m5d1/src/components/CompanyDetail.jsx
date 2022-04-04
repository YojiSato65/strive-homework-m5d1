import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CompanyDetail = () => {
  const { companyId } = useParams()

  console.log(companyId)

  useEffect(() => {
    fetchCompany()
  }, [])

  const fetchCompany = async () => {
    try {
      const response = await fetch(
        'https://strive-jobs-api.herokuapp.com/jobs?company=' + companyId,
      )
      if (response.ok) {
        const data = response.json()
        console.log(data)
      }
    } catch (error) {}
  }

  return <div>hi</div>
}

export default CompanyDetail
