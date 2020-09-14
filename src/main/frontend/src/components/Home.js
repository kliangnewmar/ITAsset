import React, { Component } from 'react'
import axios from "axios";
import {Button, Container, Form,FormGroup,  Input, Label } from "reactstrap";
import './Home.css'
export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            hasdata:false,
            id:'',
            asset_class_name:'',
            brand:'',
            condition:'',
            domain:'',
            location:'',
            model:'',
            name:'',
            assignto:'',
            notes:'',
            serial:'',
            description:'',
            company_dept:'',
        };
    
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handletxtChange=this.handletxtChange.bind(this);
    }

    handletxtChange(event){
        
        let id = event.target.value;
        this.setState({id:id});
    }

    handleSubmit(event){
        event.preventDefault();
        let {id} = this.state;

        axios.get('http://192.168.2.136:8080/api/asset/'+ id )
        .then(response => {
           
            
            this.setState({
                assignto:response.data.assinged_to,
                brand:response.data.brand,
                condition:response.data.condition,
                domain:response.data.domain,
                location:response.data.location,
                model:response.data.model,
                name:response.data.name,
                notes:response.data.notes,
                serial:response.data.serial,
                description:response.data.description,
                company_dept:response.data.company_dept,
            })

            axios.get('http://192.168.2.136:8080/api/assetclass/'+ response.data.asset_class_id)
            .then(response=>{
                
                this.setState({
                    hasdata:true,
                    asset_class_name:response.data.class_name
                    
                })
            })
            .catch(error=>{
                console.log(error);
            })
        })
        .catch(error=>{
            console.log(error)
        })

        

    }

    render() {
        const title = <h1>Newmar IT Assets</h1>;
        let {hasdata,brand,serial,model,name,condition,notes,company_dept,description,location,domain,asset_class_name,assignto} = this.state;
        return (
            <div>
                <Container>
                    {title}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="name">Asset ID: </Label>
                            <Input type="text" name="id" id="id" onChange={this.handletxtChange} />
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" type="submit">Search</Button>
                        </FormGroup>
                    </Form> 
                </Container>
                
                {hasdata && 
                
                <div className="Result">
                    <div>
                        Class: {asset_class_name}
                    </div>
                    <div>
                        Name: {name}
                    </div>
                    <div>
                        User: {assignto}
                    </div>
                    <div>
                        Serial: {serial}
                    </div>
                    <div>
                        Model: {model}
                    </div>
                    <div>
                        Brand: {brand}
                    </div>
                    <div>
                        Domain: {domain}
                    </div>
                    <div>
                        Department: {company_dept}
                    </div>
                    <div>
                        Location: {location}
                    </div>
                    <div>
                        Description: {description}
                    </div>
                    <div>
                        Condition: {condition}
                    </div>
                    <div>
                        Notes: {notes}
                    </div>


    
                </div>
                
                // <Table>
                //     <thead>
                //         <tr>
                //             <th>Class</th>
                //             <th>Name</th>
                //             <th>Serial</th>
                //             <th>Model</th>
                //             <th>Brand</th>
                //             <th>Domain</th>
                //             <th>Department</th>
                //             <th>Location</th>
                //             <th>Description</th>
                //             <th>Condition</th>
                //             <th>Notes</th>
                //         </tr>
                //     </thead>
                //     <tbody>
                //         <tr>
                //             <td>{asset_class_name}</td>
                //             <td>{name}</td>
                //             <td>{serial}</td>
                //             <td>{model}</td>
                //             <td>{brand}</td>
                //             <td>{domain}</td>
                //             <td>{company_dept}</td>
                //             <td>{location}</td>
                //             <td>{description}</td>
                //             <td>{condition}</td>
                //             <td>{notes}</td>
                //         </tr>
                //     </tbody>
                // </Table>
                
                
                
                } 

            </div>
        )
    }
}
