import Link from "next/link"
import { useEffect, useState } from "react"
import Card from "@/components/Card"
import { fetchData } from "@/utils/fetchData"
import { User } from "@/types/User"

export default function UserList() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const [users, setUsers] = useState<User[]>([])


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await fetchData(url)
        setUsers(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchUsers()
  }, [setUsers, url])

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {users && users.map((item: User) => (
        <Link key={item.id} href={`/users/${item.id}`}>
          <Card key={item.id}
            name={item.name}
            company={item.company.name}
            username={item.username}
          />
        </Link>
      ))}
    </div>
  )
}

