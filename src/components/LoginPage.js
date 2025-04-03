import React from "react";
function LoginPage(){
    return(
        <form>
        <div>
        <label>Enter Email Id</label>
        <input type="text" id="email" placeholder="enter email"></input>
        <label>Enter Password</label>
        <input type="text" id="password" placeholder="enter password"></input>
        <button type="button" class="btn btn-outline-primary">Login</button>
        </div>

        </form>
    );
}
export default LoginPage;