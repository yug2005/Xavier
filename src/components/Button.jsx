const Button = ({text, buttonStyle}) => {

    return (
        <button className={buttonStyle}>{text}</button>
    )
}

Button.defaultProps = {
    text: '',
    buttonStyle: 'button'
}

export default Button