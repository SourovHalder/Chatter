import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App =() => {
return (
    <ChatEngine
    height = "100vh"
    projectID = "51328d26-7e7d-4607-b4ce-a6bae8277dca"
    userName="sourov"
    userSecret="123" 
    renderChatFeed={( chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
);

}

export default App;