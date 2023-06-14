const Button = props => {
    return <button  
            type={props.type} 
            onClick={props.onClick}
            className="bg-blue-900
            w-1/2
            h-1/6
            p-5
            text-white
            rounded-full
            shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >{props.children}
            </button>
};

export default Button;
