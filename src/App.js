import StyledText from './components/StyledText/index.js';
import AlertButton from './components/AlertButton/index.js'

function App() {
  return (
    <div>
      <StyledText description='Texto Principal' color='green'/>
      <StyledText color='#034fff'/>
      <StyledText textTransform='uppercase'/>

      <AlertButton label='Baixar CV'/>
      <AlertButton label='Fazer download'/>

    </div>
  );  
}

export default App;

