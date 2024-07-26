import { MoreVertical } from "lucide-react"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BasePassword, PasswordTableProps } from "@/lib/types"



const PasswordTable = <T extends BasePassword>({ passwords }: PasswordTableProps<T>) => {
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
							<DropdownMenu>
								<DropdownMenuTrigger><MoreVertical /></DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem>Edit</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem>Delete</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

export default PasswordTable