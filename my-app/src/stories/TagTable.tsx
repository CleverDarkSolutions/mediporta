import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Skeleton } from '@mui/material';
import { Tag } from '../types/tag';

interface TagTableProps {
  page?: number,
  /**
   * Page display
   */
  pageSize?: number,
  /**
   * Amount of records on a single page
   */
}

/**
 * Table displaying most popular tags from Stack Overflow
 */
export const TagTable = ({
  page = 0,
  pageSize = 5,
}: TagTableProps) => {
  const [ data, setData ] = useState<Tag[]>();
  useEffect(() => {
    axios.get('https://api.stackexchange.com/2.3/tags?site=stackoverflow')
      .then(result => result.data.items.map((item: Tag, index: number) => ({
        ...item,
        id: index + 1,
      })))
      .then(result => setData(result))
      .catch((error) => console.log(error));
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'count', headerName: 'Posts', width: 200 },
  ];

  return (
    <div className="mx-auto w-1/2 pt-10 text-center">
      {data ? <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: page, pageSize: pageSize },
          },
        }}
        pageSizeOptions={[ 5, 10 ]}
        checkboxSelection
      /> : <Skeleton variant="rectangular" width={700} height={400} />
      }
    </div>
  );

};
