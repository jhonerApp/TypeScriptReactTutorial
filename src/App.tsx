import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { Counter } from "./components/state/Counter";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";

import { UserContextProvider } from "./components/context/UserContextA";
import { UserA } from "./components/context/UserA";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { CounterA } from "./components/class/CounterA";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";

function App() {
  const personName = {
    first: "Bruce",
    last: "wayne",
  };

  const nameList = [
    {
      first: "Bruce 1",
      last: "wayne",
    },
    {
      first: "Bruce 2",
      last: "wayne",
    },
    {
      first: "Bruce 3",
      last: "wayne",
    },
  ];

  return (
    <div className="App">
      {/* <Greet name='Vishwas' messageCount={20}
      isLogged = {true} />

      <Person name={personName}/>
      <PersonList names={nameList}/> 

      <Status status="loading" />
      <Heading>Place holder</Heading>
      <Oscar>
        <Heading>Oscar goes to leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name='Vishwas'  isLogged={true} />

      <Button handleClick={(event, id) =>{
        console.log("Button clicked", event , id)
      }} />  

      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: '1px solid black' , padding: '1rem' }} />

      <LoggedIn />
      <User/> */}
      {/* <Counter /> */}

      {/* <ThemeContextProvider>
      <Box />
      </ThemeContextProvider> */}
     
      {/* <UserContextProvider>
        <UserA />
      </UserContextProvider> */}


      {/* <DomRef />
      <MutableRef/> */}

      
      {/* <CounterA message="The count value is"/>

      <Private isLoggedIn={false} component={Profile} /> */}

      {/* <List items={['batman','superman','wonder woman']} onClick={(item)=> console.log(item)} />
      <List items={[1,2,3]} onClick={(item)=> console.log(item)} /> */}
      {/* <List items={[
        {
          id:1,
          name:"A",
        },
        {
          id:2,
          name:"A",
        },
        {
          id:3,
          name:"A",
        }
      ]} onClick={(item)=> console.log(item)} /> */}

    </div>
  );
}

export default App;
