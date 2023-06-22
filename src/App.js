import StyleText from './components/StyledText/index.js';
import AlertButton from './components/AlertButton/index.js'

function App() {
  return (
    <div>
      <StyleText description='Texto Principal' color='green'/>
      <StyleText color='#034fff'/>
      <StyleText textTransform='uppercase'/>

      <AlertButton label='Baixar CV'/>
      <AlertButton label='Fazer download'/>

    </div>
  );  
}

export default App;

