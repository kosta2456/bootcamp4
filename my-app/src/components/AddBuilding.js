import React from 'react'


class AddBuilding extends React.Component { 
   

    handleSubmit = (e) => { 
        e.preventDefault() 
        const { addUpdate } = this.props
        addUpdate(this.refs.newName.value, this.refs.newCode.value, this.refs.newAddr.value, this.refs.newLat.value, this.refs.newLong.value)
    };

    render() {

        return(
            <div> 
                    <span> 
                        <form onSubmit={this.handleSubmit}>
                            <label>Name: <input type="text" ref={"newName"}/> </label>

                            <label>Code: <input type="text" ref={"newCode"}/> </label>

                            <label>Latitude: <input type="text"ref={"newLat"} /> </label>

                            <label>Longitude: <input type="text" ref={"newLong"} /> </label>

                            <label>Address: <input type="text" ref={"newAddr"} /> </label>

                            <button> Add </button>
                        </form>
                    </span>
                <p></p>
            </div>
        )
    }
}

export default AddBuilding;