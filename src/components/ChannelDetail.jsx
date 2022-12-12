import { useState, useeffect, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Videos, ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));
  }, [id])
  return (
    <div>ChannelDetail</div>
  )
}

export default ChannelDetail