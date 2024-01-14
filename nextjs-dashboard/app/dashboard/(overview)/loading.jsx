import React from 'react'
import DashboardSkeleton from '@/app/ui/skeletons';

const loading = () => {
  return (
    <div>
      Loading..
      <DashboardSkeleton />
    </div>
  )
}

export default loading
