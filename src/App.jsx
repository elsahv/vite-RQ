import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import CommunityPage from "./pages/CommunityPage";
import MainLayout from "./layouts/MainLayout";
import Test from "./pages/Test";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/test" element={<Test />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
