

const Button = ({title, color, onClick}) => {
    return (<button style={{backgroundColor: color}} className="btn" onClick={onClick}>
                {title}
            </button>)
}

export default Button
