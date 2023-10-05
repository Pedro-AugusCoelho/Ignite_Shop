import { styled } from "..";

export const SuccessContainer = styled("main", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    width: 1200,

    h1: {
        fontSize: "$2xl",
        color: "$gray100"
    },

    p: {
        marginTop: '2rem',
        fontSize: "$xl", 
        color: "$gray300",
        maxWidth: 560,
        textAlign: "center",
        lineHeight: 1.4,
    },

    a: {
        display: "block",
        fontSize: "$lg",
        fontWeight: "bold",
        color: "$green500",
        marginTop: '5rem',
        textDecoration: "none",

        '&:hover': {
            color: "$green300",
        }
    }
})

export const ContainerArrayImage = styled('div', {
    width: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    marginTop: '4rem',
})

export const ImageContainer = styled('div', {
    width: "100%",
    maxWidth: 130,
    height: 130,
    background: "linear-gradient(188deg, #1ea483 0%, #7465d4 100%)",
    boxShadow: `-8px 5px 30px black`,
    borderRadius: 65, 
    padding: '0.25rem',

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    marginLeft: '-3rem',
    
    img: {
        objectFit: "cover"
    }
})