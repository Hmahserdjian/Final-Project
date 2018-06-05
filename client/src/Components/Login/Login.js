import React from "react";





const Login = () => (

 <form>
  <div class="form-group">
    <label for="Username">Username:</label>
    <div>
        <input type="text" placeholder="Username" required></input>
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password:</label>
        <div>
            <input type="password"  placeholder="Password" required></input>
        </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>


);

export default Login