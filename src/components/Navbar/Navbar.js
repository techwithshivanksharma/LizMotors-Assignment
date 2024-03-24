import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const phaseDetails = document.getElementById("phase-details");
    const phases = document.querySelectorAll(".phase");

    phases.forEach(phase => {
        phase.addEventListener("mouseover", function () {
            const phaseName = this.getAttribute("id").replace("phase-", "");
            phaseDetails.innerHTML = getPhaseDetails(phaseName);
        });

        phase.addEventListener("mouseout", function () {
            phaseDetails.innerHTML = "";
        });
    });



    const getPhaseDetails = (phaseName) => {
        switch (phaseName) {
            case "research":
                return "<p>Phase: Market Research</p><p>Duration: 3 months</p><p>Objective: Identify market needs and preferences.</p>";
            case "planning":
                return "<p>Phase: Planning</p><p>Duration: 2 months</p><p>Objective: Develop project plan and resource allocation.</p>";
            case "designing":
                return "<p>Phase: Design</p><p>Duration: 6 months</p><p>Objective: Create conceptual and technical design of the vehicle.</p>";
            case "manufacturing":
                return "<p>Phase: Manufacturing</p><p>Duration: 12 months</p><p>Objective: Build the vehicle according to design specifications.</p>";
            case "marketing":
                return "<p>Phase: Sales</p><p>Duration: Ongoing</p><p>Objective: Market and sell the manufactured vehicles.</p>";
            case "external":
                return "<p>Phase: External Research</p><p>Duration: Ongoing</p><p>Objective: This is about External research and sources.</p>";
            case "internal":
                return "<p>Phase: Internal Research</p><p>Duration: Ongoing</p><p>Objective: This is about Internal research and sources.</p>";
            case "B2C":
                return "<p>Phase: B2C </p><p>Duration:4 months</p><p>Objective: Business To Consumer relationship.</p>";
            case "B2B":
                return "<p>Phase: B2B </p><p>Duration: 2 months</p><p>Objective: Business To Business relationship</p>";
            case "prd":
                return "<p>Phase:PRD </p><p>Duration: 1 month</p><p>Objective: This is about Performance, Review and Development</p>";
            case "specs":
                return "<p>Phase:Specs </p><p>Duration: 2 month</p><p>Objective: This is about Specs planning.</p>";
            case "hardware":
                return "<p>Phase: Hardware </p><p>Duration: Ongoing</p><p>Objective: This is about hardware designing.</p>";
            case "software":
                return "<p>Phase: Software </p><p>Duration: Ongoing</p><p>Objective: This is about software designing.</p>";
            case "material":
                return "<p>Phase: Material </p><p>Duration: Ongoing</p><p>Objective: This is about material.</p>";
            case "production":
                return "<p>Phase: Production </p><p>Duration: Ongoing</p><p>Objective: This is about production.</p>";
            case "online":
                return "<p>Phase: Online Sales</p><p>Duration: Ongoing</p><p>Objective: This is about online sales.</p>";
            case "dealership":
                return "<p>Phase: Dealership</p><p>Duration: Ongoing</p><p>Objective: This is about dealership.</p>";
            case "on-research":
                return "<p>Phase: Online Research</p><p>Duration: Ongoing</p><p>Objective: This is about online research.</p>";
            case "interview":
                return "<p>Phase: Interview</p><p>Duration: Ongoing</p><p>Objective: This is about interviews.</p>";
            case "publicdata":
                return "<p>Phase: Public Data</p><p>Duration: Ongoing</p><p>Objective: This is about collecting public data.</p>";
            case "health":
                return "<p>Phase: Health</p><p>Duration: Ongoing</p><p>Objective: This is about health.</p>";
            default:
                return "";
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle phase" id='phase-research' data-bs-toggle="dropdown" to="/">Research</Link>
                                <ul className='dropdown-menu'>
                                    <li><Link to="/external" className='dropdown-item phase' id="internal">Internal</Link></li>
                                    <li><Link to="/internal" className='dropdown-item phase' id="external">External &raquo;</Link>
                                        <ul className='dropdown-menu submenu'>
                                            <li><Link to="/b2c" className='dropdown-item phase' id="phase-B2C">B2C</Link></li>
                                            <li><Link to="/b2b" className='dropdown-item phase' id="phase-B2B">B2B &raquo;</Link>
                                                <ul className='dropdown-menu submenu'>
                                                    <li><Link to="/online-research" className='dropdown-item phase' id='on-research'>Online </Link></li>
                                                    <li><Link to="/interview" className='dropdown-item phase' id='interview'>Interview</Link></li>
                                                    <li><Link to="/publicData" className='dropdown-item phase' id='publicdata'>Public Data</Link></li>
                                                    <li><Link to="/health" className='dropdown-item phase' id='health'>Health</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle phase" id='phase-planning' data-bs-toggle="dropdown" to="/">Planning</Link>
                                <ul className='dropdown-menu'>
                                    <li><Link to="/prd" className='dropdown-item phase' id="prd">PRD</Link></li>
                                    <li><Link to="/specs" className='dropdown-item phase' id="specs">Specs</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link  dropdown-toggle phase" id='phase-designing' data-bs-toggle="dropdown" to="/">Designing</Link>
                                <ul className='dropdown-menu'>
                                    <li><Link to="/hardware" className='dropdown-item phase' id="hardware">Hardware</Link></li>
                                    <li><Link to="/software" className='dropdown-item phase' id="software">Software</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle phase" id='phase-manufacturing' data-bs-toggle="dropdown" to="/">Manufacturing</Link>
                                <ul className='dropdown-menu'>
                                    <li><Link to="/Material" className='dropdown-item phase' id="material">Material</Link></li>
                                    <li><Link to="/Production" className='dropdown-item phase' id="production">Production</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle phase" id="phase-marketing" data-bs-toggle="dropdown" to="/">Sales/Marketing</Link>
                                <ul className='dropdown-menu'>
                                    <li><Link to="/online" className='dropdown-item phase' id="online">Online</Link></li>
                                    <li><Link to="/dealership" className='dropdown-item phase' id="dealership">Dealership </Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="details" id="phase-details"></div>
        </>
    )
}


export default Navbar
