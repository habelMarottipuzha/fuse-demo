import { MemberType } from "./member-enum"

export interface GetMemberDto {
    id: number
    createdAt: string
    updatedAt: string
    createdBy: number
    updatedBy: number
    version: number
    firstName: string
    middleName: string
    lastname: string
    displayName: string
    imageLink: string
    email: string
    mobile: string
    street: string
    city: string
    state: string
    country: string
    type: MemberType
    parentId: number
    orgId: number
  }
  