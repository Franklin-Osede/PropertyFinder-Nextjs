import Navbar from '@/components/NavBar';
import '@/assets/styles/globals.css';

export const metadata = {
  title : 'PropertyPulse | Find The Perfect Rental',
  description: 'Find your dreams rental property',
  keywords: 'rental, find rentals, find properties',
}

const MainLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <Navbar/>
      <main>
      {children}
    </main>
      </body>
    </html>
  )
}

export default MainLayout
