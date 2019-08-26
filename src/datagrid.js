import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import Profile from './profile';
import './datagrid.css';
import Register from './registration';
import Upload from './Upload';
import Signup from './Signup';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const columns = [
    { key: 'id', name: 'ID' },
    { key: 'Date', name: 'Date' },
    { key: 'Name', name: 'Name' },
    { key: 'phone', name: 'Phone' },
    { key: 'Role', name: 'Role' },
    { key: 'Status', name: 'Status' },
    { key: 'resume', name: 'resume' },
    { key: 'details', name: 'Details' }
]

let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(today.getFullYear());
const rowdata = [{ id: 0, Date: today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()+"::"+time, Name: 'Mark', phone: 123456, Role: 'java', Visa: 'opt', Status: 'on bench', resume: '', details: '' },
{ id: 1, Date: today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()+"::"+time, Name: 'will', phone: 223456, Role: '.net', Visa: 'opt', Status: 'on project', resume: '', details: '' },
{ id: 2, Date: today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()+"::"+time, Name: 'kane', phone: 333456, Role: 'oracle', Visa: 'h1', Status: 'home project', resume: '', details: '' },
{ id: 3, Date: today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()+"::"+time, Name: 'peter', phone: 443456, Role: 'devops', Visa: 'h4', Status: 'on peoject', resume: '', details: '' },
{ id: 4, Date: today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()+"::"+time, Name: 'kin', phone: 123556, Role: 'db', Visa: 'gc', Status: 'consultancy', resume: '', details: '' },
{ id: 5, Date: today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()+"::"+time, Name: 'tin', phone: 123116, Role: 'hadoop', Visa: 'l1', Status: 'TC consultant', resume: '', details: '' },
{ id: 6, Date: today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()+"::"+time, Name: 'duffy', phone: 125556, Role: 'testing', Visa: 'stem opt', Status: '', resume: '', details: '' },
{ id: 7, Date: today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()+"::"+time, Name: 'sam', phone: 123499, Role: 'angular', Visa: 'opt', Status: 'on bench', resume: '', details: '' },
{ id: 8, Date: today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()+"::"+time, Name: 'ram', phone: 123475, Role: 'react', Visa: 'h1', Status: 'home project', resume: '', details: '' },
{ id: 9, Date: today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()+"::"+time, Name: 'krish', phone: 125556, Role: 'java', Visa: 'gc', Status: 'on bench', resume: '', details: '' }]


class Customgrid extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            rows: rowdata,
            addprofileclicked: false,
            selectedIndexes:[],
            logout: false
        }
    }

    validate(e) {
        const userRole = document.getElementById("id").value;
        const username = document.getElementById("user_name").value
        
        var result = this.state.rows.filter(function (v, i) {
            return ((v["Name"] === username) || v.Role === userRole);
        })


        this.setState({
            rows: result
        })
    }
    clearsearch(e) {
        this.setState({
            rows: rowdata
        })
    }
    addprofile(e) {

        this.setState({
            addprofileclicked: true
        })
    }
    updateprofile(e) {

        this.setState({
            updateprofileclicked: true
        })
    }
    handelprofile = () => {
        this.setState({
            addprofileclicked: false, 
            updateprofileclicked: false

        })
    }
    
    handelregister = () => {
        this.setState({
            updateprofileclicked: false,
            addprofileclicked: false, 

        })
    }
    
    addresumes(e){
        this.setState({
            addresumesclicked:true
        })
    }

    logout() {
        this.setState({
            logout: true
        })
    }
    handelresume = () => {
        this.setState({
            addresumesclicked:false
        })
        
}    
    onRowsSelected = rows => {
        this.setState({
        selectedIndexes: this.state.selectedIndexes.concat(
        rows.map(r => r.rowIdx)
        )
    });
    };

    onRowsDeselected = rows => {
    let rowIndexes = rows.map(r => r.rowIdx);
    this.setState({
        selectedIndexes: this.state.selectedIndexes.filter(
        i => rowIndexes.indexOf(i) === -1
        )
    });
    };
    newResume() {

    }
    wip() {

    }
    oldResume(){
        
    }
    render() {
        if (this.state.addprofileclicked) {
            return (
                <Profile handelprofile={this.handelprofile} />
            )
        }
        if (this.state.updateprofileclicked) {
            return (
                <Register handelregister={this.handelregister}/>
            )
        }
        if (this.state.addresumesclicked) {
            return (
                <Upload handelresume={this.handelresume}/>
            )
        }
        if(this.state.logout) {
            return(
                <Signup />
            )
        }


        return (
            <div>
                {/* <p> Role:</p>
                <input type="text" name="User Id" id="id" placeholder="Enter Role" />
                <br /> */}
                <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="full-width contained primary button group"
        >
            <Button onClick={(e) => this.newResume(e)}>New Resume</Button>
            <Button onClick={(e) => this.wip(e)}>Work in progress</Button>
            <Button onClick={(e) => this.oldResume(e)}>Old Resume</Button>
        </ButtonGroup>
                <br/>
                <TextField
                    id="id"
                    label="Enter Role"
                    margin="normal"
                    name="User Id" 
                />
                <TextField
                    id="user_name"
                    label="Enter Name"
                    margin="normal"
                    name="User name"
                />

                
        <Grid item xs={12} md={6}>
        <Grid container spacing={1} direction="column" alignItems="center">
        <Grid item>
        <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="full-width contained primary button group"
        >
            <Button type="submit" variant="contained" color="primary" onClick={(e) => this.validate(e)}>Search</Button>
            <Button type="submit" variant="contained" color="primary" onClick={(e) => this.clearsearch(e)}>Clear Search</Button>  
            <Button onClick={(e) => this.addprofile(e)}>Add profile</Button>
            <Button onClick={(e) => this.updateprofile(e)}>Update profile</Button>
            <Button onClick={(e) => this.addresumes(e)}>Add Resume</Button>
            <Button onClick={(e) => this.logout(e)}>Logout</Button>
            </ButtonGroup>
          </Grid>
          </Grid>
          </Grid>
                {/* <p>User Name:</p>
                <input type="text" name="User name" id="user_name" placeholder="Enter Name" />
                <br /> */}
                {/* <button type="button" onClick={(e) => this.validate(e)}>Search </button> */}
                {/* <button type="button" onClick={(e) => this.clearsearch(e)}>Clear Search </button> */}
                {/* <button type="button" onClick={(e) => this.addprofile(e)}>Add profile </button>
                <button type="button" onClick={(e) => this.updateprofile(e)}>Update profile </button>
                <button type="button" onClick={(e) => this.addresumes(e)}>Add Resume</button>
                <div style={{position: 'relative', left: '60%'}}>
                    <button type="button" onClick={(e) => this.logout(e)}>Logout</button>
                </div> */}
                <div className="grid">
                    <ReactDataGrid
                        columns={columns}
                        rowGetter={i => this.state.rows[i]}
                        rowsCount={this.state.rows.length}
                        minHeight={500}
                        minWidth={900}
                        rowSelection={{
                            showCheckbox: true,
                            enableShiftSelect: true,
                            onRowsSelected: this.onRowsSelected,
                            onRowsDeselected: this.onRowsDeselected,
                            selectBy: {
                            indexes: this.state.selectedIndexes
                            }
                        }
                    }
                    />

                </div>nav
            </div>

        );
    }
}

export default Customgrid;