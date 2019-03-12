import React, { Component } from 'react';
import "./formWrapper.scss"
import TextField from '@material-ui/core/TextField';

class FormWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
      azucar: "",
      peso: "",
      dia:"",
      sol:"",
      temp:"",
      cardio:""
    };
	}

  handleChange = (e)=>{
    const {value,name} = e.target
    this.setState ({
      [name]: value
    })
  }

	render() {

    const {azucar, peso, dia,sol,temp, cardio} = this.state
    return (
      <form>
        <div className= "left-column">

          <TextField
            label="Peso"
            id="margin-none"
            helperText="Peso del Gordito - misma hora (8am)"
            onChange={this.handleChange}
            value={peso}
            name = {"peso"}
            placeholder={"Peso en Lbs "}
            fullWidth={true}
          />

          <TextField
            label="Temperatura"
            id="margin-none"
            helperText="Poner la temperatura"
            onChange={this.handleChange}
            value={temp}
            name = {"temp"}
            fullWidth={true}
          />

          <TextField
            label="Ritmo Cardiaco"
            id="margin-none"
            helperText="ultimo valor de pression"
            onChange={this.handleChange}
            value={cardio}
            name = {"cardio"}
            placeholder={"Latidos Por minuto "}
            fullWidth={true}
          />

        </div>

      <div className="right-column">
        <TextField
          label="Nivel de Azucar"
          id="margin-none"
          helperText="Monto de Azucar"
          onChange={this.handleChange}
          value={azucar}
          name = {"azucar"}
          fullWidth={true}
        />

        <TextField
          label="Presion Arterial (Diasolte)"
          id="margin-none"
          helperText="Poner la Presion, primer valor"
          onChange={this.handleChange}
          value={dia}
          name = {"dia"}
          fullWidth={true}
        />

        <TextField
          label="Presion Arterial (sistole)"
          id="margin-none"
          helperText="Poner la Presion, segundo valor"
          onChange={this.handleChange}
          value={sol}
          name = {"sol"}
          fullWidth={true}
        />
      </div>

      </form>
    )
	}
}

export default FormWrapper;
