import {useState, useMemo, useEffect} from 'react'
import styles from '../../User.module.css'
import { useTable } from "react-table";

function Activity(props:any) {
    const data = useMemo(
        () => [
            {
                name: 'sdfsdf',
                item: 'Minsk',
                price: '27',
                quantity: 'rain',
                from: '',
                to: '',
                time: ''
            },
        ],
        []
    )
   
    const columns: any[] = useMemo(
        () => [
			{
				Header: '',
				accessor: 'name', // accessor is the "key" in the data
			},
			{
				Header: 'Item',
				accessor: 'item',
			},
			{
				Header: 'Price',
				accessor: 'price', // accessor is the "key" in the data
			},
			{
				Header: 'Quantity',
				accessor: 'quantity', // accessor is the "key" in the data
			},
			{
				Header: 'From',
				accessor: 'from', // accessor is the "key" in the data
			},
			{
				Header: 'To',
				accessor: 'to', // accessor is the "key" in the data
			},
			{
				Header: 'Time',
				accessor: 'time', // accessor is the "key" in the data
			},
        ],
        []
    )
   
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })
   
    return (
        <table {...getTableProps()} className={styles.activityTbl}>
            <thead className={styles.activityThead}>
            {
				headerGroups.map(headerGroup => (
					<tr {...headerGroup.getHeaderGroupProps()} className={styles.activityTheadRow}>
					{
						headerGroup.headers.map(
							column => (
								<th {...column.getHeaderProps()} className={styles.activityTheadCol}>
									{column.render('Header')}
								</th>
							)
						)
					}
					</tr>
				))
			}
            </thead>
            <tbody {...getTableBodyProps()} className={styles.activityTbody}>
            {
				rows.map(row => {
              		prepareRow(row)
              		return (
						<tr {...row.getRowProps()} className={styles.activityTbodyRow}>
						{
							row.cells.map(cell => {
								return (
									<td {...cell.getCellProps()} className={styles.activityTbodyCol}>
										{cell.render('Cell')}
									</td>
								)
							})
						}
						</tr>
              		)
            	})
			}
            </tbody>
        </table>
    );
}

export default Activity
