
const GreetNew = () => {

   console.log('hello')
}

const Greet = (props) => {

    GreetNew()
    
    return (
        
        <div>
             <h1>Hello {props.name} {props.hero}</h1>
            
             {props.children}
        </div>
       
    )
}

export default Greet