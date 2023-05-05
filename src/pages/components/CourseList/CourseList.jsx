import React, { useEffect } from "react";

import styles from "./CourseList.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserCourseList } from "../../../reduxtoolkit/userReducer";
import BasicDemo from "../../../components/BasicDemo";

function CourseList() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserCourseList(id));
  }, [id]);
  const user = useSelector((state) => state.user.userCourseList);
  useEffect(() => {
    console.log(user);
  }, [user]);
  let baseUrl = "https://nafes.app/cv_task/res/course/imgs";
  return (
    <>
      <div className="grid">
        <div className="col-4">
          <BasicDemo />
        </div>
        <div className="col-8">
          <div className="grid">
            {user &&
              user.map((item, index) => (
                <div key={index} className="col-4 text-center ">
                  <img
                    clas
                    src={`${baseUrl}/${item.icon}`}
                    className=" w-3 "
                    alt=""
                  />
                  <h4 className=" ">{item.name}</h4>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseList;
