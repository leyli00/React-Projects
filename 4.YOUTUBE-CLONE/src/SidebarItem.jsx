import { Link } from "react-router-dom";
import './SidebarItem.css'

function SidebarItem({ selected, Icon, title, path }) {
    return (
        <Link to={path} className={` sidebarItem ${selected && 'selected'}`} >
            <Icon className="sidebarItemIcon" />
            <h2 className="sidebarItemTitle" > {title} </h2>
        </Link>
    )
}

export default SidebarItem;