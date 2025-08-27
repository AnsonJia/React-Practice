import React, { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showUsers, setShowUsers] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    
    <button onClick={() => setShowUsers(true)}>Click for data</button>

      {showUsers && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              name: {user.name} <br/>email: {user.email}
            </li>
          ))}
        </ul>
         )}
    </>
  );
};

export default UserList;