import React, { useEffect, useState } from "react";
import InNavbar from "./InNavbar";
import Bottom1 from "./Bottom";
import InNavbar2 from "./InNavbar2";

function Applicationlist() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getAllTodoAction();
  }, []);

  const getAllTodoAction = async () => {
    try {
      const url = `http://localhost:9091/leaves`;
      const res = await fetch(url);
      const list = await res.json();
      setTodoList([...list]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodoAction = async (item) => {
    try {
      const url = "http://localhost:9091/remove-leave";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      };

      let res = await fetch(url, options);

      if (res.status === 500) {
        let errorMessage = await res.text();
        throw new Error(errorMessage);
      }

      alert("success");
      getAllTodoAction();
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  //

  return (
    <>
      <InNavbar2 />
      <div
        className="img-fluid"
        style={{
          backgroundImage: `url("https://www.cdac.in/img/int-banner2.jpg")`,
        }}
      >
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6">
            <h1>LeaveFormList List</h1>
          </div>
        </div>

        {todoList.map((item) => (
          <div className="row justify-content-center" key={item._id}>
            <div className="col-sm-12 col-md-6">
              <div className="alert alert-secondary mb-1">
                <div className="fs-3 text-capitalize">From: {item.task}</div>
                <div>Description: {item.description}</div>
                <div>Nature Of Leave: {item.numpref}</div>
                <div>Start Date: {item.startDate}</div>
                <div>End Date: {item.endDate}</div>
                <div>Status: {item.status}</div>
                <button
                  className="btn btn-primary"
                  onClick={() => deleteTodoAction(item)}
                >
                  Review
                </button>
                {item.status === "Pending" && (
                  <button className="btn btn-success ms-2">Accept</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Bottom1 />
    </>
  );
}

export default Applicationlist;
