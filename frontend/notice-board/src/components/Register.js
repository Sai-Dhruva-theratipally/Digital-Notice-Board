// import React from 'react';
// import axios from 'axios';

// export default class Register extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             id:'',
//             name:'',
//             mail:'',
//             password:'',
//             role:''
//         };
//     }

//     onSubmit=(async()=>{
//         const{id,name,mail,password,role}=this.state;
//         const endPoint=role==='student'?'/student/add'
//     });

//     render(){
//         return(
//             <>
//                 <h1 style={{ textAlign: "center", fontWeight: "bolder", fontFamily: 'Helvetica', fontSize: '6vw', color: '#424242' }}>
//                     Register
//                 </h1><br /><br />
//                 <div className="d-flex justify-content-center align-items-center">
//                     <form onSubmit={this.handleSubmit} style={{ width: '600px' }}>
//                         <div className="mb-3 row align-items-center">
//                             <div>
//                                 <input
//                                     placeholder='Enter your ID'
//                                     type="text"
//                                     className="form-control form-control-lg border-dark"
//                                     onChange={(e) => this.setState({ id: e.target.value })}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <div className="mb-3 row align-items-center">
//                             <div>
//                                 <input
//                                     placeholder='Enter your name'
//                                     type="text"
//                                     className="form-control form-control-lg border-dark"
//                                     onChange={(e) => this.setState({ id: e.target.value })}
//                                     required
//                                 />
//                             </div>
//                         </div>
                        
//                         <div className="mb-3 row align-items-center">
//                             <div>
//                                 <input
//                                     placeholder='Enter your password'
//                                     type="password"
//                                     className="form-control form-control-lg border-dark"
//                                     onChange={(e) => this.setState({ password: e.target.value })}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <div className="mb-3 row align-items-center">
//                             <div>
//                                 <input
//                                     placeholder='Enter your mail ID'
//                                     type="text"
//                                     className="form-control form-control-lg border-dark"
//                                     onChange={(e) => this.setState({ id: e.target.value })}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <div className="mb-4">
//                             <label className="form-label fs-4">Role</label>
//                             <div className="form-check">
//                                 <input
//                                     className="form-check-input border-dark"
//                                     type="radio"
//                                     name="role"
//                                     value="student"
//                                     onChange={(e) => this.setState({ role: e.target.value })}
//                                     required
//                                 />
//                                 <label className="form-check-label fs-4">Student</label>
//                             </div>
//                             <div className="form-check">
//                                 <input
//                                     className="form-check-input border-dark"
//                                     type="radio"
//                                     name="role"
//                                     value="staff"
//                                     onChange={(e) => this.setState({ role: e.target.value })}
//                                     required
//                                 />
//                                 <label className="form-check-label fs-4">Staff</label>
//                             </div>
//                         </div>
//                         <div className="text-center">
//                             <button type="submit" className="btn btn-primary btn-lg">Login</button>
//                         </div>
//                     </form>
//                 </div>
//             </>
//         )
//     }
// }