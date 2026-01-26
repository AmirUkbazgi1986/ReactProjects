import "./index.css";

// React-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Suspense } from "react";

// layout
import RootLayout from "./layout/RootLayout";

// pages
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import { tasksLoader } from "./components/TasksLoader";
import { createAction } from "./components/createAction";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} loader={tasksLoader} />
      <Route path="create" element={<Create />} action={createAction} />
      <Route path="profile" element={<Profile />} />
    </Route>,
  ),
);

function App() {
  // 1. use this return if you are fetching from external source (SSR)
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );

  // 2. use this return if you are not fetching from external source(CSR)
  // return (
  //   <RouterProvider router={router} fallbackElement={<p>loading ...</p>} />
  // );
}

export default App;
