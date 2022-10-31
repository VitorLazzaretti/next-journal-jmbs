import React, { useRef, useState } from "react";
import HeaderItem from "../HeaderItem/HeaderItem";
import Icon from "../Icon/Icon";

const Header = () => {
  const [inputWidth, setInputWidth] = useState("w-20");
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef<null | HTMLInputElement>(null);

  return (
    <header className='w-full h-20 bg-[#F2F3F2] border-b-[1px] border-solid flex items-center'>
      <div className='flex-1 h-full overflow-hidden flex items-center justify-evenly'>
        <HeaderItem>
          Rango
        </HeaderItem>
        <HeaderItem>
          Rango
        </HeaderItem>
        <HeaderItem>
          Rango
        </HeaderItem>
        <HeaderItem>
          Rango
        </HeaderItem>
        <HeaderItem>
          Rango
        </HeaderItem>
        <HeaderItem>
          Rango
        </HeaderItem>
      </div>

      <div
        className='h-full w-72 flex justify-center items-center transition-all duration-500 linear hover:w-2/5'
        style={{ boxShadow: "-4px -5px 8px #00000044" }}
        onMouseOver={() => { setInputWidth("w-3/5"); }}
        onMouseOut={() => { setInputWidth("w-20"); setInputValue(""); inputRef.current?.blur(); }}>
        <input
          className={`bg-transparent border-b-[1px] px-2 py-1 border-solid border-gray-500 placeholder:text-[#5e5e5e] transition-all duration-500 ease-in-out outline-none ${inputWidth}`}
          placeholder='Search...'
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          ref={inputRef}
        />
        <Icon
          name='search'
          size='25px'
          style={{
            margin: 5,
            cursor: "pointer"
          }}
        />
      </div>
    </header>
  );
};

export default Header;