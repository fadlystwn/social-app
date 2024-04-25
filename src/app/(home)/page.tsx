import Link from 'next/link';
import CardList from '@/components/CardList';
import { fetchData } from '@/utils/fetchData';

export default async function User() {
  const data = await fetchData('https://jsonplaceholder.typicode.com/users')

  return (
    <div>
      <h1 className="text-2xl">Home</h1>
      <CardList items={data} />
    </div>
  )
}