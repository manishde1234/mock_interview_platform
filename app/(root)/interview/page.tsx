import Agent from '@/components/agent'
import React from 'react'

const page = () => {
  return (
    <div>
        <h3> Interview Generation</h3>

        <Agent userName ="you" userId ="user1" type ="generate"></Agent>
    </div>
  )
}

export default page