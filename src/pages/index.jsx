import { render } from '@czechitas/render';

import '../global.css';
import './index.css';
import { Header } from '../components/Header/header';

document.querySelector('#root').innerHTML = render(
  <>
    <Header title="Domy na prodej" />
  
  
  </>
);
