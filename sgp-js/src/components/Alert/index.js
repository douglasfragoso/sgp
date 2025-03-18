function Alert({ color, text }) {
    return (
        <div className="d-flex justify-content-center">
            <div className="col-md-8 col-12">
                <div className={`alert alert-${color}`}>
                    {text}
                </div>
            </div>
        </div>
    )
}

export default Alert;