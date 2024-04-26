import Image from "next/image";
import { FC } from "react";
type Profile = {
  name: string;
  username: string;
  imageUrl?: string;
};

const Profile: FC<Profile> = ({ name, username, imageUrl }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <Image
          className="h-12 w-12 rounded-full object-cover"
          src={imageUrl || "https://via.placeholder.com/150"}
          alt={`${name}'s profile`}
          width={150}
          height={150}
        />
      </div>
      <div>
        <p className="text-lg font-semibold">{name || ""}</p>
        <p className="text-gray-600">@{username || ""}</p>
      </div>
    </div>
  );
};

export default Profile;
