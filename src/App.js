import Button from './components/Button/Button';
import Alert from './components/Alert/Alert';

import { useState } from 'react';

function App() {
  const [isOpenAlert, setOpenAlert] = useState(false);

  const handleOpen = () => setOpenAlert(true);

  const handleClose = () => setOpenAlert(false);

  return (
    <div className="App">
      <>
        <Button color="primary">Primary button</Button>
        <Button color="primary" size="large">Primary large button</Button>
        <Button color="secondary">Secondary button</Button>
        <Button color="primary" disabled>Disabled button</Button>
      </>
    
      <>
        <button onClick={handleOpen}>Open alert</button>
        {isOpenAlert && <Alert color="primary" onClose={handleClose}>Some text</Alert>}
      </>
    </div>
  );
};

export default App;
