import { gql, useQuery } from '@apollo/client';
import { Select } from '@mantine/core';
import React from 'react'

const GET_BICYCLE_PROPS = gql`
query GetBicycleProps {
    bicycleProps {
      color {
        id
        color
      }
      tires {
        id
        size
      }
      status {
        id
        status
      }
      gearsystem {
        id
        type
      }
      brand {
        id
        name
      }
    }
  }
`;

export const InputField = () => {


    const { data, loading, error } = useQuery(GET_BICYCLE_PROPS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const { color, tires, status, gearsystem, brand } = data.bicycleProps;
    // const { bicycleProps } = data;
    // console.log("color", color, tires, status, gearsystem, brand);
    // console.log("bicycleProps", bicycleProps);
    // const result = Object.keys(bicycleProps).map((key) => [bicycleProps[key]]);
    // const novyresult = result.splice(1, 5);
    // console.log("result", novyresult);
    const colornames = color.map((color) => (color.color))
    const tiressize = tires.map((tire) => (tire.size))
    const statusstatus = status.map((status) => (status.status))
    const gearsystemtype = gearsystem.map((gearsystem) => (gearsystem.type))
    const brandname = brand.map((brand) => ({label:brand.name, value:brand.id}))
    // console.log("colornames", colornames);
    return (
        <div>
            <Select
                label="Choose color"
                placeholder="Pick one"
                searchable
                nothingFound="No options"
                data={colornames}
            />
            <Select
                label="Choose tire size"
                placeholder="Pick one"
                searchable
                nothingFound="No options"
                data={tiressize}
            />
            <Select
                label="Choose status"
                placeholder="Pick one"
                searchable
                nothingFound="No options"
                data={statusstatus}
            />
            <Select
                label="Choose gear system type"
                placeholder="Pick one"
                searchable
                nothingFound="No options"
                data={gearsystemtype}
            />
            <Select
                label="Choose brand name"
                placeholder="Pick one"
                searchable
                nothingFound="No options"
                data={brandname}
            />

        </div>






        // <div>
        //     {novyresult?.map((bicycleProp) => {
        //         console.log("bicycleProp", bicycleProp[0][1]);
        //         return (
        //             <Select
        //                 // key={bicycleProp}
        //                 label={bicycleProp[0][1]?.__typename}
        //                 placeholder="Pick one"
        //                 searchable
        //                 nothingFound="No options"
        //                 data={...bicycleProp}
        //             />
        //         )
        //     })}
        //     {color?.map((color) => (
        //         <div key={color.id}>
        //             <h1>{color.color}</h1>
        //         </div>

        //     ))
        //     }

        // </div>
    )
}
