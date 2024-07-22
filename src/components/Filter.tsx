
import Select from 'react-select';
import React from 'react';



interface Props {
  value: string,
  label: string
}
const wikioptions =[
  {value: "all", label: "Show all"},
  {value: "react", label: "React"},
  {value: "type", label: "Types"},
  {value: "property", label: "Properties"},
  {value: "pipeline", label: "GitLab Pipeline"},
  {value: "html", label: "HTML"},
  {value: "css", label: "CSS"},
  
]

export function ShowAll(){
    var x: string | any[] | HTMLCollectionOf<Element>, i: number;
    x = document.getElementsByClassName("filterable");
    for (i = 0; i < x.length; i++) {
        let el = x[i]; 
        w3AddClass(el, "show");
        console.log(el)
      }
}


     export function filterMultiSelection(arr: Array<Props>){
        let nono = document.getElementById("nono");
        nono!.className = "noshow"; 
        var x: string | any[] | HTMLCollectionOf<Element>, i: number;
        x = document.getElementsByClassName("filterable");
        for (i = 0; i < x.length; i++) {
          let el = x[i]; 
          w3RemoveClass(el, "show");
        }
        let shownum = 0; 
        let boo = true;
        for (i = 0; i < x.length; i++) {
          
          arr.forEach((entry) => {
             if (x[i].className.indexOf(entry.value) <= -1){
              boo = false; 
             }
             else{
                if (!x[i].classList.contains(entry.value)){
                  boo = false; 
                }
             }
          }) 
          if (boo){
            w3AddClass(x[i], "show");
            shownum++; 
          }
        }
        let y = document.getElementsByClassName("show").length;
        if (y < 1){
            console.log(y)
            nono!.className = "show"; 
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
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
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
    ShowAll(); 
  return(
    <div>
      <WikiAction></WikiAction>
    </div>
  )
}

class WikiAction extends React.Component {
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
        options={wikioptions}
        defaultValue={[wikioptions[0]]}
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