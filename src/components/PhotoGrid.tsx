import { FC } from 'react';
import { Photo } from '@/types/Photos';

type PhotoGridProps = {
  photos: Photo[];
};
const PhotoGrid: FC<PhotoGridProps> = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos && photos.map((photo) => (
        <div key={photo.id} className="relative group">
          <img src={photo.thumbnailUrl} alt={`Photo ${photo.id}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
