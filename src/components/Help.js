ReactDOM.render(
    React.createElement(function TestComponent() {
        return (
            <div id="help" className="ui">
                <h3>Help</h3>
                <p>
                    <span>Navigation</span>
                </p>
                <table className="navigation"></table>
                <p>
                    <span>Manipulation</span>
                </p>
                <table className="manipulation"></table>
                <p>
                    <span>Editing</span>
                </p>
                <table className="editing"></table>
                <p>
                    <span>Other</span>
                </p>
                <table className="other"></table>
            </div>
        );
    }),
    document.querySelector("#help-c")
);
