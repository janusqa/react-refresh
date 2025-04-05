import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Background from './components/Background';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import { useActiveJobId } from './hooks/jobs';

const queryClient = new QueryClient({
    // we can override default options here or per query
    // one of the popular ones to override per query is staleTime
    defaultOptions: {
        queries: {
            retry: 3,
            gcTime: 1000 * 60 * 5, // default 5 mins
            staleTime: 1000 * 30, // 30 seconds
            refetchOnWindowFocus: true, //  default true
            refetchOnReconnect: true, // default true
            refetchOnMount: true, // default true
            throwOnError: true,
        },
        mutations: {
            throwOnError: true,
        },
    },
});

function App() {
    useActiveJobId();

    return (
        <QueryClientProvider client={queryClient}>
            <Background />
            <Header />
            <Container />
            <Footer />
            <Toaster position="top-right" />
        </QueryClientProvider>
    );
}

export default App;
