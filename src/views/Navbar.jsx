function Navbar() {
    const handleMouseMove = (e) => {
        const item = e.currentTarget;
        const rect = item.getBoundingClientRect();

        item.style.setProperty(
            "--x",
            `${e.clientX - rect.left}px`
        );
        item.style.setProperty(
            "--y",
            `${e.clientY - rect.top}px`
        );
    };


    return (
        <nav className="navbar">
            <div className="logo">
                <h1>&lt;/&gt; </h1>
                <h2>Sachinthaka Ravimal</h2>
            </div>
            <ul>
                <li onMouseMove={handleMouseMove}>Home</li>
                <li onMouseMove={handleMouseMove}>About</li>
                <li onMouseMove={handleMouseMove}>Projects</li>
                <li onMouseMove={handleMouseMove}>Contacts</li>
            </ul>
        </nav>
    );
}

export default Navbar;
