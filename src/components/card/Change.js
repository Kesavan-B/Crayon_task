import React from 'react'
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const Change = ({ handleView=()=>false}) => {
    const [view, setView] = React.useState("module")
    const handleChange=(event,nextView)=>{
            setView(nextView)
            handleView();
        }

  return (
    <div>
         <div>
            <ToggleButtonGroup
                orientation="horizontal"
                value={view}
                exclusive
                onChange={handleChange}
            >
                <div className='grid-list-btn'>
                <ToggleButton value="module" aria-label="module">
                    <ViewModuleIcon />
                   
                </ToggleButton>
                <ToggleButton value="list" aria-label="list">
                    <ViewListIcon />
                </ToggleButton>
                </div>
            </ToggleButtonGroup>
        </div>
    </div>
  )
}


