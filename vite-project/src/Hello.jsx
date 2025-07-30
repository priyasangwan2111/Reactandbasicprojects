function Hello(){
    let myName='priya';
    let fullName=()=>{
        return 'priya sangwan'
    }
    return <h1>
        Hello, I am {myName}.
        i am {fullName()}    
    </h1>
}
//dynamic componenets by {}
export default Hello;