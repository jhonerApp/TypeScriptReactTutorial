// type ListProps<T> = {
//     items: T[]
//     onClick: (value: T) => void
//   }

  type ListProps<T>  = {
    items: T[]
    onClick: (value: T) => void
  }
  
//   <T extends { id: number }>({
//     items,
//     onClick
//   }


//T extends string | number = displays without id
  export const List = <T extends {id : number  }>({ items, onClick} : ListProps<T>) => {
    return (
      <div>
        <h2>List of items</h2>
        {items.map((item , index)=> {
          return (
            <div key={item.id} onClick={() => onClick(item)}>
              {item.id}
            </div>
          )
        })}
      </div>
    )
  }