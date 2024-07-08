import { PostTypeEnum } from "./post-enum"

export interface CreatePostDto {
    title: string
    content: string
    contentUrls: string[]
    type: PostTypeEnum
    visibility: "PUBLIC" | "PRIVATE"
    pinned: boolean
    metadata: Metadata
    expireOn: string
  }
  
  export interface Metadata {
    tags: string[]
    userMentions: string[]
    location: string
    blurHash: string
  }
  