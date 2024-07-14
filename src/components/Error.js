import { useRouteError } from "react-router-dom";
const Error=()=>{

    const err=useRouteError();
    console.log(err);
    return(
        <div>
            Opps.. somthing went wrong;
            <h1>{err.status} {err.statusText}</h1>
        </div>
    )
}

export default Error;