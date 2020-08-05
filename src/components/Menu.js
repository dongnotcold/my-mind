ReactDOM.render(
    React.createElement(function TestComponent() {
        return (
            <div id="menu">
                <button data-command="InsertChild"></button>
                <button data-command="InsertSibling"></button>
                <button data-command="Delete"></button>
                <span></span>
                <button data-command="Edit"></button>
                <button data-command="Value"></button>
                <span></span>
                <button data-command="Undo"></button>
                <button data-command="Redo"></button>
                <button data-command="Center"></button>
            </div>
        );
    }),
    document.querySelector("#menu-c")
);
