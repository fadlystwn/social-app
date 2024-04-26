import { FC } from 'react';
import Link from 'next/link';
import Card from './Card';
import { User } from '@/types/User';

interface CardListProps {
  items: User[]
}

const CardList: FC<CardListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {items.map((item: User) => (
        <Link key={item.id} href={`/users/${item.id}`}>
          <Card
            name={item.name}
            company={item.company.name}
            username={item.username}
          />
        </Link>
      ))}
    </div>
  );
};

export default CardList;
