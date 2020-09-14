import React, { Component } from 'react'
import {Input} from "reactstrap";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import PaperComponent from "./PaperComponent";
import { Button } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './CycleCountEntry.css';
import { FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

export default class CycleCountEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {   
            isDialogOpen:false,
        }
    }

    dialogSave = () =>{
        this.setState({isDialogOpen:false});
    }

    handleClose = () => {
        this.setState({isDialogOpen:false});
    }

    showDialog = () =>{
        this.setState({isDialogOpen:true});
    }

    render() {
        return (
            <div>
              <Button className="btnshow" onClick={this.showDialog} color="primary">Show Box</Button>
               <Dialog
                    open={this.state.isDialogOpen}
                    onClose={this.handleClose}
                    PaperComponent={PaperComponent}
                    
                    maxWidth="md"
                    disableBackdropClick={true}
                    disableEscapeKeyDown={true}
                >
                    <div className="dialog_title" style={{width: 720}}>
                        
                        <DialogTitle>CYCLE COUNT ENTRY</DialogTitle>
                        
                        <DialogActions>
                            <Button onClick={this.dialogSave} color="primary">Save</Button>
                            <IconButton aria-label="close" onClick={this.handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </DialogActions>
                    </div>
                    <DialogContent dividers style={{width: 720,height:550}}>
                        <div className="testf">
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>TYPE</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Input type="select" name="type">
                                       
                                        <option>Cycle Count</option>
                                </Input>
                                <InputGroup.Prepend className="ml-2">
                                    <InputGroup.Text>PART</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl placeholder="30" />
                                
                                <FormControl className="w-25" id="partreadonly" readOnly="true" placeholder="HARDWARE LOUVRE FRAME" />
                                
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>LENGTH</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl />
                                <InputGroup.Prepend className="ml-2">
                                    <InputGroup.Text>QTY</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl />
                                <FormControl id="partreadonly" readOnly="true" placeholder="READONLY1" />
                                <FormControl id="partreadonly" readOnly="true" placeholder="READONLY2" />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>COLOUR</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Input type="select" name="colour">
                                        <option>-- SELECT --</option>
                                        <option>WH</option>
                                </Input>
                                <InputGroup.Prepend className="ml-2">
                                    <InputGroup.Text>PAINT</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Input type="select" name="paint">
                                        <option>-- SELECT --</option>
                                        <option>BK</option>
                                </Input>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>FROM WHSE</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Input type="select" name="fromwhse">
                                        <option>-- SELECT --</option>
                                        <option>High Rise</option>
                                        <option>Low Rise</option>
                                </Input>
                                <InputGroup.Prepend className="ml-2">
                                    <InputGroup.Text>TO WHSE</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Input type="select" name="toshse">
                                        <option>-- SELECT --</option>
                                        <option>High Rise</option>
                                        <option>Low Rise</option>
                                </Input>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>FROM LOCATION</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl />
                                <InputGroup.Prepend className="ml-2">
                                    <InputGroup.Text>TO LOCATION</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>FROM RACK</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl />
                                <InputGroup.Prepend className="ml-2">
                                    <InputGroup.Text>TO RACK</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>FROM SHELF</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl />
                                <InputGroup.Prepend className="ml-2">
                                    <InputGroup.Text>TO SHELF</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>FROM BUNDLE</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl />
                                <InputGroup.Prepend className="ml-2">
                                    <InputGroup.Text>TO BUNDLE</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>NOTES</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl />
                                
                            </InputGroup>
                        </div>

                        {/* <Form>
                            <FormGroup className="form">
                                <div className="itemFirstPart">
                                    <Label for="type" style={{paddingRight:5}}>Type</Label>
                                    <Input type="select" name="type"  style={{width:150}}>
                                        <option>1</option>
                                        <option>2</option>
                                    </Input>
                                </div>
                                <div className="itemSecondPart">
                                    <Label for="part" style={{paddingRight:5}} >Part </Label>
                                    <Input name="part" style={{width:150}} placeholder="30" />
                                    <Input name="part" style={{width:350}} placeholder="HARDWARE LOUVRE FRAME" />
                                    
                                </div>
                            </FormGroup>
                            <FormGroup className="form">
                                <div className="itemFirstPart">
                                    <Label for="length" style={{paddingRight:5}}>Length</Label>
                                    <Input name="Length"  style={{width:150}} placeholder="1024" />
                                </div>
                                <div className="itemSecondPart">
                                    <Label for="qty" style={{paddingRight:5}}>QTY</Label>
                                    <Input name="qtyname" style={{width:150}} placeholder="30" />
                                    <Input name="qty1" style={{width:150}} placeholder="EA" />
                                    <Input name="qty2" style={{width:200}} placeholder="Current Qty:25" />
                                </div>
                            </FormGroup>
                            <FormGroup className="form">
                                <div className="itemFirstPart">
                                    <Label for="colour" style={{paddingRight:5}}>Colour</Label>
                                    <Input name="colour"  style={{width:300}} type="select">
                                        <option>1</option>
                                        <option>2</option>
                                    </Input>
                                </div>
                                <div className="itemSecondPart">
                                    <Label for="paint" style={{paddingRight:5}} >Paint </Label>
                                    <Input name="paint" style={{width:350}} type="select">
                                        <option>1</option>
                                        <option>2</option>
                                    </Input>
                                </div>
                            </FormGroup>
                            <FormGroup className="form">
                                <div className="itemFirstPart">
                                    <Label for="fromwhse" style={{paddingRight:5}}>FROM WHSE</Label>
                                    <Input name="fromwhse"  style={{width:350}} type="select">
                                        <option>1</option>
                                        <option>2</option>
                                    </Input>
                                </div>
                                <div className="itemSecondPart">
                                    <Label for="towhse" style={{paddingRight:5}} >TO WHSE </Label>
                                    <Input name="towhse" style={{width:350}} type="select">
                                        <option>1</option>
                                        <option>2</option>
                                    </Input>
                                    
                                </div>
                            </FormGroup>
                            <FormGroup className="form">
                                <div className="itemFirstPart">
                                    <Label for="fromloc" style={{paddingRight:5}}>FROM LOCATION</Label>
                                    <Input name="fromloc"  style={{width:300}} />
                                </div>
                                <div className="itemSecondPart">
                                    <Label for="toloc" style={{paddingRight:5}} >TO LOCAION </Label>
                                    <Input name="toloc" style={{width:350}} />
                                    
                                </div>
                            </FormGroup>

                            <FormGroup className="form">
                                <div className="itemFirstPart">
                                    <Label for="fromrack" style={{paddingRight:5}}>FROM RACK</Label>
                                    <Input name="fromrack"  style={{width:300}} />
                                </div>
                                <div className="itemSecondPart">
                                    <Label for="torack" style={{paddingRight:5}} >TO RACK </Label>
                                    <Input name="torack" style={{width:350}} />
                                    
                                </div>
                            </FormGroup>
                            <FormGroup className="form">
                                <div className="itemFirstPart">
                                    <Label for="fromshelf" style={{paddingRight:5}}>FROM SHELF</Label>
                                    <Input name="fromshelf"  style={{width:300}} />
                                </div>
                                <div className="itemSecondPart">
                                    <Label for="toshelf" style={{paddingRight:5}} >TO SHELF </Label>
                                    <Input name="toshelf" style={{width:350}} placeholder="30" />
                                    
                                </div>
                            </FormGroup>
                            <FormGroup className="form">
                                <div className="itemFirstPart">
                                    <Label for="frombundle" style={{paddingRight:5}}>FROM BUNDLE</Label>
                                    <Input name="frombundle"  style={{width:300}}/>
                                </div>
                                <div className="itemSecondPart">
                                    <Label for="tobundle" style={{paddingRight:5}} >TO BUNDLE </Label>
                                    <Input name="tobundle" style={{width:350}} placeholder="30" />
                                    
                                </div>
                            </FormGroup>
                            <FormGroup className="form">
                                <div>
                                    <Label for="notes" style={{paddingRight:5}}>NOTES</Label>
                                </div>
                                <div>
                                    <Input name="notes" style={{width:750}}/>
                                </div>
                            </FormGroup>
                        </Form> */}
                    
                    </DialogContent>
                </Dialog>

            </div>
        )
    }
}
