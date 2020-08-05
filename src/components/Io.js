ReactDOM.render(
    React.createElement(function TestComponent() {
        return (
            <div id="io" className="ui">
                <h3></h3>
                <p>
                    <span>Storage</span>
                    <select id="backend"></select>
                </p>

                <div id="file">
                    <p className="desc">Local files are suitable for loading/saving files from other mindmapping applications.</p>
                    <p data-for="save">
                        <span>Format</span>
                        <select className="format"></select>
                    </p>
                    <p data-for="save load">
                        <button className="go"></button>
                        <button className="cancel">Cancel</button>
                    </p>
                </div>

                <div id="image">
                    <p className="desc">Export your design as a PNG image.</p>
                    <p data-for="save">
                        <button className="go"></button>
                        <button className="cancel">Cancel</button>
                    </p>
                </div>

                <div id="local">
                    <p className="desc">Your browser's localStorage can handle many mind maps and creates a permalink, but this URL cannot be shared.</p>
                    <p data-for="load">
                        <span>Saved maps</span>
                        <select className="list"></select>
                    </p>
                    <p data-for="save load">
                        <button className="go"></button>
                        <button className="cancel">Cancel</button>
                    </p>
                    <p data-for="load">
                        <button className="remove">Delete</button>
                    </p>
                </div>

                <div id="firebase">
                    <p className="desc">Firebase offers real-time synchronization for true multi-user collaboration.</p>
                    <p data-for="save load">
                        <span>Server</span>
                        <input type="text" className="server" />
                    </p>
                    <p data-for="save load">
                        <span>Auth</span>
                        <select className="auth">
                            <option value="">(None)</option>
                            <option value="facebook">Facebook</option>
                            <option value="twitter">Twitter</option>
                            <option value="github">GitHub</option>
                            <option value="google">Google</option>
                        </select>
                    </p>
                    <p data-for="load">
                        <span>Saved maps</span>
                        <select className="list"></select>
                    </p>
                    <p data-for="save load">
                        <button className="go"></button>
                        <button className="cancel">Cancel</button>
                    </p>
                    <p data-for="load">
                        <button className="remove">Delete</button>
                    </p>
                </div>

                <div id="webdav">
                    <p className="desc">Use this to access a generic DAV-like REST API.</p>
                    <p data-for="save load">
                        <span>URL</span>
                        <input type="text" className="url" />
                    </p>
                    <p data-for="save load">
                        <button className="go"></button>
                        <button className="cancel">Cancel</button>
                    </p>
                </div>

                <div id="gdrive">
                    <p className="desc">
                        Maps stored in Google Drive have a permalink URL and can be shared with other users, if you allow this by setting proper permissions
                        (inside Google Drive itself).
                    </p>
                    <p data-for="save">
                        <span>Format</span>
                        <select className="format"></select>
                    </p>
                    <p data-for="save load">
                        <button className="go"></button>
                        <button className="cancel">Cancel</button>
                    </p>
                </div>
            </div>
        );
    }),
    document.querySelector("#io-c")
);
