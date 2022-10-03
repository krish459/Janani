import React from "react";
import './CSS/CategoriesCard.css';
import {NavLink} from 'react-router-dom'

const Categories =(props)=>{


    return(

        <div className="CategoryDevider">
           

                <div className="Categories-main">
                
                <h3 className="Categories-heading"> Categories </h3>


            <div className="ListOfCourses">
                  <NavLink to='/home/all' activeClassName="active-category" >All Courses</NavLink>
                  <NavLink to='/home/Technical' activeClassName="active-category">Technical </NavLink>
                  <NavLink to='/home/Stitching' activeClassName="active-category" >Stitching </NavLink>
                  <NavLink to='/home/Cooking' activeClassName="active-category">Cooking </NavLink>
                  <NavLink to='/home/Photography' activeClassName="active-category">Photography</NavLink>
                  <NavLink to='/home/Management' activeClassName="active-category">Management </NavLink>
                  <NavLink to='/home/Finance' activeClassName="active-category">Finance</NavLink>
                   <NavLink to='/home/Schooling' activeClassName="active-category">Schooling</NavLink>
                  <NavLink to='/home/preferences' className="recommended" 
                  activeClassName="active-category">Recommended!</NavLink>
                
            </div>

       

                </div>

                <div className="Course-Devider">

                </div>

                <div className='CategoriesSlider'>
                 <NavLink to='/home/all' activeClassName="Sactive-category" >All Courses</NavLink>
                  <NavLink to='/home/Technical' activeClassName="Sactive-category">Technical </NavLink>
                  <NavLink to='/home/Stitching' activeClassName="Sactive-category" >Stitching </NavLink>
                  <NavLink to='/home/Cooking' activeClassName="Sactive-category">Cooking </NavLink>
                  <NavLink to='/home/Photography' activeClassName="Sactive-category">Photography</NavLink>
                  <NavLink to='/home/Management' activeClassName="Sactive-category">Management </NavLink>
                  <NavLink to='/home/Finance' activeClassName="Sactive-category">Finance</NavLink>
                   <NavLink to='/home/Schooling' activeClassName="Sactive-category">Schooling</NavLink>
                  <NavLink to='/home/preferences' className="recommended" 
                  activeClassName="active-category">Recommended!</NavLink>
            </div>


        </div>


     


    );

}

export default Categories;