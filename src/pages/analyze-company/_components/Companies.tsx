import React from "react";
import { CompanyContributionData, CompanyInfo, useCompanyContributions } from "./hooks";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Skeleton from "@mui/material/Skeleton";


interface CompaniesProps {
  company: CompanyInfo
}

const Companies = ({ company }: CompaniesProps) => {
  const { data, loading } = useCompanyContributions(company?.name)

  if (!company) {
    return <></>
  }

  return (
    <>
      <DataTable data={data?.data ?? []} loading={loading} />
    </>
  )
}

type Dimension = {
  key: keyof CompanyContributionData
  title: string
  align?: 'right'
}

const DIMENSIONS: Dimension[] = [
  { key: 'contributions', title: 'Total Contributions' },
  { key: 'repo_name', title: 'Repository' },
  { key: 'pushes', title: 'Pushes', align: 'right' },
  { key: 'pull_requests', title: 'PRs', align: 'right' },
  { key: 'reviews', title: 'PR Reviews', align: 'right' },
  { key: 'review_comments', title: 'PR Review Comments', align: 'right' },
  { key: 'issues', title: 'Issues', align: 'right' },
  { key: 'issue_comments', title: 'Issue Comments', align: 'right' },
]

const DataTable = ({ data, loading }: { data: CompanyContributionData[], loading: boolean }) => {
  return (
    <Table className='clearTable'>
      <TableHead>
      <TableRow>
        <TableCell variant='head'>Rank</TableCell>
        {DIMENSIONS.map(d => <TableCell key={d.key} align={d.align}>{d.title}</TableCell>)}
      </TableRow>
      </TableHead>
      <TableBody
        sx={theme => ({
          '.MuiTableRow-root:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          }
        })}
      >
      {loading ? renderLoading() : renderData(data)}
      </TableBody>
    </Table>
  )
}

const renderData = (data: CompanyContributionData[]) => {
  return data.map((item, i) => (
    <TableRow>
      <TableCell component='th'>#{i + 1}</TableCell>
      {DIMENSIONS.map(d => <TableCell key={d.key} align={d.align}>{item[d.key]}</TableCell>)}
    </TableRow>
  ))
}

const renderLoading = () => {
  return [0, 1, 2, 3, 4, 5].map((item, i) => (
    <TableRow>
      <TableCell component='th'><Skeleton sx={{ display: 'inline-block' }} /></TableCell>
      {DIMENSIONS.map(d => <TableCell key={d.key} align={d.align}><Skeleton sx={{ display: 'inline-block', width: '100%' }} /></TableCell>)}
    </TableRow>
  ))
}

export default Companies
