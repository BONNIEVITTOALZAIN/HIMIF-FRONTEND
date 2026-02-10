
    import { NavLink } from "react-router-dom";
    const CardNavbar = ({items  , closeDropDown}) => {

        console.log(items)
        return(
        <> 
            <div className="absolute top-full mt-2 w-48 bg-white border rounded shadow">
                {items.map((sub) => (
            <NavLink
                key={sub.name}
                to={sub.to}
                className={({ isActive }) =>
                `block px-4 py-2 text-sm ${
                isActive ? "text-red-700 font-semibold" : "text-gray-600"
                } hover:bg-gray-100`
            }
            onClick={() => closeDropDown}
            >
            {sub.name}
            </NavLink>
            ))}
        </div>
        </>
    )}
    export default CardNavbar