import { useEffect } from 'react';
import Container from './components/Container';
import Footer from './components/Footer';
import HashtagList from './components/HashtagList';
import { useGetFeedbackItems } from './store/feedbackItemsStore';

function App() {
    const getFeedbackItems = useGetFeedbackItems();

    useEffect(
        function () {
            getFeedbackItems();
        },
        [getFeedbackItems]
    );

    return (
        <div className="app">
            <Footer />
            <Container />
            <HashtagList />
        </div>
    );
}

export default App;
