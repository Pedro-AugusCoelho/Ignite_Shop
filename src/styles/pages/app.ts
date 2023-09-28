import { styled } from "..";


export const Container = styled('div', {
    display: 'flex',
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    minHeight: "100vh",
})

export const Header = styled('header', {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    padding: '2rem 0',
    width: "100%",
    maxWidth: 1180,
    margin: "0 auto"
})

export const IconCartContainer = styled("button", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "$gray300",
    background: "$gray800",
    borderRadius: 8,
    width: 48,
    height: 48,

    cursor: "pointer",
    outline: 0,
    border: 0,
})