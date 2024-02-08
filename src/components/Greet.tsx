type GreetProps = {
  name: string;
  messageCount?: number; //Question mark means optional
  isLogged: boolean;
};

export const Greet = (props: GreetProps) => {
  
    const { messageCount = 0 } = props; // if message count not used in parent form it will return 0 if yes, it will display the correct value

  return (
    <div>
      {props.isLogged ? (
        <h2>
          Welcome {props.name}! You have {messageCount} unread messages
        </h2>
      ) : (
        "Welcome Guest"
      )}
    </div>
  );
};
