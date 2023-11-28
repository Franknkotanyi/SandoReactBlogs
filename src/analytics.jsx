import React, { useState,useEffect,PureComponent } from "react";
import Areanalytics from "./areanalytics";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
  AreaChart,
} from "recharts";
import Pienalytics from "./piechart";


const  demoUrl = "https://codesandbox.io/s/simple-composed-chart-h9zif";

function Analytics ({closeMyAnalytics}) {


const [posts, setPosts] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    await fetch(
      "https://zigirumugabe-pacifique.onrender.com/api/klab/blog/ViewAllBlogs"
    )
      .then((response) => response.json())
      .then((res) => {
        setPosts(res.data);
      });
  };
  fetchData();
}, []);
// let comment_view = post.comment;

// console.log("comment_view: ", comment_view);

const data = [
  {
    name: "Blogs",
    posts: posts.length
  },
  {
    name: "Comments",
    messages: 3,
  },
  {
    name: "views",
    watch: 18,
  },
];




    
    return (
      <div className="analytics_model_background">
        <button className="cancel" onClick={() => closeMyAnalytics(false)}>
          X
        </button>
        <div className="analytics_model_container">
          <div className="charts" style={{ width: "510px", height: "510px" }}>
            <center>
              {" "}
              <h2>Bar Chart</h2>{" "}
            </center>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Bar dataKey="posts" barSize={70} fill="#413ea0" />
                <Bar dataKey="messages" barSize={70} fill="#35b3a3" />
                <Bar dataKey="watch" barSize={70} fill="black" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="charts">
            <center>
              {" "}
              <h2>Pie Chart</h2>{" "}
            </center>
            <Pienalytics/>
          </div>

          <div className="charts">
            <center>
              {" "}
              <h2>Area Chart</h2> 
              <Areanalytics />
            </center>
          </div>

        </div>
      </div>
    );
  }

export default Analytics;