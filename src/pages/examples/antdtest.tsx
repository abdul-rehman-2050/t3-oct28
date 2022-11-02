import * as React from 'react';
import { Button } from 'antd';
import { useState } from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space,message } from 'antd';
import moment from 'moment';
import { PickerProps } from 'antd/lib/date-picker/generatePicker';



const dateFormat = 'YYYY/MM/DD';
export default function AntdTest () {
  const [date, setDate] = useState(moment(new Date()));
  


  const onChange=(dateObj: moment.Moment, dateStr: string) => void{
    
      
    
  };
  const handleChange = (value: any) => {
    console.log(value)
    //setDate(dateObj);
  };
  return (
    <div className='w-full min-h-screen' data-theme="dark">
    <DatePicker defaultValue={date} onChange={handleChange} />
    <div style={{ marginTop: 16 }}>
      Selected Date: {date ? date.toString() : 'None'}
    </div>
    <button className='btn btn-primary'>test</button>
  </div>
  );
}
