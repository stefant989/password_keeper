'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'

const SubmitButton = () => {
	const { pending } = useFormStatus()
	return (
		<Button
			variant='outline'
			className='w-full mt-5'
			type='submit'
			disabled={pending}
		>
			{pending ? 'Saving...' : 'Save'}
		</Button>
	)
}

export default SubmitButton