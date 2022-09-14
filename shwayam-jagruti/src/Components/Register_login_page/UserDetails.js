import React from "react";
import swal from "sweetalert";
import Sidebar from "./Sidebar";
import Footer from './Footer'
class UserDetails extends React.Component {
  state = {
    names: []
  };
  // componentDidMount() {
  //   this.getData();
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         names: json
  //       });
  //     });
  // }
  // getData() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         names: json
  //       });
  //     });
  // }
  delItem(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this  file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        fetch("https://jsonplaceholder.typicode.com/users/" + id, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(json => {
            this.getData();
          });
      }
    });
  }
  render() {
    return (
      <div>
        <div className="container-fluid dashboardBackground">
          <div className="row">
            <div className="col-md-3 profileDashboard">
              <Sidebar />
            </div>
            <div className="col-md-9 quotes">
              
              <table className="table table-hover table-dark">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.names.map(
                    (item, index) =>
                      index < 8 && (
                        <tr  key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-warning"
                              onClick={() => {
                                this.delItem(item.id);
                              }}
                            >
                              DELETE
                            </button>
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
          <Footer />
      </div>
    );
  }
}
export default UserDetails;
