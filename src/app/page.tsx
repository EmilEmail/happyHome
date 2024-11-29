import MainMenu from './components/menu/MainMenu';
import Dashboard from '@/pages/Dashboard';

export default function Home() {
  return (
    <div>
      <main>
        <MainMenu />
        <Dashboard />
      </main>
    </div>
  );
}
