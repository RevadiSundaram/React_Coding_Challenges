import "./styles.css";
{
  /* Challenge 1
      Display array of users to browser */
}
export default function App1() {
  const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
  ];
  const userList = users.map((user) => <li key={user.id}>{user.name}</li>);
  return (
    <>
      <h3>User names</h3>
      <ul>{userList}</ul>
    </>
  );
}
