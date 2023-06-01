import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersonalityTest } from './PersonalityTest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PersonalityTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
