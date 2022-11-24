import React from 'react'
import AddTag from '../../../components/tags/add-tag'
import PanelLayout from '../../../layouts/panel'
import { trpc } from '../../../utils/trpc';



function Index() {
  const createMutation = trpc.manufacturer.create.useMutation();
  
  
  function handleCreate(title:string){
    createMutation.mutate({name:title})
  }

  

  return (
        <PanelLayout>
            <div>
                <AddTag header='Manufacturers' onCreate={handleCreate} />
            </div>
        </PanelLayout>

  )
}


export default Index