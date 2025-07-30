function List(){
    const fruits=["apple","mango","orange"]
    const ListItems=fruits.map(fruits=><li>{fruits}</li>)
    return (<ol>{ListItems}</ol>)
}
export default List