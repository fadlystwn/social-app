import PostList from "@/app/ui/PostList";
import Tab from "@/components/Tab";
import AlbumList from "@/app/ui/AlbumList";
import UserProfile from "@/app/ui/UserProfile";

export default function UserDetails({ params }: { params: { user_id: string } }) {

  const tabData = [
    {
      id: 1,
      label: "Feeds",
      content: <PostList />,
    },
    {
      id: 2,
      label: "Your Posts",
      content: <PostList params={params.user_id} />,
    },
    {
      id: 3,
      label: "Albums",
      content: <AlbumList params={params.user_id} />,
    },

  ];

  return (
    <div>
      <UserProfile params={params.user_id} />
      <Tab tabs={tabData} />
    </div >
  );
}