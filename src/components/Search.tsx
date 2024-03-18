import { ArrowRight, SearchIcon } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Search() {
  const [searchKey, setSearchKey] = useState('')
  const navigate = useNavigate()
  return (
    <div className='flex items-center gap-2 border border-white/40 rounded-full pl-2'>
      <SearchIcon className='size-4' />
      <input
        onChange={({ target: { value } }) => setSearchKey(value)}
        className='px-1 py-1 text-sm focus:outline-none text-white/70 bg-transparent md:w-80'
        placeholder='search music here...'
      />
      <ArrowRight
        onClick={() => navigate(`/search/q/${searchKey.split(' ').join('-')}`)}
        className={`size-5 mr-2 cursor-pointer ${
          searchKey ? 'block' : 'hidden'
        }`}
      />
    </div>
  )
}
