import { styled } from "..";


export const HomeContainer = styled("main", {
    display: "flex",
    maxWidth: "calc(100vw - ((100vw  - 1180px) / 2))",
    minHeight: 656,
    marginLeft: "auto",
})

export const Product = styled("div", {
    background: "linear-gradient(188deg, #1ea483 0%, #7465d4 100%)",
    borderRadius: 8,
    cursor: "pointer",

    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    overflow: "hidden",

    img: {
        objectFit: "cover"
    },

    footer: {
        position: "absolute",
        bottom: "0.25rem",
        left: "0.25rem",
        right: "0.25rem",
        padding: "2rem",

        borderRadius: 6,

        transform: "translateY(110%)",
        opacity: 0,
        transition: "all .2s ease-in-out",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        backgroundColor: "rgba(0,0,0,0.6)",
    },

    '&:hover': {
        footer: {
            transform: "translateY(0%)",
            opacity: 1,
        }
    }
})

export const IconCartContainer = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "$white",
    background: "$green500",
    borderRadius: 8,
    width: 56,
    height: 56,
})

export const InfoContainer = styled("div",{
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "0.25rem",

    strong: {
        fontSize: "$lg",
        color: "$gray100"
    },

    span: {
        fontSize: "2xl",
        fontWeight: "bold",
        color: "$green300"
    }
})