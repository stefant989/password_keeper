import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { BasePassword, PasswordTableProps } from "@/lib/types"
import DropdownList from "../DropdownList/DropdownList"

const PasswordTable = <T extends BasePassword>({ passwords }: PasswordTableProps<T>) => {
	if (!passwords.length) return <div className="text-slate-400 size-8 w-full flex justify-center">There are no passwords in the database</div>
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Url</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Username</TableHead>
					<TableHead>Password</TableHead>
					<TableHead></TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{passwords?.map((password: T) => (
					<TableRow key={password.id}>
						<TableCell className="font-medium">{password.url}</TableCell>
						<TableCell>{password.email}</TableCell>
						<TableCell>{password.username}</TableCell>
						<TableCell>**********</TableCell>
						<TableCell>
							<DropdownList id={password.id} />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

export default PasswordTable