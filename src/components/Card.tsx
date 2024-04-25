import { FC } from 'react';

interface CardProps {
  name: string;
  company: string;
  username: string;
}

const Card: FC<CardProps> = ({ name, company, username }) => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p>{company}</p>
      <p className="text-sm text-gray-500">@{username}</p>
    </div>
  );
};

export default Card;
