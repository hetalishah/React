import logo from '../logo.svg';
import './header.css';

export default function Header() {
    return (
        <header className="header">
            <nav className="navBar">
                <span className="title">
                    <img className="logo" src={logo} alt=""/>
                    <h3>ReactFacts</h3>
                </span>
                <span>
                    <h5 className="projectInfo">React Course - Project 1</h5> 
                </span>     
            </nav>
        </header>
    )
}