import Button from "./Button"

const Header = ({title, toggleForm, isVisible}) => {
    return (
        <div className="header">
            <h2 style={headerTitleStyle}>{title}</h2>
            <Button title={isVisible ? "Close" : "Add"} color="green" onClick={toggleForm} />
        </div>
    )
}

Header.defaultProps = {
    title: "This is default header"
}

const headerTitleStyle = {
    color: "red",
    backgroundColor: "black"
}

export default Header
