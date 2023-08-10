import React from "react";
import "./endPage.css";

function EndPage({handleSubmit,name,setName,email,setEmail}) {
  return (
      <div className=" px-2">
      <div className=" px-3">
        <div className=" mt-7 flex justify-center sticky">
        <img
          class="mx-10 mb-3 h-16 mt-10"
          src="src\assets\logo.svg"
          alt="logo.svg"
        />
        </div>
        
          <div className="pb-16  m-auto md:max-w-[340px]">
            <div className="pt-44 mb-9 mt-10 ">
             <p className="text-center font-[620] text-xl md:text-2xl">Congratulations on completing the quiz! <br /> Now claim your results.</p> 
            </div>
            <div className="flex flex-col overflow-hidden">
                <input type="text" placeholder="Your Name" className="w-[260px] h-[49px] mx-auto rounded-xl border-4 border-[#c0c0c065] md:w-[340px] md:h-[60px] pl-3" value={name} onChange={function(e){
                  setName(e.target.value)
                }}/>
                <input type="email" placeholder="Your Email" className="w-[260px] h-[49px] mx-auto mt-4 mb-10 rounded-xl border-4 border-[#c0c0c065] md:w-[340px] md:h-[60px] pl-3" value={email} onChange={function(e){
                  setEmail(e.target.value);
                }}/>

                <button className="w-[180px] h-[50px] mx-auto border-4 border-[#c0c0c065] bg-[#800000d0] rounded-xl hover:bg-[#ffffffc4] text-white md:w-[200px] md:h-[60px]" onClick={handleSubmit}>
                    Show Me My Results!
                </button>
                
            </div>
          </div>
        
      </div>
    
  );
}
export default EndPage;
