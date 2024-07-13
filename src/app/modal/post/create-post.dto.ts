import { PostTypeEnum, PostVisibilityEnum } from "./post-enum"

export interface CreatePostDto {
  title: string
  content: string
  urls: Url[]
  visibility: PostVisibilityEnum
  pinned: boolean
  metadata: Metadata
  expireOn: string
}

export interface Url {
  name?: string
  link?: string
  type: PostTypeEnum
}

export interface Metadata {
  tags: string[]
  userMentions: string[]
  location: string
  blurHash: string
}