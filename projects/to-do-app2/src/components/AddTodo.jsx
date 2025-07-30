function AddTodo(){
 return <div class="container text-center">
      <div class="row t-row">
        <div class="col-6">
          <input type="text" placeholder="enter todo here"></input>
        </div>
          
        <div class="col-4">
          <input type="date"/>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success t-button">Add</button></div>
      </div>
      </div>
}
export default AddTodo