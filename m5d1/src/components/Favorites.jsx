const Favorites = ({ list }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {list.map((company) => (
        <li>{company.company_name}</li>
      ))}
    </ul>
    // <div>ha</div>
  )
}

export default Favorites
