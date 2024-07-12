import { ComponentProps, ReactNode } from "react"
import { tv } from "tailwind-variants"

const buttonVariants = tv({
    base: ' rounded-lg py-2 px-5 font-medium flex items-center gap-2',

    variants: {
        variant: {
            primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
            secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
        }
    },

    defaultVariants: {
        variant: 'primary'
    }
})

interface ButtonProps extends ComponentProps<'button'> {
    children: ReactNode,
    varients: "primary" | "secondary"
}

export function Button({children, varients, ...props}: ButtonProps) {
    return (
        <button {...props} className={buttonVariants({ variant: varients })}>
            {children}
        </button>
    )
}