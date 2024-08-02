'use client'
import { LoginForm } from "@/components/Forms/LoginForm"
import { RegisterForm } from "@/components/Forms/RegisterForm"
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs"
import { login, register } from "./_actions/_auth"

const AuthPage = () => {
	return (
		<Tabs defaultValue="login" className="w-[400px]">
			<TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="login">Login</TabsTrigger>
				<TabsTrigger value="register">Register</TabsTrigger>
			</TabsList>
			<TabsContent value="login">
				<LoginForm actionProp={login} />
			</TabsContent>
			<TabsContent value="register">
				<RegisterForm actionProp={register} />
			</TabsContent>
		</Tabs>
	)
}

export default AuthPage