import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class ContactForm extends React.Component {
    state = {
      name: '',
      email: '',
      message: '',
      formInfo: []
    };

    handleChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      });
    };

    handleSubmit = event => {
        this.clearForm();
      event.preventDefault();

      const {name, email, message} = this.state;
      let {formInfo} = this.state;
      formInfo = [];
      if (name === '') {
          formInfo.push('The name must be filled!');
      }
      if (!email.includes('@') || email.length <=0) {
          formInfo.push('The email must be filled and must contain @!');
      }
      if (message === '') {
          formInfo.push('The message field must be filled!');
      }
      if (formInfo.length === 0) {
          formInfo.push('Thank you for your message!');
      }
      this.setState({formInfo});

    };

    clearForm = () => {
        document.getElementById("myForm").reset();
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    };

    render() {
        return (
            <>
                <form id={'myForm'} onSubmit={this.handleSubmit}>
                    <input type={'text'} name={'name'} placeholder={'Your Name'} onChange={this.handleChange} />
                    <input type={'email'} name={'email'} placeholder={'Your Email Address'} onChange={this.handleChange} />
                    <textarea name={'message'} placeholder={'Enter your message...'} onChange={this.handleChange} />
                    <ul>
                        {
                            this.state.formInfo.map((elem, index)=> {
                                return <li key={index}>{elem}</li>
                            })
                        }
                    </ul>
                    <input type={'submit'}/>
                </form>

            </>
        )
    }
}




class Contact extends React.Component {
    render() {
        return (
        <>
            <Header />
            <h2> Contact us if you have any suggestions! </h2>
            <ContactForm />
            <Footer />
        </>
    )
    }
}

export default Contact;