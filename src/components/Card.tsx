import { FC } from 'react';

interface CardProps {
  name: string;
  company: string;
}

const Card: FC<CardProps> = ({ name, company }) => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p>{company}</p>
    </div>
  );
};

export default Card;
