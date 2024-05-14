
import { Navigate, Route, Routes } from 'react-router-dom'
import { IngredientsPage } from '../recipes/pages/IngredientsPage'
import { RecipesPage } from '../recipes/pages/RecipesPage'
import { RecipeDetailPage } from '../recipes/pages/RecipeDetailPage'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<IngredientsPage />} />
            <Route path='/recipes' element={<RecipesPage />} />
            <Route path='/recipes/:id' element={<RecipeDetailPage />} />
            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}
