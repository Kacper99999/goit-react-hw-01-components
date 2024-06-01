import Profile from "./Profile.jsx";
import user from "./user.json";
function App() {
  return (
    <>
      <h1>React Homework Template (Vite)</h1>
      <Profile
    username = {user.username}
    tag = {user.tag}
    location = {user.location}
    avatar = {user.avatar}
    stats = {user.stats}
    />
    </>
  );
}

export default App;
