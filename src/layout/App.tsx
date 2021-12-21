import { createTheme, ThemeProvider } from '@material-ui/core';
import NavBar from '../components/NavBar';
import { Main as MainPage } from '../pages/Main';
import Footer from '../components/Footer';
import './App.scss';
import { colorPrimary, colorSecondary } from '../constants/theme';
import { QueryClient, QueryClientProvider } from 'react-query';

export const App = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: colorPrimary,
            },
            secondary: {
                main: colorSecondary,
            },
        },
    });


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
