import Legend from './components/legend';
import Button from './components/button'

function App() {
  return (
    <div>
      <Legend description='Texto Principal' color='green'/>
      <Legend color='#034fff'/>
      <Legend textTransform='uppercase'/>

      <Button label='Baixar CV'/>
      <Button label='Fazer download'/>

    </div>
  );  
}

export default App;

