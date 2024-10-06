import React from "react";
import { BoldPara } from "../components/text-types";
import { SocialRow } from "../components/SocialMedia";
import { MovingWebsite } from "../components/UnderConstruction";
import { Calendar } from "../components/Calendar/Calendar";

export function Home() {

    return (
      <>
        <div className="row">
          <div className="col">
            <div className="welcome-box center" property="description">
              <BoldPara>
                I collect knowledge and resources about isopods - both for scientific and hobby purposes. 
              </BoldPara>
              <BoldPara>
              I am always happy for people to contact me. {/* Doing this website alone takes time and I am very open to other people joining. */}
              </BoldPara>
            </div>
            <SocialRow/>
            <MovingWebsite/>
          </div>
          <div className="row">
          <h1>Dynamic Calendar for 2024</h1>
          <Calendar year={2024} />
          </div>
        </div>
        <div className="row">
      
        </div>
      </>
    );
  }
  