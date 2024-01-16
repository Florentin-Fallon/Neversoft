import React from "react";

const Card = ({
    imgSrc,
    imgAlt,
    title,
    buttonText,
    description,
    link,
}) => {
    return (
        <div className="bg-white flex flex-col border-solid w-[17rem] h-[18rem] rounded-lg m-px">
            {imgSrc && imgAlt && (<img className="w-[100%] rounded-t-lg" src={imgSrc} alt={imgAlt} />)}
            {title && <h1 className="my-2 text-xl text-center font-semibold">{title}</h1>}
            {buttonText && <a className="text-center text-sm w-[50%] rounded-lg bg-blue-700 hover:bg-blue-500 text-white m-auto p-1" href={link}>
                {buttonText}
            </a>}
        </div>
    )
}

export default Card;