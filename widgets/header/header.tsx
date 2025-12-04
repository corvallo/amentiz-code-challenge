import { ChessKnight } from "lucide-react"
import { headetStyle } from "./header.style"

export const Header:React.FC = () => {
    return <header className={headetStyle()}>   
        <div className="flex gap-4">
            <ChessKnight className="w-8 h-8"/>
            <h1>Chess GM Wiki</h1>
        </div>
        <div>Test</div>
    </header>
}