import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import Welcome from './Welcome';
import {NavLink} from 'react-router-dom';
import css from '../styles/form.module.css';
import pic1 from '../images/pic1.png';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      jobTitle: '',
      skills: [],
      interests: [],
      needs: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('this.state --', this.state);
    let {userName, email, jobTitle, skills, interests, needs} = this.state;
    let data = {userName, email, jobTitle, skills, interests, needs};
    let headers = {'Content-Type': 'application/json'};
    axios.post('/user', data, {headers: headers})
      .then(res => {
        console.log('axios.post: data--', data);
      })
      .catch(err => {
        console.log('fail to post:', err);
      })
    e.target.reset();
  }

  render() {
    const underline = {textDecoration: "none"};
    const textColor = {color: "white"};

    return (
      <div>
        <Navbar />
        <div className={css.formContainer}>

          <div className={css.item11}>
            <p className={css.firstLine}>
              You need just 30 seconds to
              <span> just tell us about who you are a human:</span>
            </p>
            <p className={css.secondLine}>
              Don’t worry, you can edit your Profile at anytime.
            </p>
          </div>

          <div className={css.item12}>
            <form onSubmit={this.handleSubmit}>
              <label>Name:</label>
              <input
                type="text"
                name="userName"
                placeholder="Jane Doe"
                autoComplete="off"
                onChange={this.handleInput}
              />

              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="janedoe@gmail.com"
                autoComplete="off"
                onChange={this.handleInput}
              />

              <label>Job Title:</label>
              <input
                type="text"
                name="jobTitle"
                placeholder="Jr.Software Developer"
                autoComplete="off"
                onChange={this.handleInput}
              />

              <label>Professional skills I want to learn:</label>
              <input
                type="text"
                name="skills"
                placeholder="Skills"
                autoComplete="off"
                onChange={this.handleInput}
              />

              <label>Interests & Hobbies:</label>
              <input
                type="text"
                name="interests"
                placeholder="Interests & Hobbies:"
                autoComplete="off"
                onChange={this.handleInput}
              />

              <label>What I need in my personal life:</label>
              <textarea
                type="text"
                name="needs"
                placeholder="During this Covid-19 pandemic, it has been difficult to look after my children while I’m job hunting.  I would love to connect with working professionals and how they balance work and family."
                autoComplete="off"
                onChange={this.handleInput}
              />

              <div className={css.btnWrap}>
                <button className={css.connectBtn}>
                  <NavLink to="./Welcome" style={{ ...underline, ...textColor }}>
                    Ready for connection!
                  </NavLink>
                </button>
              </div>
            </form>
          </div>

          <div className={css.item13}>
            <div className={css.imageCrop}>
              <img src={pic1} className={css.profilePic} />
            </div>

            <div className={css.editProfile}>
              <p>Edit/Change your profile</p>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default UserForm;
