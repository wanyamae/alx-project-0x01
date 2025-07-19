import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import PostCard from '@/components/common/PostCard';
import { UserProps } from '@/interfaces';
import { PostProps } from '@/interfaces';

const Users: React.FC<{ users: UserProps[] }> = ({ users, posts }) => {
  console.log(users)
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">User Content</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {
            users?.map((user: UserProps, key: number) => (
              <UserCard {...user} key={key} />
            ))
          }
          {
            posts.map(({ title, body, userId, id }: PostProps, key: number) => (
              <PostCard title={title} body={body} userId={userId} id={id} key={key} />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

export default Users;