import { useSelector } from "react-redux";
import { NavLink } from "react-router";

function Table() {
  const studentData = useSelector((state) => state.studentData);
  // console.log(studentData);


  return (
    <>
      <h2>All Records</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Class</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.city}</td>
                <td>{student.degree}</td>
                <td>{student.phone}</td>
                <td>

                  <NavLink to={`/edite/${student.id}`}>edite</NavLink>

                  <a>Delete</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;

