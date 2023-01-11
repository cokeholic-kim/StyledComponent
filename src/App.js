import logo from './logo.svg';
import './App.css';
import  styled,{css, ThemeProvider}  from 'styled-components';
import Circle from './component/Circle';
import Button from './component/Button';
import ButtonTotal from './component/ButtonTotal';

const AppBlock = styled.div`
width:512px;
margin: 0 auto;
margin-top: 4em;
border: 1px solid black;
padding: 1em;
`;

function App() {
  return (
    <ThemeProvider theme={{
      palette:{
        blue:'#228be6',
        gray:'#495057',
        pink:'#f06595'
      }
    }}>
      <AppBlock>
      <div>
          <ButtonTotal size='large' >Button</ButtonTotal>
          <ButtonTotal >Button</ButtonTotal>
          <ButtonTotal  size='small'>Button</ButtonTotal>
        </div>
        <div>
          <ButtonTotal size='large' color="pink">Button</ButtonTotal>
          <ButtonTotal color="pink">Button</ButtonTotal>
          <ButtonTotal color="pink" size='small'>Button</ButtonTotal>
        </div>
        <div>
          <ButtonTotal size='large' color="gray" >Button</ButtonTotal>
          <ButtonTotal color="gray">Button</ButtonTotal>
          <ButtonTotal color="gray" size='small'>Button</ButtonTotal>
        </div>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
