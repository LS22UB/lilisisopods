
import Select from 'react-select';
import React from 'react';



interface Props {
  value: string,
  label: string
}
/* Photos, Maps */

const taxonomyoptions =[
  {value: "Oniscidea", label: "Oniscidea"},
  {value: "Agnaridae", label: "Agnaridae"},
  {value: "Armadillidae", label: "Armadillidae"},
  {value: "Armadillidiidae", label: "Armadillidiidae"},
  {value: "Cylisticidae", label: "Cylisticidae"},
  {value: "Agnaridae", label: "Agnaridae"},
  {value: "Detonidae", label: "Detonidae"},
  {value: "Halophiloscidae", label: "Halophiloscidae"},
  {value: "Ligiidae", label: "Ligiidae"},
  {value: "Oniscidae", label: "Oniscidae"},
  {value: "Philoscidae", label: "Philoscidae"},
  {value: "Platyarthridae", label: "Platyarthridae"},
  {value: "Porcellionidae", label: "Porcellionidae"},
  {value: "Stenoniscidae", label: "Stenoniscidae"},
  {value: "Trachelipodidae", label: "Trachelipodidae"},
]
const countryoptions = [
    {value: "Australia", label: "Australia"},
    {value: "Chile", label: "Chile"},
    {value: "France", label: "France"},
    
]

const languageoptions = [
    {value: "en", label: "English"},
    {value: "es", label: "Spanish"},
    {value: "de", label: "German"},
    {value: "fr", label: "French"},
]
/* 
export function ShowAll(){
    var x: string | any[] | HTMLCollectionOf<Element>, i: number;
    x = document.getElementsByClassName("filterable");
    for (i = 0; i < x.length; i++) {
        let el = x[i]; 
        w3AddClass(el, "show");
        console.log(el)
      }
} */


      interface Props {
        value: string;
      }
      
      
      export function filterMultiSelection(arr: Array<Props>) {
        const nono = document.getElementById("nono");
        if (nono) {
          nono.className = "noshow";
        }
      
        const filterableElements = document.getElementsByClassName("filterable");
      
        // Remove "show" class from all elements
        for (let i = 0; i < filterableElements.length; i++) {
          const el = filterableElements[i];
          w3RemoveClass(el, "show");
        }
      
        console.log("Begin");
      
        // Apply filter criteria
        for (let i = 0; i < filterableElements.length; i++) {
          const el = filterableElements[i];
          let shouldShow = true;
      
          for (const entry of arr) {
            console.log(`entry: ${entry.value}`);
            if (!el.classList.contains(entry.value)) {
              shouldShow = false;
              break;
            }
          }
      
          console.log(`shouldShow: ${shouldShow}`);
          if (shouldShow) {
            w3AddClass(el, "show");
          }
        }
      
        // Check if any element is shown
        const shownElements = document.getElementsByClassName("show");
        if (shownElements.length < 1 && nono) {
          console.log(shownElements.length);
          nono.className = "show";
        }
      }
      

/* function filterSelection(label: string) {
  var x, i;
  x = document.getElementsByClassName("filterable");
  if (label == "all") label = "";
  for (i = 0; i < x.length; i++) {
    let el = x[i]; 
    w3RemoveClass(el, "show");
    if (x[i].className.indexOf(label) > -1) w3AddClass(x[i], "show");
  }
} */
  
function w3AddClass(element: Element, name: string) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element: Element, name: string) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


export function WikiSelector(){
  return(
    <div className='row align-items-center'>
        <div className='col-4'>
            Taxonomy: 
            <TaxoAction/>
        </div>
        <div className='col-4'>
            Countries: 
            <CountryAction/>
        </div>
        <div className='col-4'>
            Langauages: 
            <LangAction/>
        </div>
    </div>
  )
}

class TaxoAction extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption: any) => {
  	
  	this.setState({ selectedOption }, () =>
  	console.log(`Option selected:`, this.state.selectedOption)
   	
    );
    	filterMultiSelection(selectedOption)
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        isMulti
        options={taxonomyoptions}
        defaultValue={{value: "all", label: "Show all"}}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    );
  }
}
class LangAction extends React.Component {
    state = {
      selectedOption: null,
    };
    handleChange = (selectedOption: any) => {
        
        this.setState({ selectedOption }, () =>
        console.log(`Option selected:`, this.state.selectedOption)
         
      );
          filterMultiSelection(selectedOption)
    };
    render() {
      const { selectedOption } = this.state;
  
      return (
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          isMulti
          options={languageoptions}
          defaultValue={{value: "all", label: "Show all"}}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      );
    }
  }
class CountryAction extends React.Component {
    state = {
      selectedOption: null,
    };
    handleChange = (selectedOption: any) => {
        
        this.setState({ selectedOption }, () =>
        console.log(`Option selected:`, this.state.selectedOption)
         
      );
          filterMultiSelection(selectedOption)
    };
    render() {
      const { selectedOption } = this.state;
  
      return (
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          isMulti
          options={countryoptions}
          defaultValue={{value: "all", label: "Show all"}}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      );
    }
  }

/* Type '(selectedOption: Props | null) => void' is not assignable to type '(newValue: MultiValue<{ value: string; label: string; } | null>, actionMeta: ActionMeta<{ value: string; label: string; } | null>) => void'.
  Types of parameters 'selectedOption' and 'newValue' are incompatible.
    Type 'readonly ({ value: string; label: string; } | null)[]' is missing the following properties from type 'Props': value, label */
    /* const hpoptions =[
      {value: "all", label: "All"},
      {value: "Academia", label: "Academia"},
      {value: "PatientPatient", label: "Patient"},
      {value: "Medical", label: "Medical Professional"},
      {value: "property", label: "Properties"},
      {value: "pipeline", label: "GitLab Pipeline"},
      {value: "html", label: "HTML"},
      {value: "css", label: "CSS"},
      
    ]

    export function HPSelector(){
      return(
        <div>
          <HPAction></HPAction>
        </div>
      )
    }



    class HPAction extends React.Component {
      state = {
        selectedOption: null,
      };
      handleChange = (selectedOption: any) => {
        
        this.setState({ selectedOption }, () =>
        console.log(`Option selected:`, this.state.selectedOption)
         
        );
          filterMultiSelection(selectedOption)
      };
      render() {
        const { selectedOption } = this.state;
    
        return (
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            isMulti
            options={hpoptions}
            defaultValue={[hpoptions[0]]}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        );
      }
    } */