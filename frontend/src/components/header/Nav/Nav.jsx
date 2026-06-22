
import { NavLink } from "react-router-dom";


function Nav(){
    const navSections=[
      { name: "Overview", path: "/"  },
      { name: "Insights", path: "/insights"  },
      { name: "Watchlist", path: "/watchlist"  },
      { name: "Profile", path: "/profile" },
    ]
return (
    <div>
        <nav className="navbar">
            <div className="logo"><p>logo</p></div>
            <div className="nav-sections">
                
                {navSections.map((item) => (
                    <NavLink key={item.name} to={item.path}>
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </nav>
    
    </div>
    
) 

}

export default Nav;