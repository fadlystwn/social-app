import Link from 'next/link';
import Card from '@/components/Card';
import { fetchData } from '@/utils/fetchData';
import { User } from '@/types/User';

export default async function UserPage() {
  const data = await fetchData('https://jsonplaceholder.typicode.com/users')

  return (
    <div data-testid="user">
      <h1 className="text-2xl">Home</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {data && data.map((item: User) => (
          <Link key={item.id} href={`/users/${item.id}`}>
            <Card key={item.id}
              name={item.name}
              company={item.company.name}
              username={item.username}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}