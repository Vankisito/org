import "./footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://twitter.com/home">
                <img src="/img/twitter.png" alt="Twitter"></img>
            </a>
            <a href="https://www.facebook.com/">
                <img src="/img/facebook.png" alt="Face"></img>
            </a>
            <a href="https://www.instagram.com/">
                <img src="/img/instagram.png" alt="Insta"></img>
            </a>
        </div>
        <img src="/img/Logo.png" alt="Logo"></img>
        <strong>Desarrollado por Santiago</strong>
    </footer>
}

export default Footer