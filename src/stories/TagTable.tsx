import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Alert, Skeleton } from '@mui/material';
import { Tag } from '../types/tag';
import ErrorIcon from '@mui/icons-material/Error';

interface TagTableProps {
  /**
   * Page display
   */
  page?: number,
  /**
   * Amount of records on a single page
   */
  pageSize?: number,
  /**
   * API URL to fetch data from
   */
  API_URL?: string,
}

/**
 * Table displaying most popular tags from Stack Overflow
 */
export const TagTable = ({
  page = 0,
  pageSize = 5,
  API_URL = 'https://api.stackexchange.com/2.3/tags?site=stackoverflow',
}: TagTableProps) => {
  const [ data, setData ] = useState<Tag[]>();
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);
  useEffect(() => {
    axios.get(API_URL)
      .then(result => {
        if (result && result.data && result.data.items) {
          return result.data.items.map((item: any, index: number) => ({
            ...item,
            id: index + 1,
          }));
        } else {
          throw new Error('Data not available');
        }
      })
      .then(result => {
        if (result) {
          setData(result);
        } else {
          throw new Error('Result is undefined');
        }
      })
      .catch((error) => {
        setError(error.response ? error.response.status : 'Network Error');
      })
      .finally(() => setLoading(false));
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'count', headerName: 'Posts', width: 200 },
  ];

  return (
    <div>
      <div className="mx-auto w-1/2 pt-10 text-center">
        {!loading && data ? <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: page, pageSize: pageSize },
            },
          }}
          pageSizeOptions={[ 5, 10 ]}
          checkboxSelection
        /> : <Skeleton variant="rectangular" width={700} height={400}/>
        }
        {error !== null && <Alert severity="error"> Error: {error}</Alert> }
      </div>
    </div>
  );

};
