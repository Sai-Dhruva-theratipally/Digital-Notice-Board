import React from 'react';
import axios from 'axios';

export default class StaffDashBoard extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            title:'',
            description:'',
            branch:'',
            announcer:'',
            notices:[]
        };
    }

    addNotice=(event)=>{
        console.log("Notice add");
        const token=localStorage.getItem('token');
        event.preventDefault();
        axios.post('http://localhost:2000/notices/add',{
            title:this.state.title,
            description:this.state.description,
            branch:this.state.branch,
            announcer:this.state.announcer,
        },{
                headers:{'Authorization':`Bearer ${token}`}
            }
        )
        .then(()=>this.getNotices())
        .catch(()=>console.log("Sorry"));
    };

    getNotices=async()=>{
        const token=localStorage.getItem('token');
        let response=await axios.get("http://localhost:2000/notices",{
            headers:{'Authorization':`Bearer ${token}`}
        });
        this.setState({notices:response.data});
        console.log("Staff notices");
    }

    componentDidMount=()=>{
        this.getNotices();
    }

    render(){
        let notices=this.state.notices;
        // {console.log(notices);}
        return(
            <>
                <h1 style={{margin:"20px"}}>Welcome {this.props.id.toUpperCase()}</h1>
                {/* <form>
                    <label style={{marginLeft:'3vw',marginBottom:'1vw'}}>Title</label><br/>
                    <input style={{marginLeft:'3vw',marginBottom:'1vw',width:'500px'}} onChange={(e)=>this.setState({title:e.target.value})} value={this.state.title}/><br/>
                    <label style={{marginLeft:'3vw',marginBottom:'1vw'}}>Description</label><br/>
                    <input style={{marginLeft:'3vw',marginBottom:'1vw',width:'500px'}} onChange={(e)=>this.setState({desc:e.target.value})} value={this.state.desc}/><br/>
                    <label style={{marginLeft:'3vw',marginBottom:'1vw'}}>Branch</label><br/>
                    <input style={{marginLeft:'3vw',marginBottom:'1vw',width:'500px'}} onChange={(e)=>this.setState({branch:e.target.value})} value={this.state.branch}/><br/>
                    <label style={{marginLeft:'3vw',marginBottom:'1vw'}}>Announcer</label><br/>
                    <input style={{marginLeft:'3vw',marginBottom:'1vw',width:'500px'}} onChange={(e)=>this.setState({announcer:e.target.value})} value={this.state.announcer}/><br/>
                    <button style={{marginLeft:'3vw',marginBottom:'1vw',width:'500px'}} onClick={(e)=>this.addNotice}>Submit</button>
                </form> */}
                <form style={{marginLeft:'50px',marginRight:'50px', marginBottom:'10px'}}>
                    <h3>Enter data to add notice:</h3>
                    <input style={{border:'black solid 1px',margin:'10px',padding:'3px', width:'20%'}} onChange={(e)=>this.setState({title:e.target.value})} placeholder='Enter title of notice'/>
                    <input style={{border:'black solid 1px',margin:'10px',padding:'3px', width:'20%'}} onChange={(e)=>this.setState({description:e.target.value})} placeholder='Enter description of notice'/>
                    <input style={{border:'black solid 1px',margin:'10px',padding:'3px', width:'20%'}} onChange={(e)=>this.setState({branch:e.target.value})} placeholder='Enter branches'/>
                    <input style={{border:'black solid 1px',margin:'10px',padding:'3px', width:'20%'}} onChange={(e)=>this.setState({announcer:e.target.value})} placeholder='Enter title of announcer'/>
                    <button onClick={this.addNotice}>Submit</button>
                </form>
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