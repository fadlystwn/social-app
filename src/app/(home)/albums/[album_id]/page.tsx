"use client"
import { useState, useEffect } from 'react';
import PhotoGrid from '@/components/PhotoGrid';
import { fetchData } from '@/utils/fetchData';
import { Photo } from '@/types/Photos';

export default function Album({ params }: { params: { user_id: string } }) {

  const PhotosUrl = `https://jsonplaceholder.typicode.com/albums/${params.album_id}/photos`;
  const [photos, setPhotos] = useState<Photo[] | null>(null);

  const fetchPhotos = async () => {
    try {
      const data = await fetchData(PhotosUrl)
      setPhotos(data);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchPhotos();
  }, [])
  return (
    <PhotoGrid photos={photos || []} />

  )
};