import React from 'react';
import SearchBox from "./SearchBox"
import FilterRate from "./FilterRate"
import {Link} from "react-router-dom"

const Navbar = (props) => {
    return ( 
        <div className="navbar">
            <Link to="/"><h1 className="title">MovieTime</h1></Link>
<SearchBox {...props}/>
<FilterRate {...props}/>
</div>
     );
}
 
export default Navbar;