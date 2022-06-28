
function ChildOne(props){

    const name = "mujassam";
    return (
        <div>
            <h1>user name is:</h1>
            <button onClick={()=>props.getData(name)}>Click me</button>
        </div>
    );
};

export default ChildOne;