 export type ProfileProps = {
    name: string
  }
  
//{ name }: ProfileProps
//{name}
  export const Profile = ({ name }: ProfileProps) => {
    return <div>Private Profile component. Name is {name} </div>
  }