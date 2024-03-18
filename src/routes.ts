type TRoute = {
  title: string
  href: string
}
const routes: TRoute[] = [
  { title: 'Home', href: '/' },
  { title: 'Recommended', href: '/recommended' },
  { title: 'Trending', href: '/trending' }
]
export default routes
