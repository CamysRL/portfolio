import { useState, useEffect } from "react";
import "./style.css";

export default function Header() {
    return (
        <header className="header-container">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Sobre Mim</a></li>
                <li><a href="/">Conhecimentos</a></li>
                <li><a href="/">Projetos</a></li>
                <li><a href="/">Contato</a></li>
            </ul>
        </header>
    )
}