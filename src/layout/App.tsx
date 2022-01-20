import {ThemeProvider} from '@material-ui/core';
import {Main as MainPage} from '../pages/Main';
import './App.scss';
import {QueryClient, QueryClientProvider} from 'react-query';
import theme from '../constants/theme';
import { Footer } from './Footer';
import { NavBar } from './NavBar';

export const App = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 30000,
                retry: false,
                refetchIntervalInBackground: false,
                refetchOnWindowFocus: false,
                refetchOnMount: false,
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <div className="app">
                    <NavBar />
                    <MainPage />
                    <Footer />
                </div>
            </QueryClientProvider>
        </ThemeProvider>
    );
};

export default App;
