import { Button } from "@mantine/core";
import { type ReactElement } from "react";

function App(): ReactElement {
    return (
        <div className='App'>
            <h1 className='text-3xl font-bold underline'>Hello world!</h1>
            <Button>Click Me</Button>
        </div>
    );
}

export default App;
