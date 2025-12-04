import { cardFooterStyle } from "./card.style"

export const CardFooter:React.FC<React.ComponentProps<'div'>> = ({className,...props}) => {
    return <div data-slot="card-footer" className={cardFooterStyle({className})} {...props}/>

}