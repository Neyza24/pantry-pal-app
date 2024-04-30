
import { Navigate, Route, Routes } from 'react-router-dom'
import { IngredientsPage } from '../recipes/pages/IngredientsPage'
import RecipesPage from '../recipes/pages/RecipesPage'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<IngredientsPage />} />
            <Route path='/recipes' element={<RecipesPage />} />
            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}

export default AppRouter