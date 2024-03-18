const endpoint =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/api'
    : 'http://localhost:3001/api'
export default endpoint
