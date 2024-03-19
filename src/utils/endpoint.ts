const endpoint =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api'
    : 'https://www.darulislam.net/api'
export default endpoint
