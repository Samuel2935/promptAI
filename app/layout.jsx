import '@styles/global.css';
import Nav from './components/Nav';
import Provider from './components/Provider';

export const metadata = {
  title: 'Prompt AI',
  description: 'discover & share AI prompts',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <bod>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </bod>
    </html>
  );
};

export default RootLayout;
