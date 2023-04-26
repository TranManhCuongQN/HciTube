import { SuccessResponse } from 'src/types/utils.type'
import { UploadVideo, Video, VideoItem } from 'src/types/video.type'
import http from 'src/utils/http'

export const URL_GET_VIDEO = '/api/v1/videos'
export const URL_GET_VIDEO_CHANNEL = `/api/v1/channels/`

const videoApi = {
  getVideoAll: () => {
    return http.get<SuccessResponse<Video[]>>(URL_GET_VIDEO)
  },
  getVideoById: (idVideo: string) => {
    return http.get<SuccessResponse<VideoItem>>(`${URL_GET_VIDEO}/${idVideo}`)
  },
  updateInforVideo: (data: UploadVideo, idVideo: string) => {
    return http.patch<SuccessResponse<Video>>(`${URL_GET_VIDEO}/${idVideo}`, data)
  },
  deleteVideo: (idVideo: string) => {
    return http.delete<SuccessResponse<Video>>(`${URL_GET_VIDEO}/${idVideo}`)
  },
  getVideoChannel: (idChannel: string) => {
    return http.get<SuccessResponse<Video[]>>(`${URL_GET_VIDEO_CHANNEL}/${idChannel}/videos`)
  }
}
export default videoApi
