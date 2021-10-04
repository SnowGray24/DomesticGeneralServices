import { FormGroup, Label, Input  } from 'reactstrap';
import BootStrapNavbar from './components/BootStrapNavbar';
import './css/layout.css';


function LandingPage() {
  return (
    <div className="layoutBody">
      <header className="App-header">
        <BootStrapNavbar />
      </header>
      <FormGroup>
        <Label for="tituloPesquisa">Encontre agora o serviço que você precisa</Label>
        <Input type="search" name="search" id="tituloPesquisa" placeholder="Procure seu serviço" />
    </FormGroup>
    </div>
    


  );
}

export default LandingPage;

