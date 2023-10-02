import { styled } from "..";

export const HeaderContainer = styled('header', {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    padding: '2rem 0',
    width: "100%",
    maxWidth: 1180,
    margin: "0 auto",
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

    position: "relative",

    "&:not(:disabled):hover": {
        color: "$gray100", 
    },

    "&:disabled":{
        opacity:"0.5"
    }
})

export const CycleInfoAmount = styled("div", {
    background: "$green500",
    
    color: "$gray100",
    fontSize: "$xs",
    fontWeight: "bold",
    
    position: "absolute",
    top: -10,
    right: -10,

    width: 20,
    height: 20,
    borderRadius: 10,

    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})