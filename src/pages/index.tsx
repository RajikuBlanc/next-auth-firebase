import { useUser, login, logout } from '../lib/auth';

export default function Home() {
  // const user = useUser();
  // const handleLogin = (): void => {
  //   login().catch((error) => console.error(error));
  // };

  // const handleLogout = (): void => {
  //   logout().catch((error) => console.error(error));
  // };
  return (
    <div>
      <h1>Hello World!</h1>

      {/* <div>
        <h1>Auth Example</h1>
        {user !== null ? <h2>ログインしている</h2> : <h2>ログインしていない</h2>}
        <button onClick={handleLogin}>ログイン</button>
        <button onClick={handleLogout}>ログアウト</button>
      </div> */}
    </div>
  );
}
