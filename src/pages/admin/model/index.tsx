import React from 'react'
import AddTag from '../../../components/tags/add-tag'
import PanelLayout from '../../../layouts/panel'


function Index() {
  return (
        <PanelLayout>
            <div>
                <AddTag header='Manufacturer'/>
            </div>
        </PanelLayout>

  )
}


export default Index