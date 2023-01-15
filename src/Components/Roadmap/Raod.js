import "./Road.css";
import { GoPrimitiveDot } from "react-icons/go";
import RoadMobile from "./RoadMobile";

export default function Raod() {
  return (
    <>
      <section className="roadmap">
        <div className="container">
          <div className="road-head text-center">
            <h1 className="green">ROADMAP</h1>
            <img src="https://ik.imagekit.io/cforcrypto/Dework/icons/Group_427325103.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671913800599" alt=""/>
          </div>
          <div className="road-slide">
            <img
              src="https://ik.imagekit.io/cforcrypto/Dework/Mask_group.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1672394255186"
              alt=""
            />
          </div>
          <div className="grid-road">

         
          <div className="box-road-1">
            <div className="text-center rb-img">
              <img
                src="https://ik.imagekit.io/cforcrypto/Dework/Group_1261152793.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1672394848621"
                alt=""
                style={{width:'auto'}}
              />
            </div>
            <div className="text-center">
            <h1>Q4 2022</h1>
            <p>(Nov - Dec)</p>
            </div>
            
            <div className="rd-b">
              <p>
                <GoPrimitiveDot /> Initial Project Plan{" "}
              </p>
              <p>
                <GoPrimitiveDot /> Website Design{" "}
              </p>
              <p>
                <GoPrimitiveDot /> Website Live{" "}
              </p>
              <p>
                <GoPrimitiveDot /> Initial Smart-contracts Deployment{" "}
              </p>
            </div>
          </div>


          <div className="box-road-2">
            <div className="text-center rb-img">
              <img
                src="https://ik.imagekit.io/cforcrypto/Dework/Group_1261152793.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1672394848621"
                alt=""
                style={{width:'auto'}}
              />
            </div>
            <div className="text-center">
            <h1>Q1 2023</h1>
            <p>(Jan - Mar)</p>
            </div>
            
            <div className="rd-b">
              <p>
                <GoPrimitiveDot /> PreSale {" "}
              </p>
              <p>
                <GoPrimitiveDot /> Project Launch{" "}
              </p>
              <p>
                <GoPrimitiveDot /> Marketing{" "}
              </p>
             
              <p>
                <GoPrimitiveDot /> CMC and CG Listing{" "}
              </p>
              <p>
                <GoPrimitiveDot /> Exchange Listing{" "}
              </p>
            </div>
          </div>


          <div className="box-road-3">
            <div className="text-center rb-img">
              <img
                src="https://ik.imagekit.io/cforcrypto/Dework/Group_1261152793.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1672394848621"
                alt=""
                style={{width:'auto'}}
              />
            </div>
            <div className="text-center">
            <h1>Q2 2023</h1>
            <p>(March - April)</p>
            </div>
            
            <div className="rd-b">
         
              <p>
                <GoPrimitiveDot /> NFT Launch{" "}
              </p>
              <p>
                <GoPrimitiveDot /> NFT Marketplace{" "}
              </p>
              <p>
                <GoPrimitiveDot /> Freelance Platform
      Development{" "}
              </p>
             
              <p>
                <GoPrimitiveDot /> Metaverse
      Development{" "}
              </p>
            </div>
          </div>


          <div className="box-road-4">
            <div className="text-center rb-img">
              <img
                src="https://ik.imagekit.io/cforcrypto/Dework/Group_1261152793.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1672394848621"
                alt=""
                style={{width:'auto'}}
              />
            </div>
            <div className="text-center">
            <h1>Q3 2023</h1>
            <p>(May - June)</p>
            </div>
            
            <div className="rd-b">
              <p>
                <GoPrimitiveDot /> App Development{" "}
              </p>
              <p>
                <GoPrimitiveDot /> Metaverse Platform Launch{" "}
              </p>
              <p>
                <GoPrimitiveDot /> Platform Improvements{" "}
              </p>
             
            </div>
          </div>
          </div>
          <RoadMobile/>
        </div>
      </section>
    </>
  );
}
