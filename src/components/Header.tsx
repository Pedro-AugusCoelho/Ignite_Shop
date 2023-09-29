import { CycleInfoAmount, HeaderContainer, IconCartContainer } from "@/styles/pages/header";
import { Handbag } from "phosphor-react";
import { DialogCartShirts } from "./dialogCartShirts";
import * as Dialog from '@radix-ui/react-dialog'
import Image from "next/image";

import LogoImg from '../assets/Logo.svg'
import { useContext } from "react";
import { ShoppingCartContext } from "@/context/shoppingCartContext";

export function Header () {
    const { shirts } = useContext(ShoppingCartContext)
    
    return (
        <HeaderContainer>
          <Image src={LogoImg} alt='ignite-shop' />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <IconCartContainer>
                <Handbag size={24} />
                {shirts.length > 0 && <CycleInfoAmount>{shirts.length}</CycleInfoAmount>}
              </IconCartContainer>
            </Dialog.Trigger>
            <DialogCartShirts />
          </Dialog.Root>
        </HeaderContainer>
    )
}