import React from 'react'
import data from './countries.json'
import './App.css'
import './flags/flags.min.css'
import Country from './Country/Country'
import ContextMenu from './ContextMenu/ContextMenu'

class  App extends React.Component  {

    state = {
      countriesData : data,
      code : null,
      name : '',
      coordX : null,
      coordY : null
    }

    handleClick = (event,item  ) =>{
      event.preventDefault()
      event.persist()

      this.setState(()=>{
        return {
          coordX : event.clientX,
          coordY : event.clientY,
          code : item.code,
          name : item.name,
          isClicked : true
        }
      })
    }


    render(){

      const countries = this.state.countriesData.map( item =>  <Country item = {item}
                                                                        coords = {item.coords}
                                                                        key = {item.id}
                                                                        onClick = {(event, item) => this.handleClick(event, item )}/>)

  return (

    <div  className= "map">
      <svg viewBox = "0 0 1283.2 1204.48">
        {countries}
      </svg>
    {this.state.isClicked
    ? <ContextMenu code = {this.state.code}
                   name = {this.state.name}
                   coordX = {this.state.coordX}
                   coordY = {this.state.coordY}/>
    : null}

</div>

  )
}
}

export default App;
