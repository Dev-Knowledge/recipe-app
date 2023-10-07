import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeDetails from "./component/RecipeDetails";
import CategoryMeal from "./component/CategoryMeal";
import SearchMeal from "./component/SearchMeal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/recipe-app" element={<Home />} />
        <Route path="/recipe-app/recipeDetails" element={<RecipeDetails />} />
        <Route path="/recipe-app/categorymeal" element={<CategoryMeal />} />
        <Route path="/recipe-app/searchmeal" element={<SearchMeal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
