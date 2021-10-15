import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import styled from 'styled-components';
import { login, logout, useUser } from '../lib/auth';
export default function Header() {
  const user = useUser();
  const handleLogin = (): void => {
    login().catch((error) => console.error(error));
  };
  const handleLogout = (): void => {
    logout().catch((error) => console.error(error));
  };
  return (
    <HeaderStyle>
      <h1>LOGO</h1>
      <div>
        {user !== null ? (
          <div className='authButton'>
            <AiOutlineLogout onClick={handleLogout} size={30} />
            <p>ログアウト</p>
          </div>
        ) : (
          <div className='authButton'>
            <AiOutlineLogin onClick={handleLogin} size={30} />
            <p>ログイン</p>
          </div>
        )}
      </div>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
  align-items: center;
  .authButton {
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    p {
      font-size: 0.8rem;
    }
  }
`;
