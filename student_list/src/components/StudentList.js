import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


class StudentList extends React.Component{
     constructor(props) {
        super(props); //khai báo state mới cần, //trường hợp này không cần constructor
    }
    render (){   
         return (
        <>
        <table className={"table table-light"}> 
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {this.props.list.map((e,i)=>(
                <tr key = {e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.address}</td>
                </tr>
                 ))}
            </tbody>
        </table>
        </>
         )
    }
}
export default StudentList;