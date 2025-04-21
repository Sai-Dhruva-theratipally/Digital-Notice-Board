import axios from 'axios';
import React from 'react';

export default class StudentDashboard extends React.Component{

    state={
        notices:[]
    };

    async componentDidMount(){
        const id=this.props.id;
        const token=localStorage.getItem('token');
        const response= await axios.get(`http://localhost:2000/notices`,{
            headers: { Authorization: `Bearer ${token}` }
        });
        this.setState({ notices: response.data });
        console.log(this.state.notices);
    }
    render(){
        let id=this.props.id;
        let notices=this.state.notices;
        return(
            <>
                <h1 style={{margin:"3%"}}>Welcome {this.props.id.toUpperCase()}</h1>
                <h3 style={{margin:"3%"}}> Notices</h3>
                {/* {notices.map((notice) => (
                    <li>
                        <h3>{notice.title}</h3>
                        <p>{notice.description}</p>
                        <p><strong>Announcer:</strong> {notice.announcer}</p>
                    </li>
                ))} */}
                {notices.map((notice)=>(
                    <>
                        {/* console.log("Hii"); */}
                        {/* <h1>{notice.title}</h1>
                        <h3>{notice.description}</h3>
                        <h5>{notice.announcer}</h5> */}
                        <div style={{border:'black solid 3px',marginLeft:'50px',marginRight:'50px', marginBottom:'10px', padding:'10px'}}>
                            <h3>{notice.title}</h3>
                            <hr style={{width:'30vw', borderWidth:'0.3vw', borderColor:'black'}}/>
                            <p style={{fontSize:'1.3vw'}}>{notice.description}</p>
                            <h5>{notice.announcer}</h5>
                            <h6>For {notice.branch}</h6>
                        </div>
                    </>
                ))
                }
            </>
        )
    }
}