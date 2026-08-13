import { colleges } from "./Data/collegeData";
import Header from "./Components/Header";
import Avatar from "./Components/Avatar";
import ItemList from './Components/ItemList';
import { useState } from "react";
import College from "./Components/College";
import TimeComponent from "./Components/TimeComponent";
import CheckBok from "./Components/CheckBok"; 
import DefaultProps from "./Components/DefaultProps";
import Propsjsx from "./Components/Propsjsx";
import InputFiledValue from "./Components/InputFiledValue";
import ControlledComponent from "./Components/ControlledComponent";
import HandleCheckBox from "./Components/HandleCheckBox";
import HandleRadioDropdown from "./Components/HandleRadioDropdown";
import HandleLoopMap from "./Components/HandleLoopMap";
import { userData } from "./Data/userData.js";
import User from "./Components/User.jsx";
import HandleUseEffect from "./Components/HandleUseEffect.jsx";
import Counter from "./Components/Counter.jsx";
import InlineStyle from "./Components/InlineStyle.jsx";
import ExternalStyle from "./Components/ExternalStyle.jsx";
import ModuleStyle from "./Components/ModulesStyle.jsx";
import StyledComponent from "./Components/StyledComponent.jsx";
import BootstrapComponent from "./Components/BootstrapComponent.jsx";
import HandleUseRefHook from "./Components/HandleUseRefHook.jsx";
import HandleUncontrolled from "./Components/HandleUncontrolled.jsx";
import PassFunctionInComponentProps from "./Components/PassFunctionInComponentProps.jsx";
import HandleForwardRef from "./Components/HandleForwardRef.jsx";
import HandleUseFormStatus from "./Components/HandleUseFormStatus.jsx";
import HandleUseTransition from "./Components/HandleUseTransition.jsx";
import HandlePureComponents from "./Components/HandlePureComponents.jsx";
import HandleDerivedState from "./Components/HandleDerivedState.jsx";
import HandleLiftingState from "./Components/HandleLiftingState.jsx";
import HandleShowUser from "./Components/HandleShowUser.jsx";
import HandleObject from "./Components/HandleObject.jsx";
import HandleUpdateArray from "./Components/HandleUpdateArray.jsx";
import HandleUseActionState from "./Components/HandleUseActionState.jsx";
import HandleUseIdHook from "./Components/HandleUseIdHook.jsx";
import HandleFragmentDemo from "./Components/HandleFragmentDemo.jsx";
import HandleHooks from "./Components/HandleHooks.jsx";
import HandleContextApi from "./Components/HandleContextApi.jsx";
import HandleCustomHook from "./Components/HandleCustomHook.jsx";
import {Navigate, Route, Router, Routes } from "react-router";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Login from "./Components/Login.jsx";
import NavBar from "./Components/NavBar.jsx";
import PageNotFound from "./Components/PageNotFound.jsx";
import CollegeNavBar from "./Components/CollegeNavBar.jsx";
import CollegeStudent from "./Components/College/CollegeStudent.jsx";
import CollegeDepartment from "./Components/College/CollegeDepartment.jsx";
import CollegeDetails from "./Components/College/CollegeDetails.jsx";
import UsersList from "./Components/User/UsersList.jsx";
import UserDetails from "./Components/User/UserDetails.jsx";

