
import DashNav from '@/app/ui/dashboard/dashnav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div >
      <div >
        <DashNav />
      </div>
      <div >{children}</div>
    </div>
  );
}