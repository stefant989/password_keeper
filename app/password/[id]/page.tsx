import PasswordForm from '@/components/Forms/PasswordForm'
import { db } from '@/db/db'
import React from 'react'
import { updatePassword } from '../_actions/_password'

const EditPasswordPage = async ({ params: { id } }: {
	params: { id: string }
}) => {
	const password = await db.password.findUnique({ where: { id: parseInt(id) } })
	return (
		<div>
			<PasswordForm
				password={password}
				actionProp={updatePassword.bind(null, id)}
			/>
		</div>
	)
}

export default EditPasswordPage