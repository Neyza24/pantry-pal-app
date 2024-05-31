import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./store/theme/AppTheme"


export const PantryApp = () => {

  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}


