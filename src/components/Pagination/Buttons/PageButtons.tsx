import { Container } from "@mui/material";
import { JSX, PropsWithChildren } from "react";
import { PageButtonController } from "./controller";


export function PageButtons(props: PropsWithChildren): JSX.Element {
    const { children } = props

    return <Container>
        <PageButtonController>
            {children}
        </PageButtonController>
    </Container>
}