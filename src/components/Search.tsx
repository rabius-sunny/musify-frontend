import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TSearchSchema, searchSchema } from 'constants/schema'
import { ArrowRight, SearchIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Search() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty }
  } = useForm<TSearchSchema>({
    resolver: zodResolver(searchSchema)
  })

  const onSubmit = (value: TSearchSchema) => {
    if (value.searchKey.length < 2) return
    navigate(`/search/q/${value.searchKey.split(' ').join('-')}`)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex items-center gap-2 border border-white/40 rounded-full pl-2'
    >
      <SearchIcon className='size-4' />
      <input
        className={`px-1 py-1 text-sm placeholder:text-[0.6rem] sm:placeholder:text-xs focus:outline-none text-white/70 bg-transparent md:w-80 ${
          errors.searchKey?.message && 'placeholder:text-red-500'
        }`}
        placeholder={errors.searchKey?.message ?? 'search music here...'}
        {...register('searchKey')}
      />
      <ArrowRight
        onClick={() => onSubmit(getValues())}
        className={`size-5 mr-2 cursor-pointer ${isDirty ? 'block' : 'hidden'}`}
      />
    </form>
  )
}
