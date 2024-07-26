import ProfileCard from "@/components/Cards/ProfileCard";
import PasswordTable from "@/components/Tables/PasswordTable";



export default function Home() {
	return (
		<div className="flex gap-10 max-lg:block">
			<ProfileCard
				firstName="Stefan"
				lastName="Todorovic"
				email="stefan@gmail.com"
				count={12}
			/>
			<PasswordTable
				passwords={[
					{
						id: 1,
						url: 'gmail.com',
						email: 'test@gmail.com',
						username: '/',
						password: '123123123'
					},
					{
						id: 2,
						url: 'instagram.com',
						email: 'test@gmail.com',
						username: 'test28',
						password: '123123123'
					}
				]}
			/>
		</div>
	);
}
