import {ThemeProvider} from '@mui/material';
import {Main as MainPage} from '../pages/Main';
import './App.scss';
import {QueryClient, QueryClientProvider} from 'react-query';
import theme from '../constants/theme';
import {Footer} from './Footer';
import {NavBar} from './NavBar';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                    <ToastContainer
                        className="toast-container"
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            </QueryClientProvider>
        </ThemeProvider>
    );
};

export default App;
