
import PostList from "@/components/PostList";
import { fetchData } from "@/utils/fetchData";

export default async function UserDetails({ params }: { params: { user_id: string } }) {
  const data = await fetchData(`https://jsonplaceholder.typicode.com/users/${params.user_id}/posts`)

  return (
    <div>
      <h1>User Detail hello</h1>
      <PostList posts={data} />
    </div>
  )

}