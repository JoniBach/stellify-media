import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LoginView from './components/LoginView/LoginView'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { red, deepOrange, green } from '@material-ui/core/colors';
import MainView from './components/MainView/MainView'

const colors = {
  primary: '#c4a747',
  secondary: deepOrange[500],
  status: green[500],

};
function App() {
  // NOTE: Setting a global dark or light theme based on the user's browser settings
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: colors.primary,
          },
          secondary: {
            main: colors.secondary,
          },
          status: {
            main: colors.status,
          },
        },

      }),
    [prefersDarkMode],
  );
  return (
    // NOTE: Using react router dom to enable us to treat this one page application as if it had multiple pages
    <Router>
      {/* NOTE: Enabling a MUI theme to be used globally */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Route exact path="/" component={LoginView} />
        <Route exact path="/media" component={MainView} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
