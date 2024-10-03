import { InfoPage } from '@/components/home/InfoPage';
import { Navbar } from '@/components/navbar/Navbar';
export default function Home() {
  return (
    <div className='w-4/5 mx-auto mt-5 text-foreground'>
      <Navbar />
      <InfoPage />
    </div>
  );
}
