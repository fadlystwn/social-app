import { FC } from 'react';
import Image from 'next/image';
import { Photo } from '@/types/Photos';

type PhotoGridProps = {
  photos: Photo[];
};
const PhotoGrid: FC<PhotoGridProps> = ({ photos }) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">List of Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos && photos.map((photo) => (
          <div key={photo.id} className="relative group">
            <Image src={photo.thumbnailUrl} alt={`Photo ${photo.id}`} width={150} height={150} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotoGrid;
