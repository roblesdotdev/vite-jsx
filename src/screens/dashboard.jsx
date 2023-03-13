import { Outlet, NavLink } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div style={{ padding: '64px 0' }}>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
        }}
      >
        <AppNavLink to="counter">Counter</AppNavLink>
        <AppNavLink to="users">Users</AppNavLink>
      </nav>
      <main style={{ textAlign: 'center' }}>
        <Outlet />
      </main>
    </div>
  )
}

function AppNavLink({ to, children }) {
  return (
    <NavLink
      style={({ isActive }) => ({
        textDecoration: isActive ? 'underline' : 'none',
        color: 'white',
      })}
      to={to}
      end
    >
      {children}
    </NavLink>
  )
}
