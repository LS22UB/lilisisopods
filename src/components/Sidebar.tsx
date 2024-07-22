

import React from 'react';
import { useEffect } from 'react';

function SideItem({hesh, num}:{hesh: string; num: number}){
    let link = "#" + hesh
    let subdi = "subtitle" + num
    return(
        <div>   
            <a href={link}>
                <span id={subdi}>
                    {hesh}
                </span>
            </a>
        </div>   
    )
}



/* LOading too slow...
function Sidebar(){
    const allWithClass = Array.from(
        document.querySelectorAll('section')
      );
      console.log(allWithClass);
    let content = [];
    for(let idx in allWithClass){
        const item = allWithClass[idx];
        const id = item.id; 
        console.log("idx: " + idx);
        console.log("item: " + item); 
        console.log("id: " + id);
        content.push(<SideItem key={id} hesh={id}></SideItem>);
    }
    return (
        <nav className="sidebar">
            {content}
        </nav>        
    )
    
} */


    function Sidebar({nums}:{nums: Array<string>}){

      
        useEffect(() => {
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        const handleScroll = () => {
            for(let idx in nums){
                const item = nums[idx];
                let ind = nums.findIndex((e) => e == item)
                let subdi = "subtitle" + ind 
                Highlight({el: document.getElementById(item)!}, {subtitle: document.getElementById(subdi)!});
            }
            
            console.log("function HighlightCheck")
        }
      

        console.log(nums)
        let content = []; 
        for(let idx in nums){
            const item = nums[idx];
            /* console.log("idx: " + idx);
            console.log("item: " + item);  */
            console.log("Type: " + typeof(document.getElementById(item)))
            let ind = nums.findIndex((e) => e == item)
            content.push(<SideItem key={item} hesh={item} num={ind}></SideItem>);
        }
        
        if(nums.length > 1)
        return (
            <nav className="sidebar">
                    {content}
            </nav>        
        )
        return(
            <div></div>
        )
    }
    


      function Highlight({el}: {el: HTMLElement | null}, {subtitle}:{subtitle: HTMLElement | null}){
        let TopDistance = 100; 
        if (el != null && subtitle != null){
            if (el.getBoundingClientRect().top < TopDistance + 1 && el.getBoundingClientRect().bottom > TopDistance){
                subtitle.style.color = "#FFF6F2";
                subtitle.style.backgroundColor = "#850F78";
                subtitle.style.borderRadius = "15px";
                subtitle.style.borderWidth = "15px"; 
                subtitle.style.borderColor = "#850F78"; 
/*                 console.log("subtitle: ",subtitle)
                console.log("style: ", subtitle.style)
                console.log("color: ",subtitle.style.color)
                console.log("backcolor: ",subtitle.style.backgroundColor)    */     
            }
            else{
                subtitle.style.color = "#850F78";
                subtitle.style.backgroundColor = "";
            }
        }
        
      }
    

export default Sidebar;