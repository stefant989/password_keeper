export type ProfileCardProps = {
	firstName: string,
	lastName: string,
	email: string,
	count: number
}

export type BasePassword = {
	id: number,
	url: string,
	email: string,
	username: string,
	password: string,
	createdAt: Date,
	updatedAt: Date
}

export type PasswordTableProps<T extends BasePassword> = {
	passwords: T[]
}

export type PasswordFormProps = {
	url: string,
	email: string,
	username: string,
	password: string,
}