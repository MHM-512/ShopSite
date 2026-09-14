
import { Button, Typography } from "@mui/material"
import { useState } from "react"



export default function Home() {
    const [isvisible, setvisible] = useState(false)
    return (
        <>
            <Typography variant="h3"> page Home </Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis minima ullam odio debitis perferendis iusto dolore
                voluptatum nesciunt, omnis laboriosam porro magnam, consequuntur
                et veritatis sit aperiam culpa dignissimos quisquam!
            </Typography>
            <Button variant="outlined" onClick={() => setvisible((prev) => !prev)}>
                {isvisible ? 'hide' : 'show'}
            </Button>


            <div>
                {isvisible && <h1>This is my hidden text</h1>}
            </div>

        </>
    )
}