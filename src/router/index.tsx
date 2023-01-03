import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

// 頁面組件
import Home from '@/pages/Home/index';

const App = () => {
  let routes = useRoutes([{ path: '/', element: <Home /> }]);
  return routes;
};

const RemoteAssistanceRoute = () => {
  return (
    <div className="remote-assistance-route">
      <Router>
        <App />
      </Router>
    </div>
  );
};

export default RemoteAssistanceRoute;
