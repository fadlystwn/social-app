"use client"
import { useState, useEffect, Suspense } from 'react'
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
    <>
      <h1 className="text-2xl font-bold mb-4">List of Albums</h1>
      <div className="grid grid-cols-4 gap-4">
        <Suspense fallback="Loading..">
          {albums.map((item) => (
            <Link key={item.id} href={`/albums/${item.id}`}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden h-64">
              </div>
              <p className=''>{item.title}</p>
            </Link>
          ))}
        </Suspense>
      </div>
    </>
  );
}

export default AlbumList