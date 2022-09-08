import React,{useState,useEffect} from "react";
import axios from 'axios'
const url = "http://jsonplaceholder.typicode.com"
function Datafetch(){
    const [user,setUser] = useState([])
    useEffect(()=>{
        axios.get(`${url}/users`)
        .then(res=>{
            console.log(res.data)
            setUser(res.data)
        })
        .catch(err=>err.message)

    },[])
   
    return(
        <table>
            <thead>
                <tr>
                    <th>EMAIL</th>
                    <th>CITY</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((item,key)=>{
                        return(
                            <tr key={key}>
                                <td>{item.email}</td>
                                <td>{item.address.city}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>   
    )
}
export default Datafetch