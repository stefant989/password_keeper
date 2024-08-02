import ProfileCard from "@/components/Cards/ProfileCard";
import PasswordTable from "@/components/Tables/PasswordTable";
import { Button } from "@/components/ui/button";
import { getPasswordCount, getPasswordData, getCurrentUser } from "@/db/queries";
import { PROTECTED_ROUTES } from "@/lib/routes";
import Link from "next/link";

const Home = async () => {
	const [passwords, passwordCount, userData] = await Promise.all([
		getPasswordData(),
		getPasswordCount(),
		getCurrentUser()
	])

	return (
		<div className="flex gap-10 max-lg:block">
			<div>
				<ProfileCard
					firstName={userData?.firstName || ''}
					lastName={userData?.lastName || ''}
					email={userData?.email || ''}
					count={passwordCount}
				/>
				<Button variant='outline' className="w-full mb-10">
					<Link href={PROTECTED_ROUTES.ADD_PASSWORD}>
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