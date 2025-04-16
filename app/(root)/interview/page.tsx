// import agent from '@/components/agent'

import Agent from '@/components/agent'
import { getCurrentUser } from '@/lib/actions/auth.action'
import React from 'react'

const page = async () => {
  const user = await getCurrentUser();
  return (
    <div>
        <h3> Interview Generation</h3>

        <Agent userName={user?.name} userId={user?.id} type="generate" />
    </div>
  )
}

export default page