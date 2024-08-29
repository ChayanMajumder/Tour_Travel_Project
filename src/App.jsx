import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import BlogsDetails from "./pages/BlogsDetails"
import PlacesRoute from "./pages/PlacesRoute"
import NoPage from "./pages/NoPage"


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:id" element={<BlogsDetails />} />
        <Route path="places" element={<PlacesRoute />} />
        <Route path="*" element={<NoPage />} />

      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
