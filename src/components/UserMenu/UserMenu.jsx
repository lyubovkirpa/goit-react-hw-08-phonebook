import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Wrapper, Username } from './UserMenu.styled';

const theme = createTheme({
  palette: {
    secondary: {
      contrastText: '#1976d2',
      main: '#fff',
    },
  },
});

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <AccountBoxIcon />
        <Username>{user.email}</Username>
        <Button
          type="button"
          onClick={handleLogOut}
          variant="outlined"
          color="secondary"
        >
          Logout
        </Button>
      </Wrapper>
    </ThemeProvider>
  );
};
