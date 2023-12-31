import { NavLink,Outlet } from "react-router-dom"

export default function HelpLayout() {
    return (
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur vero quos exercitationem laborum incidunt excepturi veritatis maiores reprehenderit, velit obcaecati iusto placeat esse quis ad tempora maxime voluptas vitae minus?</p>
            <nav>
                <NavLink to="faq">View the FAQs</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>
            <Outlet/>
        </div>
    )
}