import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './AppBar.styled';
import { useAuth } from 'components/hooks/userAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};