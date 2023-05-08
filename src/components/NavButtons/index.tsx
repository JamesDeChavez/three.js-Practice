import './styles.css'

interface Props {
    RENDERS: string[]
    setRender: React.Dispatch<React.SetStateAction<string>>
}

const NavButtons: React.FC<Props> = ({ RENDERS, setRender }) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, n: number) => {
        e.preventDefault()
        setRender(RENDERS[n])
    }

    const className = 'NavButtons'
    return (
        <div className={className}>
            <button 
                className={`${className}_button`}
                onClick={(e) => handleClick(e, 6)}
            >
                Pendelum
            </button>
            <button 
                className={`${className}_button`}
                onClick={(e) => handleClick(e, 5)}
            >
                All Models
            </button>
            <button 
                className={`${className}_button`}
                onClick={(e) => handleClick(e, 4)}
            >
                Birds
            </button>
            <button 
                className={`${className}_button`}
                onClick={(e) => handleClick(e, 3)}
            >
                Train
            </button>
            <button 
                className={`${className}_button`}
                onClick={(e) => handleClick(e, 2)}
            >
                Multiple Objects
            </button>
            <button 
                className={`${className}_button`}
                onClick={(e) => handleClick(e, 1)}
            >
                First Texture
            </button>
            <button 
                className={`${className}_button`}
                onClick={(e) => handleClick(e, 0)}
            >
                Hello World
            </button>
        </div>
    )
}

export default NavButtons