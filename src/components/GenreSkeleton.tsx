import {  SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'

export default function GenreSkeleton() {
  return (
    <Stack dir='row'> 
        <SkeletonCircle height='32px'/>
        <SkeletonText/>
    </Stack>
  )
}
