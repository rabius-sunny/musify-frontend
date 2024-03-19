const endpoint =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api'
    : 'http://localhost:3000/api'
export default endpoint
