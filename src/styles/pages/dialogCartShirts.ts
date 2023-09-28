import * as Dialog from '@radix-ui/react-dialog'
import { styled } from "..";

export const Overlay = styled(Dialog.Overlay, {
    position: "fixed",
    inset: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.75)",
})

export const Content = styled(Dialog.Content, {
    minWidth: "32rem",
    minHeight: "100vh",
    padding: "3rem",
    backgroundColor: "$gray800",

    position: 'fixed',
    top: 0,
    right: 0,
})

export const CloseButton = styled(Dialog.Close, {
    position: "absolute",
    background: "transparent",
    border: "0px",
    top: "2rem",
    right: "2rem",
    lineHeight: "0px",
    cursor: "pointer",
    color: "$gray300",
})

export const Title = styled(Dialog.Title, {
    fontSize: "$md",
    fontWeight: "bold",
    color: "$gray100",

    marginTop: "4.5rem"
})


export const CardContainer = styled("div",{
    display: "flex",
    flexDirection: "column",

    width: "100%",
    marginTop: "2rem",
    gap: "1.5rem",
})

export const Card = styled("div",{
    //
})
