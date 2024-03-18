import { User2 } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Sheet from './Sheet'
import Search from './Search'
import routes from '../routes'

export default function Navbar() {
  const { pathname } = useLocation()
  return (
    <div className='flex items-center justify-between h-20'>
      <div className='flex items-center gap-8'>
        <Link
          to='/'
          className='text-primary font-bold text-3xl'
        >
          Musify
        </Link>
        <div className='hidden lg:flex gap-4'>
          {routes.map((item, idx) => (
            <Link
              key={idx}
              title={item.title}
              className={`hover:text-primary ${
                pathname === item.href && 'text-primary'
              }`}
              to={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <Search />
        <div className='hidden lg:block'>
          <User2 />
        </div>
        <Sheet />
      </div>
    </div>
  )
}
