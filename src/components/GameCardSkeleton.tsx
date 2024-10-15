import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameCardSkeleton() {
  return (
    <div>
        <Card width='300px' borderRadius='10'>
            <Skeleton height='200px'/>
            <CardBody>
                <SkeletonText/>
            </CardBody>
        </Card>
    </div>
  )
}
