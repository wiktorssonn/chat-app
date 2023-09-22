import { Home } from './components/Home';

// https://dev.to/divofred/how-to-build-a-realtime-group-chat-application-with-react-and-socketio-2jf0

const App = () => {
  <Router>
    <Route path="/" exact component={Home}/>
    <Route path="/chat" component={Chat} />
  </Router>
}

export default App;
