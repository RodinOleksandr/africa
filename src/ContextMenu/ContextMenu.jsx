import React from 'react'

function  ContextMenu(props){
  const classes = ['flag']
  classes.push('flag-' + props.code)


  return (

        <div className = 'info' style = {{left : props.coordX , top : props.coordY }}>
        <span>
        <img src="../flags/blank.gif" className = {classes.join(' ')}  />
        </span>
        <span> {props.name} </span>

        </div>
  )
}

export default ContextMenu
