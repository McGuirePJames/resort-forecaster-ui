import {Main as MainPage} from '../pages/Main';
import './App.scss';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Footer} from './Footer';
import {NavBar} from './NavBar';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AvalancheProvider, ThemeProvider } from '../contexts';
import UACWarning from './UACWarning';
import { useIcons } from '../utilities/customHooks/useIcons';
import { faBug, faComment, faEnvelope, faTimes, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

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

    useIcons([
        faBug as IconDefinition,
        faComment as IconDefinition,
        faEnvelope as IconDefinition,
        faTimes as IconDefinition,
        faCaretLeft as IconDefinition,
        faCaretRight as IconDefinition,
    ]);

    return (
        <ThemeProvider>
            <AvalancheProvider>
                <QueryClientProvider client={queryClient}>
                    <div className="app">
                        <UACWarning />
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
            </AvalancheProvider>
        </ThemeProvider>
    );
};

export default App;
