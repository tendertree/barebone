import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ReactQueryDevtools } from 'react-query-devtools'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Hello world!</div>,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ReactQueryDevtools />
		<RouterProvider router={router} />
		<App />
	</React.StrictMode>,
)
