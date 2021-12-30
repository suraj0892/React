import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Welcome } from './components/Welcome';
import { Hello } from './components/hello';
import {SampleClass} from "./components/NewOne";
import {Message} from "./components/Message";
import {  CounterClass } from './components/counter';
import ButtonClick from './components/ButtonClick';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import IndexAsKey from './components/IndexAsKey';
import StyleSheet from './components/StyleSheet';
import Form from './components/Form';
import { LifeCycleMethods } from './components/LifeCycleMethods';
import {FragmentsDemo} from './components/FragmentsDemo';
import { ParentPureComponent } from './components/ParentPureComponent';
import { MemoParentComponent } from './components/MemoParentComponent';
import { RefDemo } from './components/RefDemo';
import FRParent from './components/FRParent';
import PortalRootDemo from './components/PortalRootDemo';
import { Hero } from './components/Hero';
import ErrorHandling from './components/ErrorHandling';
import MouseOverCounter from './components/MouseOverCounter';
import ButtonCounter from './components/ButtonCounter';
import ButtonRenderCounter from './components/RenderPropsExample/ButtonCounter'
import OnMouseOverRenderCounter from './components/RenderPropsExample/OnMouseOverComponent'
import { RenderpropsExample } from './components/RenderPropsExample/RenderpropsExample';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">

      {/* <RenderpropsExample render={(count, clickHandler) => (<ButtonRenderCounter count={count} clickHandler={clickHandler}/>)}/> */}
      <RenderpropsExample>
        {
          (count, clickHandler) => {
            return (<OnMouseOverRenderCounter count={count} clickHandler={clickHandler} />)
          }
        }
      </RenderpropsExample>
{/* <MouseOverCounter/>
<ButtonCounter/> */}

      {/* <ErrorHandling>
        <Hero heroname='Suraj'></Hero>
      </ErrorHandling>
      <ErrorHandling>
        <Hero heroname='Joker'></Hero>
      </ErrorHandling> */}
     
      {/* <FRParent/> */}
      {/* <PortalRootDemo/> */}
      {/* <RefDemo/> */}
      {/* <MemoParentComponent/> */}
      {/* <ParentPureComponent></ParentPureComponent> */}
    {/* <FragmentsDemo name="Suraj"> </FragmentsDemo> */}
      {/* <LifeCycleMethods/> */}

      {/* <Form></Form> */}
{/* <StyleSheet/> */}

      {/* <IndexAsKey/> */}
      {/* <ListRender/> */}
      {/* <ConditionalRender/> */}
      {/* <ParentComponent/> */}
      {/* <ClassClick/> */}

      {/* <ButtonClick>

      </ButtonClick> */}
      {/* <CounterClass name="Head Counter"/> */}
        {/* <Message/> */}
      {/* <Greet name="Kriosh" hero="ironman"><p>children</p></Greet> */}
      {/*<Welcome/>*/}
      {/*<Hello/>*/}
      {/*<SampleClass/>*/}
    </div>
  );
}

export default App;
