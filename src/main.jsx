import { createRoot } from 'react-dom/client';
import { App } from '../src/components/app/app';
import './styles/reset.css';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(<App />);
