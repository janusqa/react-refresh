import BackgroundHeading from './components/BackgroundHeading';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Sidebar from './components/Sidebar';
// import ItemsProvider from './contexts/ItemsProvider';

function App() {
    return (
        <>
            <BackgroundHeading />
            <main>
                {/* <ItemsProvider> */}
                <Header />
                <ItemList />
                <Sidebar />
                {/* </ItemsProvider> */}
            </main>
            <Footer />
        </>
    );
}

export default App;
