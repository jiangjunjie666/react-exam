import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosRes, ResData } from '@/utils/http'
import { RootState, AppThunk } from '../index'

const initialState = {
  subject_tree: [], //课程数据
  active_two: {} //二级分类数据
}

export const get_subject_tree_async = createAsyncThunk('get/subject_tree', async (action, state) => {
  const res: AxiosRes = await axios.get('api/subject')
  return res.data.data
})
export const subjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder
  }
})

export default subjectSlice.reducer
