import React, {Component } from 'react';
import './CSS/Preference.css';
import axios from '../../ApiServices/axiosUrl';
import CourseTitle from './CourseTitle';
import { Redirect } from 'react-router-dom';
import Alert from '../Auth/Forms/alert'
import Layout from '../../components/Layout/Layout';

class Preference extends Component {

    state = {
        interest:[],
        userId:localStorage.getItem('userId'),

        Courses: {
            "Technical":{
                touched:false,
            },
            "Stitching":{
                touched:false,
            },
             "Cooking":{
                touched:false,
            },
             "Finance":{
                touched:false,
            },
             "Photography":{
                touched:false,
            },
             "Schooling":{
                touched:false,
            },
        },
        redirect:null,
        alert: {
            valid:false,
            msg:"",
            alertType:"",
        },

        alertPressed:false,
        token:localStorage.getItem('user'),
    }



AlertError(alertmsg, alertType) {
    const AlertArray = {...this.state.alert};
    AlertArray.msg = alertmsg;
    AlertArray.valid=true;
    AlertArray.alertType=alertType;
    this.setState({alert:AlertArray});

}



    categoryHandler=(CourseName)=>{


            if(this.state.Courses[CourseName].touched)

            {   const UpdatedCourses = {...this.state.Courses};
                UpdatedCourses[CourseName].touched=false;

                this.setState({Courses:UpdatedCourses})
                const index =this.state.interest.indexOf(CourseName);
                if(index >-1) this.state.interest.splice(index,1);
            }

            else
            {const UpdatedCourses = {...this.state.Courses};
            UpdatedCourses[CourseName].touched=true;
            


            this.setState({Courses:UpdatedCourses})
            this.state.interest.push(CourseName);}
        
        
        this.setState(prevState => 
            ({interest:prevState.interest, Courses:prevState.Courses}));

        console.log(this.state.interest)

    }

    sumbitHandler =()=> {
      
       // const fd =new FormData();
        const formData = {"interest":this.state.interest, 'userId':this.state.userId};
        this.setState({alertPressed:true})
        setTimeout( ()=> this.setState({alertPressed:false}) , 3000);
      
        console.log(formData);

        //fd.append("userId",this.state.userId);
       //fd.append("interest",this.state.interest);

        
        axios.post("/home/interests/",formData, {
            headers: {
                
               Authorization: 'Bearer '+ this.state.token + " " + localStorage.getItem('ref_token')
                
            }
        })
        .then(response => {
            
                console.log("Preference Added");    
                this.AlertError("Preferences Added", "success");
                this.setState({redirect:'/home/preferences'})


        })
        .catch(error => {
            console.log(error.response);
            if(error.response.statusText  === "Internal Server Error"){
                this.setState({redirect:'/login'})
            }
        })


    }


    render(){

        let alertContent = null;


        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
  

            var webdev ,webdesigning,react,ml,photo,nodejs;

            if(this.state.Courses["Technical"].touched){
                webdev = ['touched']
            }
            else{
                webdev=['']
            }

            if(this.state.Courses["Stitching"].touched){
                webdesigning = ['touched']
            }
            else{
                webdesigning=['']
            }
            if(this.state.Courses["Cooking"].touched){
                react= ['touched']
            }
            else{
                react=['']
            }
            if(this.state.Courses["Finance"].touched){
                ml = ['touched']
            }
            else{
                ml=['']
            }
            if(this.state.Courses["Photography"].touched){
               photo= ['touched']
            }
            else{
                photo=['']
            }
            if(this.state.Courses["Schooling"].touched){
                nodejs = ['touched']
            }
            else{
                nodejs=['']
            }

            if(this.state.alert.valid){

                alertContent = ( <Alert value={this.state.alertPressed}         
                                         alertMsg ={this.state.alert.msg} 
                                        alertType={this.state.alert.alertType} /> )
            }
          
        
        return(


        <Layout>
         
            <div className="container">
                     {alertContent}
                <div className="title">
                    
                     <CourseTitle welcomeMessage ={"Choose Your interests,"}/>
                </div>
                <div className="Preference-buttons">

                    <button className={webdev.join(' ')} onClick={()=> this.categoryHandler("Technical")}> Technical</button>
                    <button className={webdesigning.join(' ')} onClick={()=> this.categoryHandler("Stitching")}> Stitching</button>
                    <button className={react.join(' ')} onClick={()=> this.categoryHandler("Cooking")}> Cooking</button>
                    <button className={ml.join(' ')} onClick={()=> this.categoryHandler("Finance")}> Finance</button>
                    <button className={photo.join(' ')} onClick={()=> this.categoryHandler("Photography")}> Photography</button>
                    <button className={nodejs.join(' ')} onClick={()=> this.categoryHandler("Schooling")}> Schooling</button>
                   
                </div>


            <div className="SumbitBtn">
                    <button  onClick={this.sumbitHandler}>SUMBIT</button>
                </div>


            </div>
        </Layout>
            
        );
    }



}

export default Preference;