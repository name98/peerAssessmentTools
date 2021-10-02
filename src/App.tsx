import { Box } from '@mui/material';
import { BrowserRouter, Route, RouteProps, Routes } from 'react-router-dom';
import { paths } from './app/constants/paths';
import { useAuth } from './app/hooks/useAuth';
import { Wrapper } from './components/wrapper';
import { Login } from './pages/login';
import { Private } from './pages/private/Private';
import { Role } from './pages/role';
import { TestPage } from './pages/test';



function App() {
  return (
    <BrowserRouter>
      <Box>
        <Wrapper >
          <Routes>
            <Route path={paths.login} element={<Login />} />
            <Route path={'/test'} element={<TestPage />} />     
            <PrivateRoute path={'*'} element={<Private />} />
          </Routes>
        </Wrapper>
      </Box>
    </BrowserRouter>

  );
}

function PrivateRoute(props: RouteProps): React.ReactElement | null {
  const {isAuthorized, isRegistration} = useAuth()
  console.log(isAuthorized, isRegistration)

  return (
    <Route {...props} />
  )
}

export default App;
