import menu from "../../menu.svg"
import home from "../../home.gif"
import twitter from "../../twitter.svg"
import github from "../../github.svg"
import linkedin from "../../linkedin.svg"
import './navbar.css'


let icons = [
    {
        className: "Twitter",
        href: "",
        logo: twitter,
        alt: "Link to my Twitter"
    },
    {
        className: "Github",
        href: "",
        logo: github,
        alt: "Link to my Github"
    },
    {
        className: "LinkedIn",
        href: "",
        logo: linkedin,
        alt: "Link to my LinkedIn"
    }
]

function Navbar() {
    return (
        <div className="Navbar">
            <section className="Toggle-Section">
                <a className="Sidebar-Toggle" href="/">
                    <img className={"Image"} src={menu} alt={"Display menu"} width={32} height={32}/>
                </a>
            </section>
            <section className="Home-Section">
                <a className="Home-Icon" href="/">
                    <img className="Image" src={home} height={64} width={64}/>
                </a>
            </section>
            <section className="Socials-Section">
                {icons.map(function (object, i) {
                    return <a className={object.className} href={object.href}>
                        <img className={"Image"} src={object.logo} alt={object.alt} width={32} height={32}/>
                    </a>
                })}
            </section>
        </div>
    )
}

export default Navbar