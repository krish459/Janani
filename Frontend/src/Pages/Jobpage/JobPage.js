import React, { Component, useEffect, useState  } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../../store/actions/actions";
import Categories from "./Categories";
import HomeBanner from "./HomeBanner";
import CourseCards from "./CourseCards";
import CourseTitle from "./CourseTitle";
import { Redirect, NavLink } from "react-router-dom";
import Loader from "react-loader-spinner";
import Layout from "../../components/Layout/Layout";
// import Recommendation from './Recommendation';
import "./CSS/Jobpage.css";
import Url from "../../ApiServices/BackendUrl";
import JobCards from "./JobCards";
import { useLocation } from "react-router-dom";

import { getAllJobs } from "../../store/actions/jobActions";
import {
  company_list,
} from "./company_list";
class Jobpage extends Component {

  IsMounted=false;
  
  state = {
      CourseLink: this.props.match.params.CourseName,
      Courses: this.props.Courses,
      loading: true,
      img: "",
      progress:0,
      redirect:null,
  }


  componentDidMount(){
      this.IsMounted=true;

      const fd =new FormData();
      const form = {};
      form['userId']=localStorage.getItem('userId');
      fd.append("userId",localStorage.getItem('userId'))

     
       if(this.state.CourseLink === "preferences" && this.IsMounted)
          this.props.fetchPreferenceCourses(this.state.CourseLink,form);


      // fetch all courses if redux store is empty
      if( this.IsMounted && !this.props.Courses.length)
          this.props.fetchCourses()
   }

   componentWillUnmount(){
       this.IsMounted=false;
   }

  render(){ 
      const { steps } = this.state;
      
      if(this.state.redirect){
          return <Redirect to={this.state.redirect}/>
      }
      let BannerImage ;
      
      let data = (<Loader
          type="Puff"
          color="#8c5cd4"
          height={50}
          width={50}
          className="loader"

           //3 secs
  
       />);

      if(this.props.Courses.length>0){

          // by default, it displays all the courses
          let CourseArray= this.props.Courses;
          console.log(CourseArray);

          if(this.state.CourseLink !== "all" && this.state.CourseLink!=="preferences"){
              CourseArray = this.props.Courses.filter(course=>
                  course.category === this.state.CourseLink
              );
          }

          // this is the preference link
          else if(this.state.CourseLink==="preferences")
              CourseArray =this.props.PreferenceCourses; 


          BannerImage =   this.state.CourseLink 
          

          };
        const packageSelector = (part) => {
            return{
                name : "Recreational ",
                package: company_list
            }
        
        };
       
      return(
        <Layout>
          <div className="container">
          
              <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                              <NavLink  to='/home'>
                                  Home
                              </NavLink></li>

                          <li className="breadcrumb-item">
                              <NavLink to={`/Home/${this.state.CourseLink}`}activeStyle={{textDecoration:'underline'}}>{this.state.CourseLink}
                              </NavLink>
                          </li>

                      </ol>
              
              </nav>

              {/* <HomeBanner img={BannerImage}/> */}

              <div className="mt-3 Course-Content"> 
                  {/* <Categories/> */}
                  <div className="Course-Content-col">
                 
                              <CourseTitle welcomeMessage ={"Welcome"}/>

                              <div className="Course-Content-wrap">
                              {company_list?.map((item, index) => (
                                  <JobCards    
                                  key={item._id}
                                  title={item.title}
                                  salary={item.salary}
                                  description={item.description}
                                  teacher={item.name}
                                  img={item.image}
                                  skill={item.skills}
                                 
                                  />
          ))}
                              </div>

                              {/* <Recommendation/> */}

                  </div>

              </div>



          </div>
          </Layout>
      );
  }

}

const mapStateToProps = (state) => {
  return {
       Courses: state.filter.Courses,
       PreferenceCourses: state.filter.PreferenceCourse,
  //   selectedCourse: state.filter.selectedCourse,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
       fetchCourses:()=>dispatch(actionCreators.fetchAsyncCourses()),
       fetchPreferenceCourses:(CourseLink,form)=>dispatch(actionCreators.fetchAsyncPreferenceCourse(CourseLink,form))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Jobpage);
