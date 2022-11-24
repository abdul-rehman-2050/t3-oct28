import React from 'react'
import AddTag from '../../../components/tags/add-tag'
import Tag from '../../../components/tags/tag';
import PanelLayout from '../../../layouts/panel'
import { trpc } from '../../../utils/trpc';

export type ManufacturerType = {
  id: number;
  name: string;
}
function Index() {
  const getAllManufacturers = trpc.manufacturer.getAll.useQuery(undefined,{
    onSuccess(data) {
      setData(data as ManufacturerType[]);
    },
  });

  const [Data, setData] = React.useState< ManufacturerType[]>()
  const createMutation = trpc.manufacturer.create.useMutation();
  const removeMutation = trpc.manufacturer.removeById.useMutation();
  
  
  
  async function handleCreate(title:string){
   createMutation.mutate({ name: title },{
    onSuccess(data) {
      if(Data){
        setData([...Data, data.data.record]) 
      }
      
    },
   })
   
    
  }

   function handleRemove(id:number){
    removeMutation.mutate({ id })
    setData(Data?.filter((val) => val.id !== id))
  
  }
  

  return (
        <PanelLayout>
            <div>
                <AddTag header='Manufacturers' onCreate={handleCreate} onRemove={handleRemove}/>
            </div>
            <div className='flex flex-wrap mt-3 shadow-md bg-white p-3'>
            {Data?.map((val)=>{
              return (<Tag key={val.id} id={val.id} name={val.name} onDelete={handleRemove}/>)
            })}
            </div>
        </PanelLayout>

  )
}


export default Index