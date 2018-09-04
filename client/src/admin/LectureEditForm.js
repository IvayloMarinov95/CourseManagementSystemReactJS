import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { getSingleLecture, editLecture } from '../actions/lectureActions';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class LectureEditForm extends React.Component{
    state = {
        name: '',
    }

    componentWillMount(id){
        const lid = this.props.location.pathname.split("/")[3];
        const lname = this.props.location.pathname.split("/")[4];
        this.setState({ id: lid, name: lname });
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const lecture = {
            name: this.state.name
        }
        this.props.editLecture(this.state.id, lecture)
        this.props.history.push('/admin/lectures');
    }

    render(){
        return(
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label for="lecture">Lecture name</Label>
                    <Input type="text" name="name" id="lecture" style={{width:'350px'}} onChange={this.onChange} value={this.state.name} />
                </FormGroup>
                <Button type="submit" className="btn">Save Lecture</Button>
            </Form>
        )
    }
}


LectureEditForm.propTypes = {
    getSingleLecture: PropTypes.func.isRequired,
    lecture: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    lecture:state.lecture
});

export default connect(mapStateToProps, { getSingleLecture, editLecture })(withRouter(LectureEditForm));