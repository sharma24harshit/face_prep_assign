import { Skeleton, Stack } from '@chakra-ui/react'

const Loader = () => {
  return (
    <div className='skeleton' >
    <Stack>
  <Skeleton height='50px' />
  <Skeleton height='50px' />
  <Skeleton height='50px' />
  <Skeleton height='50px' />
  <Skeleton height='50px' />
  <Skeleton height='50px' />
</Stack>
  </div>
  )
}

export default Loader