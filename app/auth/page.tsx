import { LoginForm } from "@/components/Forms/LoginForm"
import { RegisterForm } from "@/components/Forms/RegisterForm"
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs"

const AuthPage = () => {
	return (
		<Tabs defaultValue="login" className="w-[400px]">
			<TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="login">Login</TabsTrigger>
				<TabsTrigger value="register">Register</TabsTrigger>
			</TabsList>
			<TabsContent value="login">
				<LoginForm />
			</TabsContent>
			<TabsContent value="register">
				<RegisterForm />
			</TabsContent>
		</Tabs>
	)
}

export default AuthPage