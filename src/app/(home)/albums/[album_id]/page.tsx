"use client"
import { useState, useEffect } from 'react';
import PhotoGrid from '@/components/PhotoGrid';
import { fetchData } from '@/utils/fetchData';
import { Photo } from '@/types/Photos';

export default function Album({ params }: { params: { album_id: string } }) {

  const PhotosUrl = `https://jsonplaceholder.typicode.com/albums/${params.album_id}/photos`;
  const [photos, setPhotos] = useState<Photo[] | null>(null);


  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const data = await fetchData(PhotosUrl)
        setPhotos(data);
      } catch (err) {
        console.log(err)
      }
    }
    fetchPhotos();
  }, [setPhotos, PhotosUrl, params])
  return (
    <PhotoGrid photos={photos || []} />

  )
};