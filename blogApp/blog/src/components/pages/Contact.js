import React, { Component } from 'react';
import Field from '../common/Field';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const fields = {
    sections: [
        [
            { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name *' },
            { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email *' },
            { name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number *' }

        ],
        [
            { name: 'message', elementName: 'input', type: 'text', placeholder: 'Type your message *' }
        ]
    ]
}

class Contact extends Component {


    render() {

        return (
            <div>
                <section id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Contact Us</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form name="sentMessage" noValidate="novalidate" onSubmit={this.props.handleSubmit}>
                                    <div className="row">
                                        {fields.sections.map((section, sectionIndex) => {
                                            console.log("Rendering section", sectionIndex, "with", section)
                                            return (
                                                <div className="col-md-6" key={sectionIndex}>
                                                    {section.map((field, i) => {
                                                        return <Field
                                                            {...field}
                                                            key={i}
                                                            value={this.props.values[field.name]}
                                                            name={field.name}
                                                            onChange={this.props.handleChange}
                                                            onBlur={this.props.handleBlur}
                                                            touched={(this.props.touched[field.name])}
                                                            errors={this.props.errors[field.name]}
                                                        />
                                                    })}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="clearfix">
                                        <div className="col-lg-12 text-center">
                                            <div id="success"></div>
                                            <button
                                                className="btn btn-primary btn-xl text-uppercase"
                                                id="sendMessageButton"
                                                type="submit"
                                            >Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, "Name too short").required("You must give a name."),
        email: Yup.string().email("You must give a email.").required("You must give a email."),
        phone: Yup.string().min(10, "Please give a 10 digit phone number.")
            .max(15, "Your phone number is too long.").required("You must give a phone number."),
        message: Yup.string().min(50, "You must provide a message with at least 50 characters.")
        .required("Message is required.")
    }),
    handleSubmit: (values, { setSubmitting }) => {
        alert("You've submitted the form", JSON.stringify(values));
    }
})(Contact);