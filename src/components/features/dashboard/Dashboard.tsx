
import { useEffect } from "react";
import { useAppDispatch,useAppSelector } from "../../../store/hooks";
import { loadUser } from "./dashboardSlice";


const DashBoard =()=>{
    const dashboard = useAppSelector((state)=>state.dashboard.value);
    const dispatch = useAppDispatch();

    console.log("Dashboard ", dashboard)

    useEffect(()=>{
        dispatch(loadUser())
    },[])
    return (
        <h1>Dashboard</h1>
    )
}
export default DashBoard;