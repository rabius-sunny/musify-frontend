import { useState } from 'react'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/clerk-react'
import { motion } from 'framer-motion'
import { AlignRight, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import routes from '../routes'

export default function Sheet() {
  const { pathname } = useLocation()
  const [isVisible, setIsVisible] = useState(false)

  const handleToggle = () => setIsVisible(!isVisible)

  const backdropVariants = {
    open: { opacity: 1, zIndex: 999 },
    close: { opacity: 0, zIndex: -999 }
  }

  const sheetVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    },
    close: {
      x: '100vw',
      opacity: 0,
      transition: { duration: 0.3 }
    }
  }

  return (
    <div className='lg:hidden'>
      <button
        className='text-white'
        onClick={handleToggle}
      >
        <AlignRight />
      </button>
      <motion.div
        variants={backdropVariants}
        initial='close'
        animate={isVisible ? 'open' : 'close'}
        className='fixed inset-0 bg-gray-900/75 backdrop-blur-sm'
        onClick={handleToggle}
      >
        <motion.div
          variants={sheetVariants}
          initial='close'
          animate={isVisible ? 'open' : 'close'}
          className='fixed right-0 z-50 h-full w-2/3 bg-white shadow-lg overflow-auto p-4'
        >
          <div className='grid gap-6 text-dark font-bold text-2xl'>
            <div className='flex items-center justify-between'>
              <h1 className='text-primary'>Musify</h1>
              <X
                className='size-6 text-primary font-bold'
                onClick={handleToggle}
              />
            </div>
            {routes.map((item, idx) => (
              <Link
                key={idx}
                title={item.title}
                className={`hover:text-dark/60 py-2 rounded px-4 ${
                  pathname === item.href &&
                  'bg-primary text-white hover:text-white'
                }`}
                to={item.href}
              >
                {item.title}
              </Link>
            ))}
            <div className='px-4 w-full'>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl='/' />
              </SignedIn>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
