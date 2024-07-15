export interface GetPostDto {
    id: number
    title: string
    content: string
    contentUrls: string[]
    urls: any[]
    type: any
    visibility: string
    pinned: any
    metadata: Metadata
    permissions: Permissions
    orgId: number
    expireOn: string
    deletedOn: any
    createdAt: string
    updatedAt: string
    createdBy: any
    updatedBy: any
  }
  
  export interface Metadata {
    tags: string[]
    userMentions: any[]
    location: string
    blurHash: any
  }
  
  export interface Permissions {
    moderator: boolean
    editable: boolean
    deletable: boolean
    hidden: boolean
    userDeleted: boolean
    editHistoryVisible: boolean
  }
  