import { useAntMessage } from "./hooks";
import router from "./routes/Router"
import { RouterProvider } from 'react-router-dom';

const App = () => {
	const { contextHolder } = useAntMessage();

	return (
		<>
			{contextHolder}	{/* Ant Design message holder */}
			<RouterProvider router={router} />
		</>
	)
}
export default App