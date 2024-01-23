import React from "react";
import verticalMenuVector from "../../Assets/Icons/vertical-menu-vector.png";
import productImg from "../../Assets/Icons/product-pic.png";
import swissFlagVector from "../../Assets/Icons/swiss-flag-vector.png";
export const ProductCard = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#DEEBEC" }}
        className="w-[475px] h-[427px] border"
      >
        <div className="flex flex-row align-middle">
          <div>
            <img
              className="w-[46px] h-[69px] rounded-[1px] m-4 border border-yellow-600"
              src={productImg}
              alt="product pic"
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between m-4 ml-0">
              <p className=" text-yellow-600  text-sm font-semibold font-['Saira']">
                KAYLAY GUNNER
              </p>
              <img
                style={{ height: "13px", width: "3px" }}
                src={verticalMenuVector}
                alt="logo"
              />
            </div>
            <div className="flex justify-start items-center">
              <div className="w-[383px] h-[3px] bg-white rounded-tl-sm rounded-tr-sm relative z-0" />
              <div className="w-[273px] h-[3px] bg-gradient-to-r from-slate-300 to-emerald-800 rounded-tl-sm rounded-tr-sm absolute z-10" />
            </div>
            <div className="w-[352px] text-emerald-800 text-[10px] font-semibold font-['Saira'] mt-1">
              PROFESSIONAL DESIGNER FOR MODELING AND RENDERING WALOR
              <br />
              DISNEY
            </div>
          </div>
        </div>
        {/* card details */}
        <div className="w-[441px]  border"></div>
        <section className="grid grid-cols-3 grid-gap-1 divide-x p-6 justify-around align-middle">
          {/* item1 */}
          <div>
            <div className="flex flex-row mt-1">
              <img
                style={{ height: "20px", width: "20px" }}
                src={swissFlagVector}
                alt="logo"
              />
              <div className="w-20 text-yellow-600 text-sm font-semibold font-['Saira']">
                SwitZerland
              </div>
            </div>
            <div className="w-[55px] text-emerald-800 text-xs font-semibold font-['Saira']">
              COUNTRY
            </div>
          </div>
          {/* item2 */}
          <div className="mt-1">
            <div className="w-[61px] text-yellow-600 text-sm font-semibold font-['Saira']">
              Full-Time
            </div>
            <div className="w-[118px] text-emerald-800 text-xs font-bold font-['Saira']">
              COOPRATION TYPE
            </div>
          </div>

          {/* item3 */}
          <div className="mt-1">
            <div className="w-[58px] text-yellow-600 text-sm font-semibold font-['Saira']">
              Designer
            </div>
            <div className="w-[61px] text-emerald-800 text-xs font-semibold font-['Saira']">
              CATEGORY
            </div>
          </div>
          {/* item 4 */}
          <div className="mt-1">
            <div className="flex flex-row">
              <img
                style={{ height: "20px", width: "20px" }}
                src={swissFlagVector}
                alt="logo"
              />
              <div className="w-20 text-yellow-600 text-sm font-semibold font-['Saira']">
                Montenegro
              </div>
            </div>
            <div className="w-[55px] text-emerald-800 text-xs font-semibold font-['Saira']">
              CITY
            </div>
          </div>
          {/* item 5 */}
          <div className="mt-1">
            <div className="w-[88px] text-yellow-600 text-sm font-semibold font-['Saira']">
              $ 12.00 Hour
            </div>
            <div className="w-[118px] text-emerald-800 text-xs font-semibold font-['Saira']">
              MINIMUM SALARY
            </div>
          </div>
          {/* item 6 */}
          <div className="mt-1">
            <div className="w-[118px] text-yellow-600 text-sm font-semibold font-['Saira']">
              8:00 AM GMT +2{" "}
            </div>
            <div className="w-[111px] text-emerald-800 text-xs font-semibold font-['Saira']">
              STARTING HOURS{" "}
            </div>
          </div>
          {/* item 7 */}
          <div className="mt-1">
            <div className="w-[58px] text-yellow-600 text-sm font-semibold font-['Saira']">
              In Person
            </div>
            <div className="w-[118px] text-emerald-800 text-xs font-semibold font-['Saira']">
              CONTRACT TYPE
            </div>
          </div>
          {/* item 8 */}
          <div className="mt-1">
            <div className="w-[118px] text-yellow-600 text-sm font-semibold font-['Saira']">
              $ 24.00 Hour{" "}
            </div>
            <div className="w-[118px] text-emerald-800 text-xs font-semibold font-['Saira']">
              MAXIMUM SALARY{" "}
            </div>
          </div>
          {/* item 9 */}
          <div className="mt-1">
            <div className="w-[118px] text-yellow-600 text-sm font-semibold font-['Saira']">
              17:00 PM GMT +2
            </div>
            <div className="w-[118px] text-emerald-800 text-xs font-semibold font-['Saira']">
              ENDING HOURS
            </div>
          </div>
          {/* item 10 */}
          <div className="mt-1">
            <div className="flex flex-row">
              <img
                style={{ height: "20px", width: "20px" }}
                src={swissFlagVector}
                alt="logo"
              />
              <div className="w-20 text-yellow-600 text-sm font-semibold font-['Saira']">
                Montenegro
              </div>
            </div>
            <div className="w-[55px] text-emerald-800 text-xs font-semibold font-['Saira']">
              CITY
            </div>
          </div>
          {/* item 11 */}
          <div className="mt-1">
            <div className="flex flex-row">
              <img
                style={{ height: "20px", width: "20px" }}
                src={swissFlagVector}
                alt="logo"
              />
              <div className="w-20 text-yellow-600 text-sm font-semibold font-['Saira']">
                Montenegro
              </div>
            </div>
          </div>
          {/* item 12 */}
          <div className="mt-1">
            <div className="flex flex-row">
              <img
                style={{ height: "20px", width: "20px" }}
                src={swissFlagVector}
                alt="logo"
              />
              <div className="w-20 text-yellow-600 text-sm font-semibold font-['Saira']">
                Montenegro
              </div>
            </div>
          </div>
        </section>
        <hr class="my-1 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <div className="text-yellow-600 text-sm font-semibold font-['Saira']   justify-center align-middle text-center mt-10">
          KNOW MORE
        </div>
      </div>
    </>
  );
};
