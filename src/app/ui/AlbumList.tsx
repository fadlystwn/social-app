"use client"
import { useState, useEffect } from 'react'
import { fetchData } from '@/utils/fetchData';
import Link from 'next/link';

type Album = {
  id: string;
  title: string;
}

const AlbumList = ({ params }: { params: string }) => {

  const albumUrl = `https://jsonplaceholder.typicode.com/users/${params}/albums`;
  const [albums, setAlbums] = useState<Album[]>([]);

  const fetchAlbums = async () => {
    try {
      const data = await fetchData(albumUrl)
      setAlbums(data);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchAlbums();
  }, [])

  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Map through albumImages array and render each image */}
      {albums.map((item) => (
        <Link key={item.id} href={`/albums/${item.id}`}>
          <div className="bg-white shadow-md rounded-lg overflow-hidden h-64">
          </div>
          <p className=''>{item.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default AlbumList