import React from "react";
import "./TableComponent.css";
import TableScrollbar from 'react-table-scrollbar';

//Useful resource for tables from json: https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components
//loading the json data 
import{nobelData} from "./nobel_data"



//Adding homepage header component
const HomePageHeader = () => {
    return (
      <header className="header">
        <h2>Noble Price Data</h2>
      </header>
    );
  };

//Container Table Component
export const TableComponent = () => {
  return (
    <>
      <HomePageHeader/> 
      {/* Used to display page header */}
      <div className="tableComponent">Nobel Prize Winners Data Table
       
        {/* This code is used to iterate over our data that we have imported in
        our nobel_data.js file and uses map to create record from the json
        file, which takes a callback function as argument. 
        This function is then called for every record inside the nobelData array.
        Each time callback executes, it returns and renders a <div> displaying data for every company in a comma separated manner. */}

        {nobelData.map((data, key) => {
            return (
                <div key={key}>
                {/* {data.year +
                    " , " +
                    data.discipline +
                    " ," +
                    data.winner +
                    ", " +
                    data.desc} */} 
                {/* Above code was used to check if data is extracted and displayed */}
                {/* The below code is now used to fill in the table */}
                    
                    <Nobel 
                        key={key}
                        year={data.year}
                        discipline={data.discipline}
                        winner={data.winner}
                        desc={data.desc}
                />

                </div>
            );
            })}
      </div>
    </>
  );
};

//Nobel Price data component
//This component accepts props and returns an HTML table 
const Nobel = ({ year, discipline, winner, desc }) => {
  if (!year) return <div />;
  return (
    <table>
      <tbody>
        <tr >
          <td>
            <h5>{year}</h5>
          </td>
          <td>
            <h5>{discipline}</h5>
          </td>
          <td>
            <h4>{winner}</h4>
          </td>
          <td>
            <p>{desc}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
