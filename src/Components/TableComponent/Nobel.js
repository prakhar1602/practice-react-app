import React from 'react';
import './Nobel.css'
import { nobelData } from './nobel_data';

class Nobel extends React.Component {

    constructor(props) {
        super(props)  //inherits properties of react component 
        
        // State is accessible all over the class
        this.state = {
            nobelPrizeData: [
                {
                  "year": 1937,
                  "discipline": "literature",
                  "winner": "Roger Martin du Gard",
                  "desc": "for the artistic power and truth with which he has depicted human conflict as well as some fundamental aspects of contemporary life in his novel-cycle <i>Les Thibault</i>"
                },
                {
                  "year": 1938,
                  "discipline": "physics",
                  "winner": "Enrico Fermi",
                  "desc": "for his demonstrations of the existence of new radioactive elements produced by neutron irradiation, and for his related discovery of nuclear reactions brought about by slow neutrons"
                },
                {
                  "year": 1963,
                  "discipline": "medicine",
                  "winner": "Alan L. Hodgkin",
                  "desc": "for their discoveries concerning the ionic mechanisms involved in excitation and inhibition in the peripheral and central portions of the nerve cell membrane"
                },
                {
                  "year": 1965,
                  "discipline": "medicine",
                  "winner": "Andr&eacute; Lwoff",
                  "desc": "for their discoveries concerning genetic control of enzyme and virus synthesis"
                },
                {
                  "year": 1965,
                  "discipline": "medicine",
                  "winner": "Jacques Monod",
                  "desc": "for their discoveries concerning genetic control of enzyme and virus synthesis"
                },
                {
                  "year": 1989,
                  "discipline": "medicine",
                  "winner": "Harold E. Varmus",
                  "desc": "for their discovery of the cellular origin of retroviral oncogenes"
                },
                {
                  "year": 1990,
                  "discipline": "chemistry",
                  "winner": "Elias James Corey",
                  "desc": "for his development of the theory and methodology of organic synthesis"
                },
                {
                  "year": 1990,
                  "discipline": "economics",
                  "winner": "William F. Sharpe",
                  "desc": "for their pioneering work in the theory of financial economics"
                },
                {
                  "year": 1990,
                  "discipline": "literature",
                  "winner": "Octavio Paz",
                  "desc": "for impassioned writing with wide horizons, characterized by sensuous intelligence and humanistic integrity"
                },
                {
                  "year": 1990,
                  "discipline": "medicine",
                  "winner": "Joseph E. Murray",
                  "desc": "for their discoveries concerning organ and cell transplantation in the treatment of human disease"
                },
                {
                  "year": 1990,
                  "discipline": "medicine",
                  "winner": "E. Donnall Thomas",
                  "desc": "for their discoveries concerning organ and cell transplantation in the treatment of human disease"
                },
                {
                  "year": 1990,
                  "discipline": "peace",
                  "winner": "Mikhail Gorbachev",
                  "desc": "for his leading role in the peace process which today characterizes important parts of the international community"
                },
                {
                  "year": 1990,
                  "discipline": "physics",
                  "winner": "Jerome I. Friedman",
                  "desc": "for their pioneering investigations concerning deep inelastic scattering of electrons on protons and bound neutrons, which have been of essential importance for the development of the quark model in particle physics"
                },
                {
                  "year": 1994,
                  "discipline": "economics",
                  "winner": "John F. Nash Jr.",
                  "desc": "for their pioneering analysis of equilibria in the theory of non-cooperative games"
                },
                {
                  "year": 1994,
                  "discipline": "economics",
                  "winner": "Reinhard Selten",
                  "desc": "for their pioneering analysis of equilibria in the theory of non-cooperative games"
                },
                {
                  "year": 1994,
                  "discipline": "literature",
                  "winner": "Kenzaburo Oe",
                  "desc": "who with poetic force creates an imagined world, where life and myth condense to form a disconcerting picture of the human predicament today"
                },
                {
                  "year": 1994,
                  "discipline": "medicine",
                  "winner": "Alfred G. Gilman",
                  "desc": "for their discovery of G-proteins and the role of these proteins in signal transduction in cells"
                },
                {
                  "year": 1994,
                  "discipline": "medicine",
                  "winner": "Martin Rodbell",
                  "desc": "for their discovery of G-proteins and the role of these proteins in signal transduction in cells"
                },
                {
                  "year": 1994,
                  "discipline": "peace",
                  "winner": "Yasser Arafat",
                  "desc": "for their efforts to create peace in the Middle East"
                },
                {
                  "year": 1994,
                  "discipline": "peace",
                  "winner": "Shimon Peres",
                  "desc": "for their efforts to create peace in the Middle East"
                },
                {
                  "year": 1994,
                  "discipline": "peace",
                  "winner": "Yitzhak Rabin",
                  "desc": "for their efforts to create peace in the Middle East"
                },
                {
                  "year": 2006,
                  "discipline": "peace",
                  "winner": "Muhammad Yunus",
                  "desc": "for their efforts to create economic and social development from below"
                },
                {
                  "year": 2006,
                  "discipline": "physics",
                  "winner": "John C. Mather",
                  "desc": "for their discovery of the blackbody form and anisotropy of the cosmic microwave background radiation"
                },
                {
                  "year": 2006,
                  "discipline": "physics",
                  "winner": "George F. Smoot",
                  "desc": "for their discovery of the blackbody form and anisotropy of the cosmic microwave background radiation"
                },
                {
                  "year": 2007,
                  "discipline": "chemistry",
                  "winner": "Gerhard Ertl",
                  "desc": "for his studies of chemical processes on solid surfaces"
                },
                {
                  "year": 2007,
                  "discipline": "economics",
                  "winner": "Leonid Hurwicz",
                  "desc": "for having laid the foundations of mechanism design theory"
                },
                {
                  "year": 2007,
                  "discipline": "economics",
                  "winner": "Eric S. Maskin",
                  "desc": "for having laid the foundations of mechanism design theory"
                },
                {
                  "year": 2007,
                  "discipline": "economics",
                  "winner": "Roger B. Myerson",
                  "desc": "for having laid the foundations of mechanism design theory"
                },
                {
                  "year": 2007,
                  "discipline": "literature",
                  "winner": "Doris Lessing",
                  "desc": "that epicist of the female experience, who with scepticism, fire and visionary power has subjected a divided civilisation to scrutiny"
                },
                {
                  "year": 2007,
                  "discipline": "medicine",
                  "winner": "Mario R. Capecchi",
                  "desc": "for their discoveries of principles for introducing specific gene modifications in mice by the use of embryonic stem cells"
                }
              ],
              winners: []
         }
    }

    getName(winner){
        let a = 'The winner was: '
        alert(a+ winner);
        console.log(a + winner)
    }
    
    renderTableData() {
        return this.state.nobelPrizeData.map((nobelPrizeData, index) => {
           const { year, discipline, winner, desc } = nobelPrizeData//destructuring
           return (
              <tr key={index} onClick={()=>this.getName(winner)}>
                 <td>{year}</td>
                 <td>{discipline}</td>
                 <td>{winner}</td>
                 <td>{desc}</td>
              </tr>
           )
        })
     }

     //for column headings
    renderTableHeader() {
        let header = Object.keys(this.state.nobelPrizeData[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }


    render(){

        console.log("STATE", this.state)
    
        // div is used to wrap all components together
        return (
          <div id="tableContainer">  
            <h1 id='title'>Nobel Prize Winners Record</h1>
            <table id='nobel'>
                <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </tbody>
            </table>
            
          </div>
        )
      }







}

export default Nobel; //exporting a component make it reusable 



//useful resource: https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg