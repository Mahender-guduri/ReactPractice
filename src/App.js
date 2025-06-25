import './App.css';
import React from 'react';
import HookCounter from './componetFun/HookCounter';
import HookCounter2 from './componetFun/HookCounter2';
import HookObject from './componetFun/HookObject';
import HookArray from './componetFun/HookArray';
import HookMouse from './componetFun/HookMouse';
import IntervalHook from './IntervalHook';
import DataFetching from './componetFun/DataFetching';

 function App() {
  return (
    <div className='App'>
      {/* <HookCounter2 />
      <HookObject />
      <HookArray /> 

      <HookMouse />
      <IntervalHook />
      */}

      <DataFetching />// i made some edits in app js
    
    </div>
  )
}

export default App




// import {Greet} from './components/Greet';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter from './components/counter';
// import EventHandle from './components/Eventhandle'
// import EventBind from './components/EventBind';
// import ListRendering from './components/ListRendering';
// import FormHandle from './components/FormHandle';
// import FragmentDemo from './components/FragmentDemo';
// import Refs from './components/Refs';
// import PortalDemo from './components/PortalDemo';

// function App() { 
//   return (
//     <div className="App"> 
//       <Greet name="Mahender"/>
//       <Welcome />
//       <Message />
//       <Counter /> 
//       <EventHandle />
//       <EventBind /> 
//       <ListRendering />
//       <FormHandle />
//       <FragmentDemo />
//       <Refs />
      
//       <PortalDemo />

//     </div>
//   );
// }    

// export default App;
