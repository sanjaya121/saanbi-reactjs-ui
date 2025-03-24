
import { memo, useEffect, useState } from "react";
import { useAppDispatch,useAppSelector } from "../../../store/hooks";
import { loadUser } from "./dashboardSlice";


const DashBoard =()=>{
    const dashboard = useAppSelector((state)=>state.dashboard.value);
    const dispatch = useAppDispatch();
    const [text,setText]=useState("HEllo")
    console.log("Dashboard ", dashboard)

    useEffect(()=>{
        // dispatch(loadUser())

        fetch("https://jsonfakery.com/products").then((res)=>res.json()).then(data =>console.log("DATA ",data));
    },[])
    return (
			<div>
				<h1>Dashboard</h1>
			
			</div>
		);
}
export default DashBoard;

