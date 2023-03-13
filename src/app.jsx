import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import {
  WelcomeScreen,
  DashboardScreen,
  CounterScreen,
  UsersScreen,
  NotFoundScreen,
} from '@/screens'

function App() {
  return (
    <div>
      <AppRoutes />
    </div>
  )
}

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route index element={<WelcomeScreen />} />
        <Route path="dashboard" element={<DashboardScreen />}>
          <Route index element={<Navigate to="counter" />} />
          <Route path="counter" element={<CounterScreen />} />
          <Route path="users" element={<UsersScreen />} />
        </Route>
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Router>
  )
}

export default App
