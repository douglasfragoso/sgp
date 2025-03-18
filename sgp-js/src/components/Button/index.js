function Button({color = "primary", size = "md", onClickBtn, text}) {
    return (
        <button className={`btn btn-${color} btn-${size}`} onClick={onClickBtn}>{text}</button>
    );

}

export default Button;