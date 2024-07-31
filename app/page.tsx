import ProfileCard from "@/components/Cards/ProfileCard";
import PasswordTable from "@/components/Tables/PasswordTable";
import { Button } from "@/components/ui/button";
import { db } from "@/db/db";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";

const getPasswordData = async () => await db.password.findMany()
const getPasswordCount = async () => await db.password.count()

const Home = async () => {
	const [passwords, passwordCount] = await Promise.all([
		getPasswordData(),
		getPasswordCount()
	])

	return (
		<div className="flex gap-10 max-lg:block">
			<div>
				<ProfileCard
					firstName="Stefan"
					lastName="Todorovic"
					email="stefan@gmail.com"
					count={passwordCount}
				/>
				<Button variant='outline' className="w-full mb-10">
					<Link href={ROUTES.ADD_PASSWORD}>
						Add Password
					</Link>
				</Button>
			</div>

			<PasswordTable
				passwords={passwords || []}
			/>
		</div>
	);
}

export default Home