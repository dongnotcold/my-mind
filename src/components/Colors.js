ReactDOM.render(
    React.createElement(function TestComponent() {
        return (
            <p>
                <span>Color</span>
                <span id="color">
                    <a data-color="" title="Inherit" href="#"></a>
                    <a data-color="#000" title="Black" href="#"></a>
                    <a data-color="#e33" title="Red" href="#"></a>
                    <a data-color="#3e3" title="Green" href="#"></a>
                    <a data-color="#33e" title="Blue" href="#"></a>
                    <a data-color="#dd3" title="Yellow" href="#"></a>
                    <a data-color="#3dd" title="Cyan" href="#"></a>
                    <a data-color="#d3d" title="Magenta" href="#"></a>
                    <a data-color="#fa3" title="Orange" href="#"></a>
                </span>
            </p>
        );
    }),
    document.querySelector("#colors-c")
);
