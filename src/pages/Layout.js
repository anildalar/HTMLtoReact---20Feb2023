import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
       
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div classname="container px-4 px-lg-5">
            <a className="navbar-brand" href="index.html">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i classname="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul classname="navbar-nav ms-auto py-4 py-lg-0">
                <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="index.html">Home</a></li>
                <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="about.html">About</a></li>
                <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="post.html">Sample Post</a></li>
                <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="contact.html">Contact</a></li>
                </ul>
            </div>
            </div>
        </nav>
        
        <header className="masthead" style={{backgroundImage: 'url("assets/img/home-bg.jpg")'}}>
            <div classname="container position-relative px-4 px-lg-5">
            <div classname="row gx-4 gx-lg-5 justify-content-center">
                <div classname="col-md-10 col-lg-8 col-xl-7">
                <div classname="site-heading">
                    <h1>Clean Blog</h1>
                    <span classname="subheading">A Blog Theme by Start Bootstrap</span>
                </div>
                </div>
            </div>
            </div>
        </header>
        
        <Outlet />
        
        <footer classname="border-top">
            <div classname="container px-4 px-lg-5">
            <div classname="row gx-4 gx-lg-5 justify-content-center">
                <div classname="col-md-10 col-lg-8 col-xl-7">
                <ul classname="list-inline text-center">
                    <li classname="list-inline-item">
                    <a href="#!">
                        <span classname="fa-stack fa-lg">
                        <i classname="fas fa-circle fa-stack-2x" />
                        <i classname="fab fa-twitter fa-stack-1x fa-inverse" />
                        </span>
                    </a>
                    </li>
                    <li classname="list-inline-item">
                    <a href="#!">
                        <span classname="fa-stack fa-lg">
                        <i classname="fas fa-circle fa-stack-2x" />
                        <i classname="fab fa-facebook-f fa-stack-1x fa-inverse" />
                        </span>
                    </a>
                    </li>
                    <li classname="list-inline-item">
                    <a href="#!">
                        <span classname="fa-stack fa-lg">
                        <i classname="fas fa-circle fa-stack-2x" />
                        <i classname="fab fa-github fa-stack-1x fa-inverse" />
                        </span>
                    </a>
                    </li>
                </ul>
                <div classname="small text-center text-muted fst-italic">Copyright © Your Website 2022</div>
                </div>
            </div>
            </div>
        </footer>
    </>
  )
}
