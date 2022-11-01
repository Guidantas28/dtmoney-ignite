import { ThemeProvider } from 'styled-components'
import { TransacationsProvider } from './contexts/TransactionsContext'
import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransacationsProvider>
        <Transactions />
      </TransacationsProvider>
    </ThemeProvider>
  )
}
