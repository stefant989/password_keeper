import PasswordForm from '@/components/Forms/PasswordForm'
import React from 'react'
import { addPassword } from '../_actions/_password'

const AddPasswordPage = () => {
	return (
		<PasswordForm
			actionProp={addPassword}
		/>
	)
}

export default AddPasswordPage