function App() {
  const [fruit, setFruit] = useState("Apple");
  const [color,setColor] = useState("green");
  const [counter,setCounter] = useState(0);
  const [data,setData] = useState(0);
  const [display,setDisplay] = useState(true);
  const [user,setUser] = useState('');
  
  return (
    <>
      {/* <h1 className="text-amber-900 font-bold">React js 19 is Learning </h1> */}
      <div>

        {/* Install JSON Server and Make API
        . Install JSON Server.
        . Make db.json file
        . Run JSON Server.
        . Make Users API.
        . Test API With thunder client */}

        {/* API 
        . What is API
        . Why we need it.

        What is API?.
        . Application Programming Interface.
        . We need data from DB when making projects.
        . But JS can not connect with Database.
        . So we make api in other language as java, php, or node etc.

        Shared Data with API?.
        . We need same data in multiple platform.
        . Like web app mobile app, windows OS etc.
        . So we make API in one language.
        . And use same api with all platfoms.

        Fetch Data from API with Get Method.
        . API Methods
        . Test API
        . Integrate API
        . Display API data

        dummyjson.com/users


        API Methods
        . GET
        . POST
        . PUT/PATCH
        . DELETE */}


        {/* React Router NavLink and Active Class.
        . What is NavLink. Ans:-
        . Difference between NavLink and Link.
        . Apply Active Class. */}

        <Routes>
          <Route element={<NavBar/>}>
            <Route path={"/"}  element={<Home/>}/>
            <Route path={"in"}>
                <Route path={"/in/user"}>
                  <Route path="/in/user/about" element={<About/>}/>
                  <Route path="/in/user/login" element={<Login/>} />
                </Route>
            </Route>
             <Route path={"/users/list?"} element={<UsersList/>} />
             <Route path={"/users/:id/:name?"} element={<UserDetails/>} />
          </Route>
          <Route path={"/college"} element={<CollegeNavBar/>}>
            <Route index  element={<CollegeStudent/>}/>
            <Route path={"department"} element={<CollegeDepartment/>}/>
            <Route path={"details"} element={<CollegeDetails/>} />
          </Route>
          <Route path="/*" element={<PageNotFound/>}/> 
        </Routes>

        {/* React Router Optional Segment
        . What is optional Segment.
        . Static Optional Segment.
        . Dynamic Optional Segment. */}

        {/* <Routes>
          <Route element={<NavBar/>}>
            <Route path={"/"}  element={<Home/>}/>
            <Route path={"in"}>
                <Route path={"/in/user"}>
                  <Route path="/in/user/about" element={<About/>}/>
                  <Route path="/in/user/login" element={<Login/>} />
                </Route>
            </Route>
             <Route path={"/users/list?"} element={<UsersList/>} />
             <Route path={"/users/:id/:name?"} element={<UserDetails/>} />
          </Route>
          <Route path={"/college"} element={<CollegeNavBar/>}>
            <Route index  element={<CollegeStudent/>}/>
            <Route path={"department"} element={<CollegeDepartment/>}/>
            <Route path={"details"} element={<CollegeDetails/>} />
          </Route>
          <Route path="/*" element={<PageNotFound/>}/> 
        </Routes> */}

        {/* Dynamic Routes
        . What is Dynamic Routes.
        . Make user list page.
        . Make user detail page.
        . Make Dynamic routing. */}

        {/* <Routes>
          <Route element={<NavBar/>}>
            <Route path={"/"}  element={<Home/>}/>
            <Route path={"in"}>
                <Route path={"/in/user"}>
                  <Route path="/in/user/about" element={<About/>}/>
                  <Route path="/in/user/login" element={<Login/>} />
                </Route>
            </Route>
             <Route path={"/users"} element={<UsersList/>} />
             <Route path={"/users/:id"} element={<UserDetails/>} />
          </Route>
          <Route path={"/college"} element={<CollegeNavBar/>}>
            <Route index  element={<CollegeStudent/>}/>
            <Route path={"department"} element={<CollegeDepartment/>}/>
            <Route path={"details"} element={<CollegeDetails/>} />
          </Route>
          <Route path="/*" element={<PageNotFound/>}/> 
        </Routes> */}

        {/* Route Prefixes
        . Example Route Prefixe. */}
         {/* <Routes>
          <Route element={<NavBar/>}>
            <Route path={"/"}  element={<Home/>}/>
            <Route path={"in"}>
                <Route path={"/in/user"}>
                  <Route path="/in/user/about" element={<About/>}/>
                  <Route path="/in/user/login" element={<Login/>} />
                </Route>
            </Route>
            
          </Route>
          <Route path={"/college"} element={<CollegeNavBar/>}>
            <Route index  element={<CollegeStudent/>}/>
            <Route path={"department"} element={<CollegeDepartment/>}/>
            <Route path={"details"} element={<CollegeDetails/>} />
          </Route>
          <Route path="/*" element={<PageNotFound/>}/> 
        </Routes> */}


        {/* Layout and Index Routes
        . What is Layout Routes.
        . Example of Layout Routes.
        . Index Routes.
        . Example of Index Routes. */}

        {/* <Routes>
          <Route element={<NavBar/>}>
            <Route path={"/"}  element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>} />
          </Route>
          <Route path={"/college"} element={<CollegeNavBar/>}>
            <Route index  element={<CollegeStudent/>}/>
            <Route path={"department"} element={<CollegeDepartment/>}/>
            <Route path={"details"} element={<CollegeDetails/>} />
          </Route>
          <Route path="/*" element={<PageNotFound/>}/> 
        </Routes> */}

        {/* Nested Navigation with React Router.
        . What is Nested Navigation.
        . Make some pages for Nested Navigation.
        . Make routes for Nested Navigation. */}
        {/* <NavBar/>
        <Routes>
          <Route path={"/"}  element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path={"/college"} element={<CollegeNavBar/>}>
            <Route path={"student"} element={<CollegeStudent/>}/>
            <Route path={"department"} element={<CollegeDepartment/>}/>
            <Route path={"details"} element={<CollegeDetails/>} />
          </Route>
          <Route path="/*" element={<PageNotFound/>}/> 
        </Routes> */}

        {/* 404 Page and Redirection
        . What is 404 page.
        . Make Route for 404 Page.
        . Make 404 Page.
        . Redirect from 404 Page. */}
        {/* <NavBar/>
        <Routes>
          <Route path={"/"}  element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/*" element={<PageNotFound/>}/> 
          <Route path="/*" element={<Navigate to={"/login"}/>} />
        </Routes> */}

        {/* Header with React Router.
        . Write HTML for header.
        . Add Links in header.
        . Write CSS for header. */}
        {/* <NavBar/>
        <Routes>
          <Route path={"/"}  element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>} />
        </Routes> */}

        {/* React Router 7 Setup 
        . What is React router.
        . Install Router Router 7 in react 19 
        Basic Pages with React-Router
        . What is BrowserRouter. Ans :- This component enables client-side routing using the browser's history API.
        . What is Routes. Ans:- It's responsible for rendering the appropriate component based on the current URL.
        . What is Route. Ans:- Each Route component defines a path and the corresponding component to render when that path is matched.
        . What is Link. Ans:- A link for navigate from 1 page to other page
        . Make basic Pages.
        . Make Different file for links.
        
        */}
        {/* <NavBar/>
        <Routes>
          <Route path={"/"}  element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>} />
        </Routes> */}

        {/* Make Custom Hook
        . What are custom Hook.
        . Make custom hook for toggle UI. */}
        {/* <HandleCustomHook/> */}

        {/* Context API
        . What is Context API.
        . How to work.
        . Example.
        . Update Data with Context API 
        Context API Parts.
          => createContext: To initiate Context API.
          => Provider : use for update or provide data.
          => useContext : get data from context api.
        
        */}
        {/* <HandleContextApi/> */}


        {/* Rules for React JS Hooks
        . Rules for Hooks.
        Rules :- 1
        . Start with use___
        . useState
        . useEffect.
        . useRef 

        Rules :- 2
        Use Hooks at Top Level

        Rules :- 3
        => Do not call Hooks inside conditions or loops.
        => Do not call Hooks after a conditional return statement.
        => Do not call Hooks in event handlers.
        => Do not call Hooks in class components.
        => Do not call Hooks inside try/catch/finally block.

        Don't call Hooks from regular JavaScript functions. Instead you can:
        . Call Hooks from React function components.
        . Call Hooks from custom Hooks.

        . Example */}

        {/* <HandleHooks/> */}

        {/* Fragment in React JS
        . What is Fragment. Ans :-often used via <>...</> syntax, lets you group elements without a wrapper node.
        . Issues Without fragment.
        . Example */}
        {/* <HandleFragmentDemo/> */}

        {/* useId Hook
        . What is usedId Hook. Ans :- useId is a React Hook for generating unique IDs that can be passed to accessibility attributes. 
        . How to use it.
        . Example */}
        {/* <HandleUseIdHook/> */}

        {/* useActionState Hook
        . What is the use of useActionState Hook. Ans : useActionState is a React Hook that lets you update state with side effects using 
        . Make input form.
        . Exampleof useActionState hook. */}

        {/* <HandleUseActionState/> */}

        {/* Updating Array in State.
        . Make Array in state.
        . Display Array Data on UI.
        . Update array data.
        . Update object of array. */}
        {/* <HandleUpdateArray/> */}

        {/* Updating Objects in State.
        . Make Object in state.
        . Display Object value.
        . Update object key.
        . Update nested object key. */}
        {/* <HandleObject/> */}



        {/* Lifting State Up in React JS
        . What is Lifting state up.
        . Make two component.
        . Share data between two component */}
        {/* <HandleLiftingState setUser={setUser}/>
        <HandleShowUser user={user}/> */}

        {/* Derived State in React js.
        . What is drived state.
        . Understand drived state with example.
        . How it improve performance 
         =>  State that is calculated or derived from other state values or props within your component.
        . Drived state can be a variable.
        . No need to extra state only variables or constants are enough
        */}
        {/* <HandleDerivedState/> */}

        {/* Keep Your Components Pure
        . What is pure function js.
        . What is pure component.
        . Example of impure component(avoid)
        . Example of pure component */}
        {/* <HandlePureComponents/> */}

        {/* useTransition Hook in React js
        . What is useTransition
        . Emaple
          . Make button and apply logic.
          . Apply useTransition */}
        
        {/* <HandleUseTransition /> */}

        {/* useFormStatus Hook in React js
        . What is useFormStatus
        . Example
          . Make Form
          . Handle submit form. */}
          {/* <HandleUseFormStatus/> */}

        {/* ForwardRef in React.
        . What is ForwardRef in React js
        . Implement ForwardRef before react 19 version.
        . Implement ForwardRef in react 19 */}
        {/* <HandleForwardRef /> */}

        {/* Pass Function in Component as Props.
        . Why we need to pass function as props.
        . Make Parent and child component.
        . Call function from parent to child component. */}
        {/* <PassFunctionInComponentProps/> */}

 
        {/* Uncontrolled Component
        . What is Uncontrolled component
        . Make Uncontrolled component with query selector.
        . Make Uncontrolled component with useRef. */}
        {/* <HandleUncontrolled/> */}


         {/* useRef Hook in React.
         . What is useRef hook.
         . Learn how to use useRef.
         . Control input filed with useRef.
         . Hide and show input filed with useRef. */}
         {/* <HandleUseRefHook/> */}

        {/* Add Bootstrap in React js
        . What is bootstrap.
        . How to install bootstrap (npm install react-bootstrap bootstrap).
        . Import and use bootstrap.
        . Bootstrap example e.g. button,aleart. */}

        {/* <BootstrapComponent/> */}
        

        {/* Styled Components
        . What is styled component.
        . Install styled componenet packge (npm i styled-components).
        . Import and Apply Styled component.
        . Write style with styled component. */}

        {/* <StyledComponent/> */}
        

        {/* Style with CSS Modules.
        . Why need css modules.
        . Make css module file.
        . Write module css.
        . Import css in component. */}
        {/* <ModuleStyle/> */}

        {/* External Style in React js
        . How we write external style.
        . Make CSS File.
        . Right way to import css file. */}
        {/* <ExternalStyle/> */}

        {/* Dynamic and Conditional inline style.
        . Make Button for dynamic style.
        . Use state for style object.
        . Update style on button click.
        . Apply style conditional. */}
        {/* <InlineStyle pagetitle ="Dynamic and Conditional inline style"/> */}

        {/* Inline Style in React.
        . How React inline style is different from regular inline style.
        . Example with style of A User Profile Card.
          . Write HTML Code.
          . Add inline style.
        . Use Js object for style.
        . Make multiple cards for user profile. */}

        {/* <InlineStyle pagetitle ="Inline Style in React"/> */}
        

        {/* Styling React Using CSS.
        . How many type of style we have in React.
          . Inline style.
          . External style.
          . CSS Modules.
          . Styled Components.
          . External CSS Library/Framework. */}

        
        {/* Component Life Cycle in React.                              --------------------------------------
        . What is life cycle in human.                              -           -      -                  -
        . What is life cycle in React component. Ans:- Mounting ----> Updating  -------> Unmounting       -
        . Phase of life cycle.                                      -           -      -                  -
        . How to use useEffect to handle life cycle.                -------------      -------------------
         Life Cycle Ans : React lifecycle is the sequence of stages a component goes through: mounting, updating, and unmounting
         . Mounting → Component is created and added to the DOM.
         . Updating → Component re-renders when state or props change.
         . Unmounting → Component is removed from the DOM. */}
          {/* {
            display ? <Counter counter={counter} data={data}/> : null
          }
        <button onClick={() => setCounter(counter+1)}>Counter {counter}</button>
        <button onClick={() => setData(data+1)}>Data {data}</button> 
        <button onClick={() => setDisplay(!display)}>Toggle</button> */}


        {/* Handle Props Side Effect with useEffect in component.
        . Make Component.
        . Pass Component.
        . Apply useEffect to handle side effects.
        . How to pass props as dependency in useEffect. */
        }
        {/* <Counter counter={counter} data={data}/>
        <button onClick={() => setCounter(counter+1)}>Counter {counter}</button>
        <button onClick={() => setData(data+1)}>Data {data}</button> */}

        

        {/* useEffect Hooks
        . What is use of useEffect. Ans : useEffect is used to handle side effects in a React component, such as API calls, subscriptions, timers, or updating the document title.
        . What example we will take in this part.
        . Syntax of useEffect.
        . Use Effect with state.
        . Use Effect with props. */}
        {/* <HandleUseEffect/> */}

        {/* Hooks in React JS.
        . What are hooks. Ans:- Hooks in React are special functions that let functional components use features like state and lifecycle methods without writing class components.
        . Why we need hooks. Ans :- Hooks make functional components more powerful and help us reuse component logic easily.
        . History of hooks. Ans :- Hooks were introduced in React 16.8 to bring state and lifecycle features to functional components.
        . Some hooks name. Ans :- Popular React hooks: useState,useEfect,useRef,useContext,useReducer
        . How to identify hooks. Ans :- Hooks are identified by the use prefix, such as useState, useEffect, and useContext. */}

        {/* Nested Looping
        . Understand array structure for nested looping.
        . Make Outer loop.
        . Make Inner loop.
        . Make component for outer loop.
        . Make component for inner loop. */}

         {/* Uncomment this code to see how props are passed to multiple components using the map() loop. */}
        {/* {colleges.map((colleg, ind) =>
            <College collegeRow={colleg} key={ind}/>
        )} */}


         {/* Select a color from the dropdown and pass the selected color to TimeComponent using props.
            . Make Clock Component.
            . Where Clock color can change with Props
        */}
         {/* <select defaultValue={color} onChange={(event)=>setColor(event.target.value)}>
            <option value={"red"}>Red</option>
            <option value={"white"}>White</option>
            <option value={"green"}>Green</option>
            <option value={"orange"}>Orange</option>
            <option value={"blue"}>Blue</option>
          </select>
        <TimeComponent color={color}/> */}


        {/* Reuse Component in Loop.
        . Make a component.
        . Apply Map for loop in JS.
        . Render component in loop.
        . Pass data in component inside loop.
        . Add Style. */}

        {/* {
          userData.map((user,index) => (
            <User data={user} key={index}/>
          ))
        } */}

        {/* Loop in JSX with Map Function.
        . What is Array.
        . Make a Array.
        . Make a table in JS.
        . Use map function for looping. */}
        {/* <HandleLoopMap/> */}

        {/* Handle Radio and Dropdown
        . Make Radio button.
        . Get Radio button value in state.
        . Default selection of Radio button.
        . Make Dropdown.
        . get dropdown value in state.
        . Default selection of dropdown. */}
        {/* <HandleRadioDropdown/> */}

        {/* Handle check box 
        . Make a check box.
        . Define state for check box
        . Get checkbox value in state.
        . Remove checkbox value in state. */}

        {/* <HandleCheckBox/> */}
        
        
        {/* Uncomment this code check result ,
        Controlled Component?
        A Controlled component is form whose input field value is controlled by React's state.
        .Here's how it works:
           1) Store input value in state.
           2)Use change handler with input filed.
           3)Value attribute attached with state. */}
        {/* <ControlledComponent/> */}

        {/* Uncomment this code check result , Get input dield value,Make input field,Define the state,Get input filed value in state,Display the value,Clear input filed value */}
        {/* <InputFiledValue /> */}

        {/* Uncomment this code check default props ,pass JSX with props, change style with props */}
        {/* <Propsjsx color="orange">
          <h3>Hello Every one</h3>
        </Propsjsx>
        <Propsjsx>
          <h3>Hello Every tow</h3>
        </Propsjsx>
        <Propsjsx>
          <h3>Hello Every three</h3>
          <h3 style={{color:"green"}}>Admin Login</h3>
        </Propsjsx> */}


        {/* Uncomment this code check default props example */}
        {/* <DefaultProps useName="Ravi Kumar"/>
        <DefaultProps/> */}
        {/* Uncomment this code to see how to get checkbox values and remove values when unchecked using join(). */}
        {/* <CheckBok/> */}

       
       
       </div>
      
    </>
  )
}

export default App