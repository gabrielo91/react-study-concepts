import { Login } from './views/login';
import { AuthProvider } from './context';

function App() {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}

export default App;
