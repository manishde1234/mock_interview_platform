import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import { getCurrentUser } from '@/lib/actions/auth.action'
import {  getInterviewByUserId, getLatestInterviews } from '@/lib/actions/general.action'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async () => {

  const user = await getCurrentUser();
  //parallel calling so we are doubling the speed of data fetching

  const [userInterviews,latestInterviews] = await Promise.all([
    await getInterviewByUserId(user?.id!),

    getLatestInterviews({
      userId: user?.id!,
    })

  ]);
  // const userInterviews = await getInterviewByUserId(user?.id!);

  // const latestInterviews = await getLatestInterviews({
  //   userId: user?.id!,
  // });

  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length > 0;

  return (
    <div>

      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2> Get Interview-Ready with AI-Powered Practice</h2>
          <p className='text-lg'>
            Practice on real interview questions and get instant feedback on your answers.
          </p>

          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href="/interview"> Start an Interview</Link>
          </Button>
        </div>

        <Image src="/robot.png" alt="robo-dude" width={400} height={400} className ="max-sm:hidden" />
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>

        <div className='interviews-section'>
          {
            hasPastInterviews ?(
              userInterviews?.map((interview) => (
                <InterviewCard {...interview} key = {interview.id} /> ))) : (
              <p>You haven&apos;t taken any interviews yet</p>
            )

          }
        </div>

      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an interview</h2>

        <div className='interviews-section'>
        {
            hasUpcomingInterviews ?(
              latestInterviews?.map((interview) => (
                <InterviewCard {...interview} key = {interview.id} /> ))) : (
              <p>There are no new interview available</p>
            )

          }
        </div>
      </section>
    </div>
  )
}

export default page