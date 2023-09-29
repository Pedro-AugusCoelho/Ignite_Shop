import * as Dialog from '@radix-ui/react-dialog'
import * as ScrollArea from '@radix-ui/react-scroll-area';
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

    footer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        marginTop: "2rem"
    }
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

export const TitleCart = styled(Dialog.Title, {
    fontSize: "$md",
    fontWeight: "bold",
    color: "$gray100",

    marginTop: "4.5rem"
})

export const ScrollAreaRoot = styled(ScrollArea.Root, {
    width: "100%",
    height: "50vh",
    maxHeight: "50vh",
    overflow: "hidden",
    marginTop: "2rem",
})

export const Viewport = styled(ScrollArea.Viewport,{
    width: "100%",
    height: "100%",
    borderRadius: "inherit",
})

export const Scrollbar = styled(ScrollArea.Scrollbar, {
    display: 'flex',
    userSelect: 'none',
    touchAction: 'none',
    padding: "0.25rem",
    background: "$gray900",
    '&[data-orientation="vertical"]': { width: 8 },
})

export const ScrollAreaThumb = styled(ScrollArea.Thumb, {
  flex: 1,
  background: "$gray300",
  borderRadius: 4,

  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
})

export const CardContainer = styled("div",{
    display: "flex",
    flexDirection: "column",
    
    width: "100%",
    height: "100%",
    gap: "1.5rem",
})

export const Card = styled("div",{
    display: "flex",
    alignItems: "flex-start",
    gap: "1.25rem",
})

export const ImageContainer = styled('div', {
    width: "100%",
    maxWidth: 100,
    height: 90,
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

export const InfoProduct = styled('div', {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    span:{
        color: "$gray300",
        fontSize: "$md",
        marginBottom: "0.25rem"
    },

    strong:{
        color: "$gray100",
        fontSize: "$md",
        marginBottom: "0.5rem"
    },

    button: {
        color: "$green500",
        fontWeight: "bold",
        fontSize: "$sm",
        outline: 0,
        border: 0,
        background: "transparent",
        cursor: "pointer",


        "&:hover": {
            color: "$green300"
        }
    }
})

export const InfoPriceContainer = styled("div", {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    alignItems: "flex-end",

    p:{
        fontSize: "$sm",
        color: "$gray100"
    },

    span:{
        textAlign: "end",
        "&:first-child": {
            fontSize: "$md",
            color: "$gray300",
        },

        "&:last-child": {
            fontSize: "$xl",
            fontWeight: "bold",
            color: "$gray100",
        },
    },

    strong: {
        fontSize: "$md",
        color: "$gray100",
    }
})


export const BtnBuyProducts = styled("button",{
    width: "100%",
    textAlign: "center",
    background: "$green500",
    padding: "1.25rem 0",
    borderRadius: 8,
    border: 0,
    marginTop: "3rem",

    fontSize: "$md",
    fontWeight: "bold",
    color: "$white",

    "&:hover":{
        background: "$green300"
    }
})
