import { styled } from "..";

export const ProductContainer = styled("main", {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "stretch",
    gap: '4rem',

    maxWidth: 1180,
    margin: "0 auto",
})

export const ImageContainer = styled('div', {
    width: "100%",
    maxWidth: 576,
    height: "calc(656px - 0.5rem)",
    background: "linear-gradient(188deg, #1ea483 0%, #7465d4 100%)",
    borderRadius: 8,
    padding: "0.25rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    img: {
        objectFit: "cover"
    }
})

export const ProductDetails = styled('div', {
    display: "flex",
    flexDirection: "column",

    h1: {
        fontSize: "$2xl",
        color: "$gray300",
    },

    span: {
        marginTop: "1rem",
        display: "block",
        fontSize: "$2xl",
        color: "$gray300",
    },

    p: {
        marginTop: "2.5rem",
        fontSize: "$md", 
        lineHeight: 1.6,
        color: "$gray300",
    },

    footer: {
        width: "100%",
        marginTop: "auto",

        display: "flex",
        flexDirection: "column",
        gap: "1rem",

        button: {
            width: "100%",
            background: "$green500",
            border: 0,
            color: "$white",
            borderRadius: 8,
            padding: '1.25rem',
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "$md",
    
            "&:not(:disabled):hover": {
                background: "$green300",
            },
    
            "&:disabled": {
                opacity: 0.6,
                cursor: 'not-allowed'
            }
        }
    },
})


export const BtnAmountContainer = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "50%",

    div: {
        width: "100%",
        padding: '0.594rem',

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        cursor: "pointer",

        background: "$green500",

        "&:first-child": {
            background: "$gray800",
        },
    },
})

export const BtnAmount = styled("button",{
    width: "100%",
    padding: "0.5rem !important",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",

    background: "$green500",

    "&:first-child":{
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,

        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        "&:hover":{
            background: "$green300",
            transition: "background ease-in-out 0.2s"
        }
    },

    "&:last-child":{
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,

        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,

        "&:hover":{
            background: "$green300",
            transition: "background ease-in-out 0.2s"
        }
    },
})