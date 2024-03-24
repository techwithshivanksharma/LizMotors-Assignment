import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div class="container-fluid">
                <footer class="py-3 my-4">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item"><Link  to="#" class="nav-link px-2 text-body-secondary">Home</Link></li>
                        <li class="nav-item"><Link  to="#" class="nav-link px-2 text-body-secondary">Features</Link></li>
                        <li class="nav-item"><Link  to="#" class="nav-link px-2 text-body-secondary">Pricing</Link></li>
                        <li class="nav-item"><Link  to="#" class="nav-link px-2 text-body-secondary">FAQs</Link></li>
                        <li class="nav-item"><Link  to="#" class="nav-link px-2 text-body-secondary">About</Link></li>
                    </ul>
                    <p class="text-center text-body-secondary">© 2024 Company, Inc</p>
                </footer>
            </div>
        </>
    )
}

export default Footer
