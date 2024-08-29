import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1>Error</h1>
            <h4>errorStatus: {error.status}</h4>
            <h4>errorStatusText:  {error.statusText}</h4>
            <h4>{error.data}</h4>
        </div>
    );
}

export default Error;