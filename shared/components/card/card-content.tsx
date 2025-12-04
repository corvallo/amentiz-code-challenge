import { cardContentStyle } from "./card.style"

export const CardContent:React.FC<React.ComponentProps<'div'>> = ({className,...props}) => {
    return <div data-slot="card-content" className={cardContentStyle({className})} {...props}/>
}