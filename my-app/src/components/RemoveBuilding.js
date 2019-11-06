import React from 'react'

class RemoveBuilding extends React.Component {

    render()     {

        const { data, selectedBuilding, deleteUpdate } = this.props;

        const info = data[selectedBuilding - 1]
    
        if(selectedBuilding !== 0){
            return(
            
                     <div> 
                         <p></p>
                   <button onClick={() => deleteUpdate(info.id)}> Delete </button>            
                </div>
             )
        }
        else{
            return(
                <div></div>
            )
        }

        
        

        
    }
}
export default RemoveBuilding;