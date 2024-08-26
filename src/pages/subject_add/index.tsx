import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { TreeSelect, Button } from 'antd'
import type { TreeSelectProps } from 'antd'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { get_subject_tree_async } from '@/store/slice/subject'
function SubjectAdd() {
  const treeData = [
    {
      value: 'parent 1',
      title: 'parent 1',
      children: [
        {
          value: 'parent 1-0',
          title: 'parent 1-0',
          children: [
            {
              value: 'leaf1',
              title: 'leaf1'
            },
            {
              value: 'leaf2',
              title: 'leaf2'
            },
            {
              value: 'leaf3',
              title: 'leaf3'
            },
            {
              value: 'leaf4',
              title: 'leaf4'
            },
            {
              value: 'leaf5',
              title: 'leaf5'
            },
            {
              value: 'leaf6',
              title: 'leaf6'
            }
          ]
        },
        {
          value: 'parent 1-1',
          title: 'parent 1-1',
          children: [
            {
              value: 'leaf11',
              title: <b style={{ color: '#08c' }}>leaf11</b>
            }
          ]
        }
      ]
    }
  ]

  const [value, setValue] = useState<string>()

  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(get_subject_tree_async())
  }, [])
  const onChange = (newValue: string) => {
    setValue(newValue)
  }

  const onPopupScroll: TreeSelectProps['onPopupScroll'] = (e) => {
    console.log('onPopupScroll', e)
  }
  return (
    <div className={styles.subjectAdd}>
      <div className={styles.top}>
        <div className={styles.title}>
          <h2>基础-网络基础</h2>
        </div>
        <TreeSelect showSearch style={{ width: '300px' }} value={value} dropdownStyle={{ maxHeight: 400, overflow: 'auto' }} placeholder="Please select" allowClear treeDefaultExpandAll onChange={onChange} treeData={treeData} onPopupScroll={onPopupScroll} />
        <Button type="primary" className={styles.btn}>
          新增题目
        </Button>
      </div>
      <div className={styles.content}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
    </div>
  )
}

export default SubjectAdd
