"use client"
import React, { useEffect, useState } from 'react'
import { fetchData } from '@/utils/fetchData';
import Profile from '@/components/Profile';

const UserProfile = ({ params }: { params: string }) => {

  const profileUrl = `https://jsonplaceholder.typicode.com/users/${params}`;
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {

    const fetchProfile = async () => {
      try {
        const data = await fetchData(profileUrl)
        setProfile(data);
      } catch (err) {
        console.log(err)
      }
    }
    fetchProfile();
  }, [setProfile, profileUrl, params])
  return (
    <Profile name={profile?.name || ''} username={profile?.username || ''} />

  )
}

export default UserProfile