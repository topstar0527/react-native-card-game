/**
 * Created by liekkas on 2017/1/17.
 */
import React from 'react'
import {Table} from 'antd'
import {Card} from '../../../../index'

const columns = [
  {
    title: 'Property',
    key: 'prop',
    width: 150,
    dataIndex: 'prop'
  },
  {
    title: 'Description',
    key: 'desc',
    width: 400,
    dataIndex: 'desc'
  },
  {
    title: 'Type',
    key: 'type',
    width: 100,
    dataIndex: 'type'
  },
  {
    title: 'Default',
    key: 'defaultValue',
    width: 150,
    dataIndex: 'defaultValue'
  }
]

const API = ({data}) => {
  return (
    <Card headerText={'API'} headerIcon={'fa fa-book'}>
       <Table rowKey={row => row.prop} columns={columns} dataSource={data} pagination={false} bordered/>
    </Card>
  )
}

export default API
