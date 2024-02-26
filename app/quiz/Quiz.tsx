'use client'

import React from 'react'
import { useRouter } from 'next/navigation';

//Components
import Button from '@/components/Button/Button';

//Types
import { QuestionsState } from '@/types/quiz';

type Props = {
    questions: QuestionsState;
    totalQuestions: number;
}

const Quiz = ({ questions, totalQuestions }: Props) => {
    console.log(questions)

    return (
      <div className='text-white text-center'>
        Quiz Component
      </div>
    )
}

export default Quiz